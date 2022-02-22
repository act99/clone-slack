import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// action type
const SET_DM = "SET_DM";
const ADD_DM = "ADD_DM";

// action creator
const setDM = createAction(SET_DM, (workID, dm_list) => ({ workID, dm_list }));
const addSpace = createAction(ADD_DM, (dm) => ({
  dm,
}));

//initialState
const initialState = {
  workID: 0,
  workName: "53",
  dmsList: [
    {
      receiverId: 0,
      receiverName: "이주영",
      isNew: false,
    },
    {
      receiverId: 1,
      receiverName: "이주석",
      isNew: false,
    },
    {
      receiverId: 2,
      receiverName: "김철수",
      isNew: false,
    },
  ],
  // is_loaded: false,
};

// middleware

const getDmDB = (workID) => {
  return function (dispatch, getState, { history }) {};
  // workID를 입력해서 저쪽에 get 하고 해당 dmlist를 받아오는 형태.
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

const actionsCreators = { setDM, addSpace };

export { actionsCreators };
