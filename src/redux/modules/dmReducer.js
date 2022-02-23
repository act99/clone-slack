import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";

// action type
const SET_DM = "SET_DM";
const ADD_DM = "ADD_DM";

// action creator
const setDM = createAction(SET_DM, (workID, dm_list) => ({ workID, dm_list }));
const addDm = createAction(ADD_DM, (dm) => ({
  dm,
}));

//initialState
const initialState = {
  workID: 0,
  workName: "53",
  dmsList: [
    {
      memberId: 0,
      memberNickname: "이주영",
      isNew: false,
    },
    {
      memberId: 1,
      memberNickname: "이주석",
      isNew: false,
    },
    {
      memberId: 2,
      memberNickname: "김철수",
      isNew: false,
    },
  ],
  // is_loaded: false,
};

// middleware

const getDmDB = (workId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getDm(workId)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  // workID를 입력해서 저쪽에 get 하고 해당 dmlist를 받아오는 형태.
};

const addDmDB = (workId, memberName) => {
  return function (dispatch, getState, { history }) {
    apis
      .addDm(workId, memberName)
      .then((res) => {
        console.log(res);

        dispatch(
          addDm({
            memberName: memberName,
            memberNickname: memberName,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_DM]: (state, action) => produce(state, (draft) => {}),
    [ADD_DM]: (state, action) =>
      produce(state, (draft) => {
        draft.dmsList = [...draft.dmsList, action.payload.dm];
      }),
  },
  initialState
);

const actionsCreators = { setDM, addDm, getDmDB, addDmDB };

export { actionsCreators };
