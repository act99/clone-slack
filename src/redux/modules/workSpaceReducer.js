import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// action type
const SET_SPACE = "SET_SPACE";
const ADD_SPACE = "ADD_SPACE";

// action creator
const setSpace = createAction(SET_SPACE, (space_list) => ({ space_list }));
const addSpace = createAction(ADD_SPACE, (space) => ({ space }));

//initialState
const initialState = {
  username: "email@email.com",
  nickname: "홍길동",
  workspaceList: [
    {
      workID: 0,
      workName: "53", // 백엔드에서 받아올때 앞에 두글자만 가져와서 state에 저장하기
      isNew: false, // 해당 workspace에 새로운 메세지가 들어왔는지 (T/F로만 할지, 숫자로 할지)
    },
    {
      workID: 1,
      workName: "92",
      isNew: false,
    },
    {
      workID: 2,
      workName: "3B",
      isNew: false,
    },
  ],
  // is_loaded: false,
};

// middleware

// reducer
export default handleActions(
  {
    [SET_SPACE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionsCreators = { setSpace };

export { actionsCreators };
