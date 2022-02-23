import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Header } from "../shared/style";
export default function Bar() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  return (
    <Box
      sx={{
        backgroundColor: "#350d36",
        height: "38px",
        width: "100%",
      }}
    >
      <Avatar
        variant="rounded"
        src="/broken-image.jpg"
        sx={{
          width: 30,
          height: 30,
          position: "absolute",
          top: 4,
          right: 10,
        }}
      />
    </Box>
  );
}
