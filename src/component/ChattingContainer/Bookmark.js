import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, ButtonGroup } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import bookMarkReducer, {
  actionsCreators as bookmarkActions,
} from "../../redux/modules/bookmarkReducer";
import { useParams } from "react-router-dom";

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
  const dispatch = useDispatch();
  const bookmarkList = useSelector(
    (state) => state.bookmarkReducer
  ).bookmarkList;
  console.log(bookmarkList);
  React.useEffect(() => {
    dispatch(bookmarkActions.setMark());
    // dispatch(bookmarkActions.getMarkDB());
  }, []);
  return (
    <div style={{ height: "100%", display: "flex" }}>
      {bookmarkList.map((p, idx) => {
        return (
          <Button
            key={idx}
            sx={{
              ml: 1,
              display: "block",
              color: "#707170",
              fontWeight: "bold",
              fontSize: 12,
              my: "auto",
              height: "100%",
            }}
            onClick={() => {
              window.open(`${p.bookmarkUrl}`, "_blank");
            }}
          >
            {p.bookmarkName}
          </Button>
        );
      })}
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

  const dispatch = useDispatch();
  const bookmarkName = React.useRef();
  const bookmarkUrl = React.useRef();

  //receiverName 받아오기
  const params = useParams();
  const receiverId = params.receiverId;

  const dmsList = useSelector((state) => state.dmReducer.dmsList);

  const receiverName = dmsList.filter(
    (l, idx) => l.receiverId === parseInt(receiverId)
  )[0].receiverName;

  const addMark = () => {
    const mark_list = {
      receiverName: receiverName,
      bookmarkName: bookmarkName.current.value,
      bookmarkUrl: bookmarkUrl.current.value,
    };
    dispatch(bookmarkActions.addMark(mark_list));
    // dispatch(bookmarkActions.addMarkDB(mark_list));
    console.log(mark_list, "북마크 생성");
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
            <TextField
              id="outlined-basic"
              variant="outlined"
              inputRef={bookmarkUrl}
            />
          </Box>
          <Typography
            id="modal-modal-description"
            variant="subtitle1"
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            이름
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              inputRef={bookmarkName}
            />
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              addMark();
              handleClose();
            }}
          >
            추가
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
