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
  const modalStyle = {
    width: "600px",
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
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
      >
        <Box style={modalStyle}>
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
              이미지
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              //   addWorkSpace();
              handleClose();
            }}
          >
            생성
          </Button>
        </Box>
      </BootstrapDialog>
    </div>
  );
};

export default ProfileUpload;
