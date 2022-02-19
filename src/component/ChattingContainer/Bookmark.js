import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, ButtonGroup } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

export default function Bookmark() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{ height: "100%" }}>
      <Button
        aria-describedby={id}
        sx={{
          ml: 1,
          display: "block",
          color: "#707170",
          fontWeight: "bold",
          fontSize: 12,
          my: "auto",
          height: "100%",
        }}
        onClick={handleClick}
      >
        + 책갈피 추가
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          sx={{ py: 3, px: 2, backgroundColor: "#f8f8f8" }}
        >
          <Button sx={{ border: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: 300,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  fontSize: 27,
                  mr: 3,
                  color: "gray",
                  width: 40,
                  height: 40,
                }}
              >
                <LinkIcon />
              </Box>
              <Box orientation="vertical" textAlign="start">
                <Typography sx={{ fontWeight: "bold", color: "black" }}>
                  이 채널에 책갈피 추가
                </Typography>
                <Typography sx={{ color: "black", fontSize: 14 }}>
                  팀의 중요한 링크 쉽게 찾기
                </Typography>
              </Box>
            </Box>
          </Button>
        </ButtonGroup>
      </Popover>
    </div>
  );
}
