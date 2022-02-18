import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/store";
import Home from "./pages/Home";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { actionCreators as loginActions } from "./redux/modules/loginReducer";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AppBar, Link } from "@mui/material";
function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (document.cookie) dispatch(loginActions.loginCheckDB());
  }, []);
  return (
    <>
      <ConnectedRouter history={history}>
        {/* <CssBaseline /> */}
        <Container maxWidth="xxl">
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
        </Container>
        <Box sx={{ width: "100vw", height: "100vh" }}>
          <Route path="/" exact component={Home} />
        </Box>
      </ConnectedRouter>
    </>
  );
}
export default App;
