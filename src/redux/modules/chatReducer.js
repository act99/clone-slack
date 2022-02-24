import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
// action type

const GET_MESSAGES = "GET_MESSAGES";
const ADD_MESSAGE = "WRITE_MESSAGE";

// action creator

// 채팅들 가져오는 액션
const getMessages = createAction(GET_MESSAGES, (message_list) => ({
  message_list,
}));
// 채팅방을 옮기는 액션
const addMessage = createAction(ADD_MESSAGE, (message) => message);

const initialState = {
  workId: 0,
  memberId: 0,
  messageList: [
    { senderName: "송신자", receiverName: "수신자", message: "안녕" },
    { senderName: "송신자", receiverName: "수신자", message: "안녕안녕" },
    { senderName: "송신자", receiverName: "수신자", message: "우와" },
    { senderName: "송신자", receiverName: "수신자", message: "사과" },
  ],
};

const getMessageDB = (workId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getChat(workId)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
};

const addMessageDB = (workId, memberId, memberName, chat) => {
  console.log(workId, memberId, memberName, chat);
  return function (dispatch, getState, { history }) {
    console.log(workId, memberId, memberName, chat);
    apis
      .addChat(workId, memberId, memberName, chat)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
};

// reducer
export default handleActions(
  {
    [GET_MESSAGES]: (state, action) =>
      produce(state, (draft) => {
        draft.messageList = action.payload.message_list;
      }),
    [ADD_MESSAGE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.messageList.push(action.payload);
        console.log(draft.messageList);
      }),
  },
  initialState
);

const actionsCreators = {
  getMessages,
  addMessage,
  addMessageDB,
  getMessageDB,
};

export { actionsCreators };
