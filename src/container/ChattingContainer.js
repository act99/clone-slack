import React from "react";
import Box from "@mui/material/Box";

const ChattingContainer = (props) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 50,
        }}
        style={{
          borderBottom: "solid 1px #585858",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: 40,
        }}
        style={{
          borderBottom: "solid 1px #585858",
        }}
      ></Box>

      <Box
        sx={{
          width: "100%",
          height: 650,
          backgroundColor: "black",
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
            backgroundColor: "red",
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
