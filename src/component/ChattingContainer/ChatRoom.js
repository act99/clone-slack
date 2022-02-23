import React, { useEffect, useState } from "react";
import { over, VERSIONS } from "stompjs";
import SockJS from "sockjs-client";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonGroup,
  Grid,
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
import { actionCreators as loginActions } from "../../redux/modules/loginReducer";
import { useParams } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const tokenCheck = document.cookie;
const token = tokenCheck.split("=")[1];
var stompClient = null;
const ChatRoom = () => {
  //** */ 나중에 넣으면 될 것 로그인 정보임
  // const userinfo = useSelector((state) => state.loginReducer);
  // const loginNickname = userinfo.userinfo.nickname;
  //** */
  const [userData, setUserData] = useState({
    username: "회원정보",
    receivername: "받는 사람 정보",
    // imageUrl: "",
    connected: false,
    message: "",
  });
  const [messages, setMessages] = React.useState([]);
  const inputRef = React.useRef();

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let message = inputRef.current.value;
    setUserData({ ...userData, message: message });
    setMessages([...messages, userData]);
    console.log(userData);
  };

  //** 채팅창 스크롤 기능 구현을 위한 공간 */

  //** 채팅창 스크롤 기능 구현을 위한 공간 */

  //** 채팅창 박스*/

  //** 채팅창 박스*/

  return (
    <Box sx={{ px: 3 }}>
      <Box sx={{ height: 600, backgroundColor: "#ffffff", overflow: "auto" }}>
        {messages.map((item, index) => {
          return (
            <Box
              key={index + item.message}
              sx={{
                mt: 1,
              }}
            >
              <Grid
                container
                // spacing={}
                sx={{
                  // minHeight: 10,
                  backgroundColor: "#ffffff",
                }}
              >
                <Grid item xs={0.6}>
                  <IconButton sx={{ margin: "auto" }}>
                    <PersonIcon
                      sx={{
                        color: "white",
                        backgroundColor: "#44bedf",
                        border: "solid 0px",
                        borderRadius: "5px",
                        ml: 1,
                        mr: 1,
                        fontSize: "40px",
                        mb: 0,
                      }}
                    />
                  </IconButton>
                </Grid>
                <Grid item xs={11.4}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
                    {item.username}
                  </Typography>
                  <Typography sx={{ fontSize: "15px" }}>
                    {item.message}
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            // <Box key={index} sx={{ minHeight: 10, backgroundColor: "#eeeeee" }}>
            //   <div>{item.username}</div>
            //   <div>{item.message}</div>
            // </Box>
          );
        })}
      </Box>
      <Box
        sx={{ border: "solid 1px #e2e2e2", borderRadius: "10px", marginTop: 2 }}
      >
        <Box
          sx={{
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
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="이주영님에게 메시지 보내기"
            value={userData.message}
            onChange={handleMessage}
            size="small"
            ref={inputRef}
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

            <IconButton type="submit" className="send-button">
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
        </form>
      </Box>
    </Box>
  );
};

export default ChatRoom;
