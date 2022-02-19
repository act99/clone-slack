// import React, { useRef } from "react";
// import SockJsClient from "react-stomp";
// function Test2() {
//   const $websocket = useRef(null);
//   const handleMsg = (msg) => {
//     console.log(msg);
//   };
//   const handleClickSendTo = () => {
//     $websocket.current.sendMessage("/sendTo");
//   };
//   const handleClickSendTemplate = () => {
//     $websocket.current.sendMessage("/Template");
//   };
//   return (
//     <div>
//       <SockJsClient
//         url="http://52.78.96.234:8080/chat"
//         // url="http://3.37.123.52:8080/test"
//         topics={["/topic/sendTo", "/topic/template", "/topic/api"]}
//         onMessage={(msg) => {
//           console.log(msg);
//         }}
//         ref={$websocket}
//       />
//       <button onClick={handleClickSendTo}>SendTo</button>{" "}
//       <button onClick={handleClickSendTemplate}>SendTemplate</button>{" "}
//     </div>
//   );
// }
// export default Test2;
