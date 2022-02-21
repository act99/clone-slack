import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/store";
const First = () => {
  const userinfo = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const token = userinfo.token;
  React.useEffect(() => {}, []);
  return (
    <div>
      <button onClick={() => history.replace(`/${token.split(" ")[1]}/0/0`)}>
        슬랙 시작하기
      </button>
    </div>
  );
};
export default First;
