import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// action type
const SET_CHAT = "SET_CHAT";
const ADD_CHAT = "ADD_CHAT";

// action creator
const setChat = createAction(SET_CHAT, (chat_list) => ({ chat_list }));
const addChat = createAction(ADD_CHAT, (chat) => ({ chat }));

//initialState
// 가져올 때 chatID 도 가져올 것
const initialState = {
  list: [{ ...initialChat }],
};

// add 시에는
const initialChat = {
  dms_id: 0,
  workspace_id: 0,
  sender_id: "sender@sender.com",
  receiver_id: "receiver@receiver.com",
  receiver_nickname: "",
  content: "",
  createdAt: "",
  updatedAt: "",
};

// middleware

// reducer
export default handleActions(
  {
    [SET_CHAT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [...action.payload.chat_list];
      }),
    [ADD_CHAT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [...draft.list, action.payload.list];
      }),
  },
  initialState
);

const actionsCreators = { setChat, addChat };

export { actionsCreators };
