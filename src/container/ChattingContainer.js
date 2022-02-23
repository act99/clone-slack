import React from "react";
import Box from "@mui/material/Box";
import Profile from "../component/ChattingContainer/Profile";
import Bookmark from "../component/ChattingContainer/Bookmark";
import { Button, ButtonGroup, TextField } from "@mui/material";
import ChatRoom from "../component/ChattingContainer/ChatRoom";
const ChattingContainer = (props) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "49px",
          alignItems: "center",
        }}
        style={{
          borderBottom: "solid 1px #E2E2E2",
        }}
      >
        <Profile />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "36px",
        }}
        style={{
          borderBottom: "solid 1px  #E2E2E2",
        }}
      >
        <Bookmark />
      </Box>
      <ChatRoom />
    </>
  );
};
export default ChattingContainer;
