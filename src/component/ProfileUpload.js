import React from "react";
import { Avatar, Grid } from "@mui/material";
// workspace 생성 modal
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
import { actionCreators as imageActions } from "../redux/modules/imageReducer";

import ButtonList from "../component/WorkspaceContainer/ButtonList";
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
import Upload from "./Upload";

const ProfileUpload = (props) => {
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

  const [image, setImage] = React.useState(null);

  //업로드
  const preview = useSelector((state) => state.imageReducer.preview);
  const dispatch = useDispatch();
  // 지금 업로드 중인지 확인하는 변수
  //   const is_uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();
  const selectFile = (e) => {
    console.log(e.target);
    // input에 가진 files 객체 보기
    console.log(e.target.files);
    // 선택한 파일에 어떻게 저장되어 있나 보기
    console.log(e.target.files[0]);
    // ref로도 확인
    console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = fileInput.current.files[0];
    // 파일 내용을 읽어온다.
    reader.readAsDataURL(file);
    // 읽기가 끝나면 발생하는 이벤트 핸들러.
    reader.onloadend = () => {
      console.log(reader.result); // 파일 컨텐츠(내용물)
      dispatch(imageActions.setPreview(reader.result));
    };

    if (file) {
      setImage(file);
    }
  };

  return (
    <div>
      <Avatar
        variant="rounded"
        src="/broken-image.jpg"
        sx={{
          width: 30,
          height: 30,
          position: "absolute",
          top: 4,
          right: 10,
          cursor: "pointer",
        }}
        onClick={handleClick}
      />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <Box sx={{ padding: "30px", width: "600px", margin: "auto" }}>
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
                내 프로필 편집
              </Typography>
            </Box>
          </BootstrapDialogTitle>
          <Grid container>
            <Grid item xs={8}>
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
                성명
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
                  //   inputRef={workName}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      //   addWorkSpace();
                      handleClose();
                    }
                  }}
                />
              </Box>
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
                표시 이름
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
                  //   inputRef={workName}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      //   addWorkSpace();
                      handleClose();
                    }
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Typography
                id="modal-modal-description"
                variant="subtitle1"
                sx={{
                  mt: 2,
                  paddingLeft: "27px",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                프로필 사진
              </Typography>
              <div style={{ width: "150px", margin: "auto" }}>
                {/* disabled 속성 주면 파일선택 버튼 안눌린다. */}
                <img
                  src={
                    preview
                      ? preview
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAXVBMVEXv7+9mZmbs7OxfX1/39/d+fn6np6fX19fz8/POzs55eXlbW1uDg4PS0tJkZGRhYWFqamrn5+eLi4tWVlbh4eGUlJSqqqqhoaH7+/u+vr5vb2/Jycm/v7+Ojo6wsLDYus8vAAADXElEQVR4nO3b6XLiOhCGYWshtG0siWVCljNz/5c5LQhhiWAyFacO8rzPv2Bw1eeW1LIJTQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcYMXKCKfRs4gd4TzfbT7MxzFUkFY6F3v3devYt2MMku/lZ6GbjWCR+uH+02ptR6mJLMY5z/eSbpQRKJq2itqOM99Ie39Ie4u91lUnmPZq1kmmFZHmSuDppZXN0G6ubIgnltbKZuvi2vzYSGlATyytn3frZFIMaVMq7sTSNj+jCSlq3lVT+MS00srcGZNCSsa4eeH4xNI+uxQ1qta3f55+bZ9dfNGwOpLjP5B23ufK5rjrtnC86rTiP7y0iPu0oZtWB7LWv66WFyuvH2La5Q2vpVgVp/Wvyc2Wl28dOuN699L6afVbaVN86WcXoazY/349vi7FyuWFaCpOK63J3SZ254+areb1XrfJxTuhWtP6IUQTc9zZ6cv27W7A7p6V7+prT26IKk0rw9vau1t9S5tEtRvOZ3d/daaVoQ+HtMl11743kW0n9ddW2vAeVjeJujIXM/itc4s8pt9fqTGtNtWYjrUtxc3zVx7WenOwypU91LfCtNp6jpXdi7O8zThZh2VpZRvy3Har/PfbgerSWhlMNJfiru+edZ0HF0Me5+uf9n2pri6tb81lZQ9xT3usf3RBB7ne2afdYN5/vLa0MiQX0se0eWU+dCLJq3EurDbkoIl1MNva0tpcOh3GpcruqtsdMlldjU/fFsLK79eputLqpuLjnD1w3X52Wvu07c/f5xa+vrR+cLEwio/V3Rc3h81z9jjMjVlIPlRTWtGw17O+x9VNRZ7Zx+uSH7m6RS58NWlz67md1bz13e2Hqa25damSmtLqLd4f0+oEXe777KWQd1X1fKPp2+RuzNlDFcNLviShlDeumlUlaeeD3rxfaz5nY1ZbbGEQpD7F+GPRz+8/re/MQxfMrfX4mLYs5EsVQ6ygtr5zn5izn1FDWulKm8Wppn3qPjGIJ5NW5+1ISHtv/r20I0zcVEva3sWv/3uynmJdQdrm18Moto/bzf8d5RPEy5MfQeEL3/sjdpxfP4zzY4zvZhu7zE8Uv2pZ/uYPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg7/0G6cMyGr/MjwcAAAAASUVORK5CYII="
                  }
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "5px",
                    margin: "10px auto",
                  }}
                />
                <label
                  className="input-file-button"
                  for="input-file"
                  style={{
                    width: "200px",
                    padding: "6px 32px",
                    border: "1px solid #c0c0c0",
                    borderRadius: "5px",
                    fontWeight: "900",
                    cursor: "pointer",
                  }}
                >
                  사진 업로드
                </label>
                <input
                  id="input-file"
                  type="file"
                  onChange={selectFile}
                  ref={fileInput}
                  // disabled={is_uploading}
                  style={{ display: "none" }}
                />

                {/* <Button _onClick={uploadFB}>업로드하기</Button> */}
              </div>
            </Grid>
          </Grid>
          <Box
            sx={{
              marginTop: "25px",
              paddingTop: "5px",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                //   addWorkSpace();
                handleClose();
              }}
              sx={{ fontWeight: 900, backgroundColor: "#317658" }}
            >
              변경사항 저장
            </Button>
          </Box>
        </Box>
      </BootstrapDialog>
    </div>
  );
};

export default ProfileUpload;
