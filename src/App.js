import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/store";
import Home from "./pages/Home";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { actionCreators as loginActions } from "./redux/modules/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import First from "./pages/First";
function App() {
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.loginReducer);
  const goToken = userinfo.token;
  const cookie = document.cookie;
  React.useEffect(() => {
    // dispatch(loginActions.logOutDB());
    if (!cookie) {
      // dispatch(loginActions.logOutDB());
      // history.replace("/signin");
    }
    // if (document.cookie && userinfo.token === null) {
    //   dispatch(loginActions.loginCheckDB());
    // }
    console.log(userinfo.token);
  }, []);

  return (
    <>
      <ConnectedRouter history={history}>
        {/* <CssBaseline /> */}
        <Container maxWidth="xxl">
          <Switch>
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Container>
        <Box sx={{ width: "100vw", height: "100%" }}>
          <Switch>
            <Route path="/" exact component={First} />
            {userinfo.token !== null && (
              <Route
                path={`/${goToken.split(" ")[1]}/:workId/:dmsId`}
                exact
                component={Home}
              />
            )}
          </Switch>
        </Box>
      </ConnectedRouter>
    </>
  );
}
export default App;
