import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, ButtonGroup } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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
          <BookmarkModal />
        </ButtonGroup>
      </Popover>
    </div>
  );
}

const BookmarkModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",

    borderRadius: "5px",
    boxShadow: 24,
    p: 3,
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ border: "none" }}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            이 채널에 책갈피 추가
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="subtitle1"
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            링크
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" variant="outlined" />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
