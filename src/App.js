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
<<<<<<< HEAD
=======

>>>>>>> c34659814bf5a9c20c8fae9a80082e387d1e0914
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
<<<<<<< HEAD
=======

>>>>>>> c34659814bf5a9c20c8fae9a80082e387d1e0914
        <Box sx={{ width: "100vw", height: "100vh" }}>
          <Route path="/" exact component={Home} />
        </Box>
      </ConnectedRouter>
    </>
  );
}
export default App;
