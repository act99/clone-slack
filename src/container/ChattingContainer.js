import React from "react";
import Box from "@mui/material/Box";
import Profile from "../component/ChattingContainer/Profile";
import Bookmark from "../component/ChattingContainer/Bookmark";
import { Button, ButtonGroup, TextField } from "@mui/material";
import Test from "../component/ChattingContainer/Test";

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
      {/* <Box
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
      <Box
        sx={{
          width: "75vw",
          height: "84vh",
          px: 5,
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
            height: "70vh",
            backgroundColor: "blue",
            overflow: "scroll",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
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
          <Box
            sx={{
              mt: 2,
              h: 5,
              backgroundColor: "#eeeeee",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              // borderBottomLeftRadius: 10,
              // borderBottomRightRadius: 10,
            }}
          >
            <ButtonGroup variant="text" aria-label="text button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Box>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            // variant="filled"
            size="small"
            sx={{ backgroundColor: "#ffffff", width: "100%" }}
          />
          <ChatRoom />
        </Box>
      </Box> */}
      <Test />
      {/* <ChattingRoom /> */}
    </>
  );
};
export default ChattingContainer;
