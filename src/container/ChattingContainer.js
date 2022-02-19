import React from "react";
import Box from "@mui/material/Box";
import Profile from "../component/ChattingContainer/Profile";
import Bookmark from "../component/ChattingContainer/Bookmark";
const ChattingContainer = (props) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 50,
          pl: 2,
        }}
        style={{
          borderBottom: "solid 1px #e2e2e2",
        }}
      >
        <Profile />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 40,
          pl: 2,
        }}
        style={{
          borderBottom: "solid 1px #e2e2e2",
        }}
      >
        <Bookmark />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 650,
          // backgroundColor: "black",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: 50,
            // backgroundColor: "red",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Box>
    </>
  );
};

export default ChattingContainer;
