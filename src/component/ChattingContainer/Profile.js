import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Card, CardContent } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

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

export default function Profile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <PersonIcon
          sx={{
            color: "white",
            backgroundColor: "#44bedf",
            border: "solid 0px",
            borderRadius: "5px",
            ml: 1,
            mr: 1,
            fontSize: "25px",
            mb: 0,
          }}
        />
        <Typography
          sx={{
            mt: 0.5,
            ml: 1,
            fontWeight: "bold",
            fontSize: "18px",
            color: "black",
          }}
        >
          이주석
        </Typography>
      </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box sx={{ height: 800 }}>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            <Box sx={{ display: "flex", flexDirection: "row", mb: 3 }}>
              <PersonIcon
                sx={{
                  color: "white",
                  backgroundColor: "#44bedf",
                  border: "solid 0px",
                  borderRadius: "5px",
                  mr: 1,
                  fontSize: "50px",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "black",
                  my: "auto",
                }}
              >
                이주석
              </Typography>
            </Box>
          </BootstrapDialogTitle>
          <Box sx={{ display: "flex", flexDirection: "row", mb: 1, ml: 2 }}>
            <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
              정보
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: "#eeeeee", height: "83%" }}>
            <DialogContent>
              <Card sx={{ minWidth: 500 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: 20 }} />
                    <Typography
                      sx={{ fontSize: 14, ml: 1 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      오후 1:01 현지 시간
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      my: 1,
                    }}
                  >
                    <MailOutlineIcon sx={{ fontSize: 20 }} />
                    <Typography
                      sx={{ fontSize: 14, ml: 1 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      dorxm999@gmail.com
                    </Typography>
                  </Box>
                  <Button
                    sx={{ mx: 0, px: 0 }}
                    onClick={() => alert("전체 프로필 보기 이동")}
                  >
                    전체 프로필 보기
                  </Button>
                </CardContent>
              </Card>
            </DialogContent>
          </Box>
        </Box>
      </BootstrapDialog>
    </div>
  );
}
