import React from "react";
import Box from "@mui/material/Box";
import Profile from "../component/ChattingContainer/Profile";
import Bookmark from "../component/ChattingContainer/Bookmark";
import { Button, ButtonGroup } from "@mui/material";
const ChattingContainer = (props) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "5vh",
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
          height: "4vh",
        }}
        style={{
          borderBottom: "solid 1px  #e2e2e2",
        }}
      >
        <Bookmark />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "84vh",
          // backgroundColor: "black",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {/* <Box
          sx={{
            width: "100%",
            height: "100%",
            // backgroundColor: "red",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        /> */}
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            backgroundColor: "blue",
            overflow: "scroll",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              backgroundColor: " white",
              my: 3,
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "14vh",
            backgroundColor: "black",
          }}
        >
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            sx={{ p: 1 }}
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          {/* <ChatComponent /> */}
        </Box>
      </Box>
    </>
  );
};

export default ChattingContainer;
