import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/loginReducer";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Signin() {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    if (data.get("email") === "") {
      alert("아이디가 공란입니다.");
    } else if (data.get("password") === "") {
      alert("비밀번호가 공란입니다.");
    } else {
      // dispatch(userActions);
      dispatch(userActions.loginDB(data.get("email"), data.get("password")));
    }
  };

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
                  sx={{ fontWeight: "bold", ml: 1 }}
                >
                  먼저 이메일부터 입력해 보세요
                </Typography>
                <Typography
                  component="h1"
                  variant="h7"
                  sx={{ fontWeight: "bold", ml: 1, mt: 1, fontSize: "16px" }}
                >
                  직장에서 사용하는 이메일주소로 로그인하는 걸 추천드려요.
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, maxWidth: 550 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                color="secondary"
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#611f69", py: 1.5 }}
              >
                <Typography
                  component="h2"
                  variant="h6"
                  sx={{ fontWeight: "bold", ml: 1 }}
                >
                  회원가입
                </Typography>
              </Button>
              <Grid container>
                <Grid
                  item
                  xs
                  sx={{
                    mt: 5,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}
                  >
                    아직 Slack에 회원가입을 하지 않으셨나요?
                  </Typography>
                  <Link href="/signup" variant="body2">
                    {"Slack 회원가입"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={{ height: "20vh" }}></Box>
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
