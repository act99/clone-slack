import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";

// action type
const SET_SPACE = "SET_SPACE";
const ADD_SPACE = "ADD_SPACE";
const DELETE_SPACE = "DELETE_SPACE";

// action creator
const setSpace = createAction(SET_SPACE, (space_list) => ({ space_list }));
const addSpace = createAction(ADD_SPACE, (space) => ({ space }));
const deleteSpace = createAction(DELETE_SPACE, (workID) => ({ workID }));

//initialState
const initialState = {
  username: "email@email.com",
  nickname: "홍길동",
  workspaceList: [
    {
      workId: 0,
      workName: "홈", // 백엔드에서 받아올때 앞에 두글자만 가져와서 state에 저장하기
      isNew: false, // 해당 workspace에 새로운 메세지가 들어왔는지 (T/F로만 할지, 숫자로 할지)
    },
    {
      workId: 1,
      workName: "92",
      isNew: false,
    },
    {
      workId: 2,
      workName: "3B",
      isNew: false,
    },
  ],
  // is_loaded: false,
};
// 테스트 코드

// middleware
const getSpaceDB = (workName) => {
  return function (dispatch, getState, { history }) {
    apis
      .getSpace()
      .then((res) => {
        console.log(res);
        dispatch(setSpace(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addSpaceDB = (workName) => {
  return function (dispatch, getState, { history }) {
    apis
      .addSpace(workName)
      .then((res) => {
        console.log(res);
        const workName_list = { workName: workName };
        dispatch(addSpace(workName_list));
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
};

const deleteSpaceDB = (workId) => {
  return function (dispatch, getState, { history }) {
    apis
      .deleteSpace(parseInt(workId))
      .then((res) => {
        console.log(res);
        dispatch(deleteSpace(workId));
      })
      .catch((err) => console.log(err));
  };
};

// reducer
export default handleActions(
  {
    [SET_SPACE]: (state, action) =>
      produce(state, (draft) => {
        draft.workspaceList = [...action.payload.space_list];
      }),
    [ADD_SPACE]: (state, action) =>
      produce(state, (draft) => {
        draft.workspaceList.push(action.payload.space);
      }),

    [DELETE_SPACE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.workspaceList.findIndex(
          (p) => p.workId === action.payload.workId
        );
        draft.workspaceList.splice(idx, 1);
      }),
  },
  initialState
);

const actionsCreators = {
  setSpace,
  addSpace,
  addSpaceDB,
  getSpaceDB,
  deleteSpaceDB,
};

export { actionsCreators };
