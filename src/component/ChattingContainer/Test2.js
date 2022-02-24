// import React from "react";
// import styled from "styled-components";
// // Components
// // 소켓 통신
// import Stomp from "stompjs";
// import SockJS from "sockjs-client";
// import { useHistory, useParams } from "react-router-dom";
// // components

// const tokenCheck = document.cookie;
// const token = tokenCheck.split("=")[1];
// // 채팅 방 컴포넌트
// const ChattingRoom = (props) => {
//   const params = useParams();
//   const workId = params.workId;
//   // 소켓 통신 객체
//   const sock = new SockJS("http://52.78.96.234:8080/ws");
//   const ws = Stomp.over(sock);
//   const history = useHistory();
//   const [userData, setUserData] = React.useState({
//     username: "gdgd",
//     receiverName: "gdgd",
//     connected: false,
//     message: "gdgd",
//     roomId: workId,
//     // roomId: 1,
//   });

//   // 렌더링 될 때마다 연결,구독 다른 방으로 옮길 때 연결, 구독 해제
//   React.useEffect(() => {
//     wsConnectSubscribe();
//     return () => {
//       wsDisConnectUnsubscribe();
//     };
//   }, [workId]);

//   // 웹소켓 연결, 구독
//   function wsConnectSubscribe() {
//     try {
//       ws.connect(
//         {
//           token: token,
//         },
//         () => {
//           ws.subscribe(
//             `/room/${workId}`,
//             (data) => {
//               const newMessage = JSON.parse(data.body);
//             },
//             { token: token }
//           );
//         }
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // 연결해제, 구독해제
//   function wsDisConnectUnsubscribe() {
//     try {
//       ws.disconnect(
//         () => {
//           ws.unsubscribe("sub-0");
//         },
//         { token: token }
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // 웹소켓이 연결될 때 까지 실행하는 함수
//   function waitForConnection(ws, callback) {
//     setTimeout(
//       function () {
//         // 연결되었을 때 콜백함수 실행
//         if (ws.ws.readyState === 1) {
//           callback();
//           // 연결이 안 되었으면 재호출
//         } else {
//           waitForConnection(ws, callback);
//         }
//       },
//       1 // 밀리초 간격으로 실행
//     );
//   }

//   // 메시지 보내기
//   function sendMessage() {
//     try {
//       // token이 없으면 로그인 페이지로 이동
//       if (!token) {
//         alert("토큰이 없습니다. 다시 로그인 해주세요.");
//         history.replace("/");
//       }
//       // send할 데이터
//       const data = {
//         ...userData,
//       };
//       // 빈문자열이면 리턴
//       //   if (userData.message === "") {
//       //     return;
//       //   }
//       // 로딩 중
//       waitForConnection(ws, function () {
//         ws.send(`/room/${workId}`, { token: token }, JSON.stringify(data));
//         console.log(ws.ws.readyState);
//       });
//     } catch (error) {
//       console.log(error);
//       console.log(ws.ws.readyState);
//     }
//   }

//   return (
//     <Container>
//       {userData && (
//         <ChatWrap>
//           <form className="send-message">
//             <input
//               type="text"
//               className="input-message"
//               placeholder="enter the message"
//               value={userData.message}
//             />
//             <button type="button" className="send-button" onClick={sendMessage}>
//               send
//             </button>
//           </form>
//         </ChatWrap>
//       )}
//     </Container>
//   );
// };

// const Container = styled.div`
//   ${(props) => props.theme.border_box};
//   ${(props) => props.theme.flex_row}
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   color: ${(props) => props.theme.theme_yellow};
//   @media ${(props) => props.theme.mobile} {
//     flex-direction: column;
//   }
// `;

// const ChatWrap = styled.div`
//   ${(props) => props.theme.flex_column}
//   width: 70%;
//   height: 100%;
//   @media ${(props) => props.theme.mobile} {
//     width: 100%;
//     height: 85%;
//   }
// `;

// export default ChattingRoom;
