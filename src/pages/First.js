import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/loginReducer";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function First() {
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.loginReducer);
  const token = userinfo.token;
  const history = useHistory();
  React.useEffect(() => {}, [token]);

  if (token === null) {
    return (
      <>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid item xs={12} mx={"auto"} component={Paper} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ButtonBase sx={{ width: 128, height: 64 }}>
                <Img
                  alt="complex"
                  src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/app-integrations/slack/Slack_logo_new.png"
                />
              </ButtonBase>
              <Grid container textAlign="center">
                <Grid item xs sx={{ mt: 5 }}>
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{ fontWeight: "bold", ml: 1, mb: 10 }}
                  >
                    그럼 로그인을 해볼까요?
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h7"
                    sx={{ fontWeight: "bold", ml: 1, mb: 3, fontSize: "16px" }}
                  >
                    슬랙시작을 위해
                  </Typography>
                </Grid>
                <Grid item></Grid>
              </Grid>
              <button
                style={{
                  backgroundColor: "purple",
                  width: "250px",
                  height: "50px",
                  borderRadius: "5px",
                }}
                onClick={() => history.replace(`/signin`)}
              >
                로그인 하러가기
              </button>
            </Box>
            <Box sx={{ height: "40vh" }}></Box>
            <Copyright />
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} mx={"auto"} component={Paper} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ButtonBase sx={{ width: 128, height: 64 }}>
              <Img
                alt="complex"
                src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/app-integrations/slack/Slack_logo_new.png"
              />
            </ButtonBase>
            <Grid container textAlign="center">
              <Grid item xs sx={{ mt: 5 }}>
                <Typography
                  component="h1"
                  variant="h3"
                  sx={{ fontWeight: "bold", ml: 1, mb: 10 }}
                >
                  그럼 한번 슬랙을 시작해볼까요?
                </Typography>
                <Typography
                  component="h1"
                  variant="h7"
                  sx={{ fontWeight: "bold", ml: 1, mb: 3, fontSize: "16px" }}
                >
                  효율적인 업무처리를 위해
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <button
              style={{
                backgroundColor: "purple",
                width: "250px",
                height: "50px",
                borderRadius: "5px",
              }}
              onClick={() => history.replace(`/${token.split(" ")[1]}/0/0`)}
            >
              슬랙 시작하기
            </button>
          </Box>
          <Box sx={{ height: "40vh" }}></Box>
          <Copyright />
        </Grid>
      </Grid>
    </>
  );
}

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/act99/mini_project">
          Frontend
        </Link>
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}

        <Link
          color="inherit"
          href="https://github.com/hyeonjh/gongguri_backend"
        >
          Back end
        </Link>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}
