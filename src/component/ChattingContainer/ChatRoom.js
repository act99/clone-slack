import React, { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonGroup,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import VideocamIcon from "@mui/icons-material/Videocam";
import MicNoneIcon from "@mui/icons-material/MicNone";
import MoodIcon from "@mui/icons-material/Mood";
import { styled } from "@mui/material/styles";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

var stompClient = null;
const ChatRoom = () => {
  // const dispatch = useDispatch()
  // ** 유저 정보를 가져와서 useState 로 선언한 메시지 정보 변환 => 만약 token 있고 userinfo 있으면 username 을 바꿔주고 connected 를 true로 useEffect 를 사용할 것
  // const userinfo = useSelector((state) => state.loginReducer);
  // ** 다이렉트 메세지 id 값들을 넘겨받으면 privateChat 리스트가 패치되게끔 한다. useEffect 사용할 것임.
  // const directMessages = useSelector((state) => state.dmReducer.id)
  // ** 해당 워크스페이스 아이디를 가져옴. 예외처리를 위해
  // const workSpaceId = useSelector((state) => state.workSpaceReducer.id)

  // ** 개인 채팅 기능 => Map 을 쓴 이유는 object 형태의 객체들의 배열을 담아야 하기 때문입니다.
  const [privateChats, setPrivateChats] = useState(new Map());

  // ** 오픈 채팅 기능 얘 같은 경우는 방이 하나 기 때문에 채팅창 리스트만 담으면 됩니다. 이번에는 안 쓸 예정입니다.
  const [publicChats, setPublicChats] = useState([]);

  // ** 탭 => 채팅방 이름입니다.
  const [tab, setTab] = useState("CHATROOM");

  // ** 채팅하면서 나오는 데이터 => 앞으로 들어가야 할 것은 imageUrl 입니다.
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    imageUrl: "",
    connected: false,
    message: "",
  });
  // ** 여기다 넣어야 할 것은
  useEffect(() => {
    // ** userinfo 가 있으며, token 이 있으면 로그인 상태기 때문에, userData 에 username 을 닉네임으로 바꿔주고 connected 를 true 로 바꿔줍니다.
    // userinfo && token ? setUserData({username: userinfo.nickname, receivername: "", imageUrl: "", connected: true, message: ""})
    // ** workSpaces 아이디가 없을 때
    // if (workSpaces === null) {
    //   alert("워크스페이스 아이디가 없는 에러가 생겼습니다.");
    // }
    console.log(userData);
  }, [userData]);
  // ** connect 의 경우 소켓을 뚫어주는 역할을 한다. BaseUrl 에다가 /ws 를 붙여 소켓을 뚫어준다.
  const connect = () => {
    let Sock = new SockJS("http://52.78.96.234:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };
  // ** 커넥트가 됐을 때, 기본적으로 open 방을 열고, 본인의 private 방을 연다. (카톡같은 느낌 ?) subscribe : 구독이며, 소켓 url 을 의미
  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    // ** onMessageReceived 공통 메시지 받을 것 구독상태가 되면 response 가 열려있기 때문에 event 가 발생 시 event를 받는다.
    stompClient.subscribe("/chatroom/public", onMessageReceived);
    // ** onPrivateMessage 개인 메시지 받을 것 구독상태가 되면 response 가 열려있기 때문에 event 가 발생 시 event를 받는다.
    stompClient.subscribe(
      "/user/" + userData.username + "/private",
      onPrivateMessage
    );
    userJoin();
  };
  // ** userJoin의 경우, 내가 어떤 채팅 방에 들어갔을 때, receiver 에게 sendName을 보내주기 위한 것입니다. 제이슨 형태로 보내줍니다.
  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };
  // ** onMessageReceived 의 경우 나중에 알림 기능까지 넣어도 괜찮을 것 같으며, 시간날 때 알림기능 넣으면 괜춘
  const onMessageReceived = (payload) => {
    // ** event 로 받은 페이로드 값을 제이슨화시켜준다.
    var payloadData = JSON.parse(payload.body);
    // ** event에는 status 코드가 존재한다.
    // ** 입력한 변수가 status 이며 이게 true 여기서는 200일 때,
    switch (payloadData.status) {
      case "JOIN":
        // ** 만약 개인 채팅방에 샌더 네임이 없다면
        if (!privateChats.get(payloadData.senderName)) {
          // ** 프라이빗 챗에 세팅을 senderName을 설정시켜준다.
          //******** 이 구조로 어떤 사람이 접속했을 때,뜰 수 있는 구조이다. ******* */
          //******** 이걸 정말 잘 이용하면 실시간 알람기능이 가능할 수 있다. ******* */
          // *** 이걸로 state 변화주면 알람 기능 가능  *** //
          privateChats.set(payloadData.senderName, []);
          // ** 프라이빗 챗을 만들게 된다. (빈 채팅창으로 )
          setPrivateChats(new Map(privateChats));
        }
        break;
      //** 만약 메시지라면, 메시지 추가시켜라  */
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  //** 프라이빗 메시지가 있다면, payloadData를 privateChats 에 push 시켜주어라 라는 것 */
  const onPrivateMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    // ** 만약 프라이빗 챗이 senderName을 갖고있으면 채팅이 있는 것이기 때문에 해당 senderName으로 메시지를 푸쉬시켜주면 됨.
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
      //** 아니면 빈 리스트를 만들어 채팅창에 넣어줌. */
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  // ** 메시지 핸들러 => 메시지를 적는 input value 를 핸들링하기 위한 함수  onChange라고 생각하면 편함
  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };
  // ** 일반 채팅방 보내기 버튼  onClick 함수이며 socket의 send 기능을 담당해줌. 데이터를 보내고 메시지 "" 로 만들어 줌.
  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  // ** 이것은 개인 채팅방 보내기 버튼이다.
  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: "MESSAGE",
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  //** 유저네임 핸들러 */
  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, username: value });
  };
  // ** registerUser의 경우 사용 안해도 될 것 같다. 왜냐하면 우리는 로그인을 이미 한 상태이기 때문
  const registerUser = () => {
    connect();
  };
  // MUI style을 위한 코드
  const ValidationTextField = styled(TextField)({
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 0,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 0,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 0,
      borderColor: "white",
      padding: "4px !important", // override inline-style
    },
  });
  return (
    <div className="container">
      <div className="chat-box">
        <div className="member-list">
          <ul>
            <li
              onClick={() => {
                setTab("CHATROOM");
              }}
              className={`member ${tab === "CHATROOM" && "active"}`}
            >
              Chatroom
            </li>
            {[...privateChats.keys()].map((name, index) => (
              <li
                onClick={() => {
                  setTab(name);
                }}
                className={`member ${tab === name && "active"}`}
                key={index}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        {tab === "CHATROOM" && (
          <div className="chat-content">
            <ul className="chat-messages">
              {publicChats.map((chat, index) => (
                <li
                  className={`message ${
                    chat.senderName === userData.username && "self"
                  }`}
                  key={index}
                >
                  {chat.senderName !== userData.username && (
                    <div className="avatar">{chat.senderName}</div>
                  )}
                  <div className="message-data">{chat.message}</div>
                  {chat.senderName === userData.username && (
                    <div className="avatar self">{chat.senderName}</div>
                  )}
                </li>
              ))}
            </ul>
            <Box sx={{ border: "solid 1px #e2e2e2", borderRadius: "10px" }}>
              <Box
                sx={{
                  h: 5,
                  backgroundColor: "#e2e2e2",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  // borderBottomLeftRadius: 10,
                  // borderBottomRightRadius: 10,
                }}
              >
                <ButtonGroup variant="text" aria-label="text button group">
                  <IconButton onClick={() => console.log("굵기 버튼")}>
                    <FormatBoldIcon />
                  </IconButton>
                  <IconButton onClick={() => console.log("굵기 버튼")}>
                    <FormatItalicIcon />
                  </IconButton>
                  <IconButton onClick={() => console.log("링크 버튼")}>
                    <LinkIcon />
                  </IconButton>
                  <IconButton onClick={() => console.log("코드 스니펫 버튼")}>
                    <CodeIcon />
                  </IconButton>
                </ButtonGroup>
              </Box>
              <textarea
                placeholder="이주영님에게 메시지 보내기"
                value={userData.message}
                onChange={handleMessage}
                size="small"
                style={{
                  fontWeight: "bold",
                  border: "solid 0px",
                  padding: "10px",
                  width: "95%",
                  resize: "none",
                  outlineColor: "#ffffff",
                  backgroundColor: "#ffffff",
                  // outline-color: #FE6B8B;
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ButtonGroup>
                  <IconButton onClick={() => console.log("추가버튼")}>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => console.log("비디오 버튼")}>
                    <VideocamIcon />
                  </IconButton>
                  <IconButton onClick={() => console.log("녹음 버튼")}>
                    <MicNoneIcon />
                  </IconButton>
                  <IconButton onClick={() => console.log("아이콘 버튼")}>
                    <MoodIcon />
                  </IconButton>
                </ButtonGroup>

                <IconButton
                  type="button"
                  className="send-button"
                  onClick={sendValue}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "green",
                      px: 1,
                      py: 0.7,
                      justifyContent: "center",
                      justifyItems: "center",
                      border: "solid 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <SendIcon sx={{ color: "white" }} />
                    <Typography
                      sx={{
                        mx: 1,
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "white",
                      }}
                    >
                      |
                    </Typography>
                    <ExpandMoreIcon sx={{ color: "white" }} />
                  </Box>
                </IconButton>
              </Box>
            </Box>
          </div>
        )}
        {tab !== "CHATROOM" && (
          <div className="chat-content">
            <ul className="chat-messages">
              {[...privateChats.get(tab)].map((chat, index) => (
                <li
                  className={`message ${
                    chat.senderName === userData.username && "self"
                  }`}
                  key={index}
                >
                  {chat.senderName !== userData.username && (
                    <div className="avatar">{chat.senderName}</div>
                  )}
                  <div className="message-data">{chat.message}</div>
                  {chat.senderName === userData.username && (
                    <div className="avatar self">{chat.senderName}</div>
                  )}
                </li>
              ))}
            </ul>

            <div className="send-message">
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="enter the message"
                value={userData.message}
                onChange={handleMessage}
                size="small"
                sx={{ backgroundColor: "#ffffff", width: "100%" }}
              />
              <button
                type="button"
                className="send-button"
                onClick={sendPrivateValue}
              >
                send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
