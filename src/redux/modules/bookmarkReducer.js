import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";

// action type
const SET_MARK = "SET_MARK";
const ADD_MARK = "ADD_MARK";
const DELETE_MARK = "DELETE_MARK";

// action creator
const setMark = createAction(SET_MARK, (mark_list) => ({ mark_list }));
const addMark = createAction(ADD_MARK, (bookmark) => ({ bookmark }));
const deleteMark = createAction(DELETE_MARK, (bookmarkId) => ({ bookmarkId }));

//initialState
const initialState = {
  username: "email@email.com",
  nickname: "홍길동",
  receiverName: "이주영",
  bookmarkList: [
    {
      bookmarkId: 0,
      bookmarkUrl: "https://www.naver.com", // 백엔드에서 받아올때 앞에 두글자만 가져와서 state에 저장하기
      bookmarkName: "네이버", // 해당 workspace에 새로운 메세지가 들어왔는지 (T/F로만 할지, 숫자로 할지)
    },
    {
      bookmarkId: 1,
      bookmarkUrl: "https://www.naver.com", // 백엔드에서 받아올때 앞에 두글자만 가져와서 state에 저장하기
      bookmarkName: "네이버", // 해당 workspace에 새로운 메세지가 들어왔는지 (T/F로만 할지, 숫자로 할지)
    },
    {
      bookmarkId: 2,
      bookmarkUrl: "https://www.naver.com", // 백엔드에서 받아올때 앞에 두글자만 가져와서 state에 저장하기
      bookmarkName: "네이버", // 해당 workspace에 새로운 메세지가 들어왔는지 (T/F로만 할지, 숫자로 할지)
    },
  ],
  // is_loaded: false,
};
// 테스트 코드

// middleware
const getMarkDB = (receiverName) => {
  return function (dispatch, getState, { history }) {
    apis
      .getMark(receiverName)
      .then((res) => {
        console.log(res);
        dispatch(setMark(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addMarkDB = (bookmark) => {
  return function (dispatch, getState, { history }) {
    apis
      .addMark(bookmark)
      .then((res) => {
        console.log(res);
        dispatch(addMark(bookmark));
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
};

const deleteMarkDB = (bookmarkId) => {
  return function (dispatch, getState, { history }) {
    apis
      .deleteMark(parseInt(bookmarkId))
      .then((res) => {
        console.log(res);
        dispatch(deleteMark(bookmarkId));
      })
      .catch((err) => console.log(err));
  };
};

// reducer
export default handleActions(
  {
    [SET_MARK]: (state, action) =>
      produce(state, (draft) => {
        // draft.bookmarkList = [...action.payload.mark_list];
      }),
    [ADD_MARK]: (state, action) =>
      produce(state, (draft) => {
        draft.bookmarkList.push(action.payload.bookmark);
      }),

    [DELETE_MARK]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.bookmarkList.findIndex(
          (p) => p.bookmarkId === action.payload.bookmarkId
        );
        draft.workspaceList.splice(idx, 1);
      }),
  },
  initialState
);

const actionsCreators = {
  setMark,
  addMark,
  deleteMark,
  addMarkDB,
  getMarkDB,
  deleteMarkDB,
};

export { actionsCreators };
