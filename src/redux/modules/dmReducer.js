import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// action type
const SET_DM = "SET_DM";
const ADD_DM = "ADD_DM";

// action creator
const setDM = createAction(SET_DM, (dm_list) => ({ dm_list }));
const addSpace = createAction(ADD_DM, (dm) => ({ dm }));

//initialState
const initialState = {
  workID: 0,
  workspaceName: "53",
  dmsList: [
    {
      receiverID: 0,
      receiverName: "이주영",
      isNew: false,
    },
    {
      receiverID: 1,
      receiverName: "이주석",
      isNew: false,
    },
    {
      receiverID: 2,
      receiverName: "김철수",
      isNew: false,
    },
  ],
  // is_loaded: false,
};

// middleware

// reducer
export default handleActions(
  {
    [SET_DM]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionsCreators = { setDM };

export { actionsCreators };
