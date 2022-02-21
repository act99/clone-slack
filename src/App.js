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
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import First from "./pages/First";
function App() {
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.loginReducer);
  const goToken = userinfo.token;
  // React.useEffect(() => {
  //   console.log(userinfo.token);
  //   const token = userinfo.token;
  //   // 쿠키가 있을 때
  //   if (document.cookie) {
  //     // 혹시 로그인 정보에 토큰이 없다면
  //     if (token === null) {
  //       history.replace("/signin");
  //     } else {
  //       // 완전히 둘 다 있을 때
  //       dispatch(loginActions.loginCheckDB());
  //       history.replace(`/${token.split(" ")[1]}/0/0`);
  //     }
  //   } else {
  //     history.replace("/signin");
  //   }
  // }, []);
  return (
    <>
      <ConnectedRouter history={history}>
        {/* <CssBaseline /> */}
        <Container maxWidth="xxl">
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
        </Container>
        <Box sx={{ width: "100vw", height: "100%" }}>
          <Route path="/" exact component={First} />
          <Route
            path={`/${goToken.split(" ")[1]}/:workId/:dmsId`}
            exact
            component={Home}
          />
        </Box>
      </ConnectedRouter>
    </>
  );
}
export default App;
