import React from "react";
import { Box, Card, CardContent, TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  AddButton,
  Header,
  WorkspaceButton,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from "../shared/style";

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/store";
import { actionsCreators as dmActions } from "../redux/modules/dmReducer";
import { actionsCreators as workSpaceActions } from "../redux/modules/workSpaceReducer";
import ButtonList from "../component/WorkspaceContainer/ButtonList";

// workspace 생성 modal
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

const WorkspaceContainer = (props) => {
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

  // 워크스페이스 조회
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.loginReducer);
  const workSpaceList = useSelector(
    (state) => state.workSpaceReducer.workspaceList
  );
  // 내가 생성한 워크스페이스
  const myCreateSpace = workSpaceList.filter(
    (l) => l.nickname === userinfo.userinfo.nickname
  );
  console.log(myCreateSpace);

  //내가 다이렉트 메세지에 포함된 워크스페이스
  // const myJoinSpace = workSpaceList.filter((l)=>l.)

  React.useEffect(() => {
    dispatch(workSpaceActions.getSpaceDB());
  }, []);

  // workspace 생성
  const workName = React.useRef();
  const addWorkSpace = () => {
    dispatch(
      workSpaceActions.addSpaceDB(
        workName.current.value // 백엔드에서 받아올때 앞에 두글자만 가져와서 state에 저장하기
      )
    );
    console.log(workName.current.value, "워크스페이스 개설");
  };

  return (
    // <Box sx={{ flexGrow: 1, height: 1, backgroundColor: "#3F0E40" }}>

    <WorkspaceWrapper>
      <Workspaces>
        {workSpaceList.map((p, idx) => {
          return (
            <WorkspaceButton
              key={p.workId + "" + p.workName + idx}
              id={p.workId}
              onClick={() => {
                history.push(`/${userinfo.token.split(" ")[1]}/${p.workId}/0`);
                console.log(p.workId, p.workName);
                dispatch(dmActions.getDmDB(p.workId, p.workName));
              }}
            >
              {p.workName}
            </WorkspaceButton>
          );
        })}

        <AddButton onClick={handleClick}>+</AddButton>

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
                  새 워크스페이스 생성
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
              워크스페이스 이름
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
                inputRef={workName}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    addWorkSpace();
                    handleClose();
                  }
                }}
              />
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                addWorkSpace();
                handleClose();
              }}
              sx={{ float: "right" }}
            >
              생성
            </Button>
          </Box>
        </BootstrapDialog>
      </Workspaces>
    </WorkspaceWrapper>

    // </Box>
  );
};

export default WorkspaceContainer;
