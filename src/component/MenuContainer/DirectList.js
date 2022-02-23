import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { history } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as dmActions } from "../../redux/modules/dmReducer";
// workspace 생성 modal
import { Box, Typography, Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function DirectList() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const params = useParams();
  const work_index = parseInt(params.workId);
  const memberId = parseInt(params.receiverId);
  const userinfo = useSelector((state) => state.loginReducer);
  const dmsinfo = useSelector((state) => state.dmReducer);
  const dmsList = dmsinfo.dmsList;
  console.log(work_index, dmsList);
  // 테스트 코드
  const dispatch = useDispatch();
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "#3F0E40" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick} sx={{ color: "#CCCBCB" }}>
        {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        <ListItemText primary="다이렉트메세지" style={{ padding: "0px 5px" }} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {dmsList.map((p, idx) => {
            return (
              <ListItemButton
                sx={{ pl: 4, padding: "0px 16px 0px 32px" }}
                key={p.receiverId + "" + p.receiverName + idx}
              >
                <ListItemIcon>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      src="/broken-image.jpg"
                      variant="rounded"
                      sx={{ width: 24, height: 24 }}
                    />
                  </Stack>
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#CCCBCB" }}
                  onClick={() => {
                    history.push(
                      `/${
                        userinfo.token.split(" ")[1]
                      }/${work_index}/${memberId}`
                    );
                    dispatch(dmActions.getDmDB(work_index));
                  }}
                >
                  {p.memberName}
                </ListItemText>
              </ListItemButton>
            );
          })}
          <DirectAdd workId={work_index} workName={dmsinfo.workName} />
        </List>
      </Collapse>
    </List>
  );
}
const DirectAdd = (props) => {
  // modal
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  const modalStyle = {
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    p: 3,
  };
  const dispatch = useDispatch();
  const memberName = React.useRef();
  const addDm = () => {
    console.log(props.workId);
    dispatch(dmActions.addDmDB(props.workId, memberName.current.value));
  };
  return (
    <div>
      <ListItemButton
        sx={{ pl: 4, padding: "0px 16px 0px 32px" }}
        onClick={handleClick}
      >
        <ListItemIcon>
          <Stack direction="row" spacing={2}>
            <Avatar
              variant="rounded"
              sx={{ width: 24, height: 24, bgcolor: "#552456" }}
            >
              +
            </Avatar>
          </Stack>
        </ListItemIcon>
        <ListItemText style={{ color: "#CCCBCB" }}>팀원 추가</ListItemText>
      </ListItemButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box sx={modalStyle}>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                {props.workName}(으)로 사용자 초대
              </Typography>
            </Box>
          </BootstrapDialogTitle>
          <Typography
            id="modal-modal-description"
            variant="subtitle1"
            sx={{
              mt: 2,
              paddingLeft: "16px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            받는 사람:
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
              placeholder="name@naver.com"
              inputRef={memberName}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addDm();
                  handleClose();
                }
              }}
            />
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              addDm();
              handleClose();
            }}
            sx={{ float: "right" }}
          >
            보내기
          </Button>
        </Box>
      </BootstrapDialog>
    </div>
  );
};
