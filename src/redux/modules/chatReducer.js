import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
// action type

const GET_MESSAGES = "GET_MESSAGES";
const ADD_MESSAGE = "WRITE_MESSAGE";

// action creator

// 채팅들 가져오는 액션
const getMessages = createAction(GET_MESSAGES, (messageList) => ({
  messageList,
}));
// 채팅방을 옮기는 액션
const addMessage = createAction(ADD_MESSAGE, (message) => message);

const initialState = {
  messageList: [
    // { senderName: "송신자", receiverName: "수신자", message: "안녕" },
    // { senderName: "송신자", receiverName: "수신자", message: "안녕안녕" },
    // { senderName: "송신자", receiverName: "수신자", message: "우와" },
    // { senderName: "송신자", receiverName: "수신자", message: "사과" },
  ],
};

const getMessageDB = (workId, memberId, username, anotherName) => {
  return function (dispatch, getState, { history }) {
    console.log(workId, memberId, username, anotherName);
    apis
      .getChat(workId, memberId, username)
      .then((res) => {
        console.log(res.data);
        if (username !== anotherName) {
          apis
            .getAnotherChat(workId, memberId, anotherName)
            .then((aRes) => {
              console.log(aRes.data);
              dispatch(getMessages([...res.data, ...aRes.data]));
            })
            .catch((error) => console.log(error, "에러다!"));
          console.log(res.data);
        } else {
          dispatch(getMessages([...res.data]));
        }
      })
      .catch((error) => console.log(error, "에러다!"));
  };
};

const addMessageDB = (workId, memberId, memberName, chat, nickname) => {
  console.log(workId, memberId, memberName, chat);
  return function (dispatch, getState, { history }) {
    console.log(workId, memberId, memberName, chat);
    apis
      .addChat(workId, memberId, memberName, chat)
      .then((res) => {
        console.log({});
        dispatch(
          addMessage({
            workId: workId,
            nickname: nickname,
            memberName: memberName,
            chat: chat,
          })
        );
      })
      .catch((error) => console.log(error));
  };
};

// reducer
export default handleActions(
  {
    [GET_MESSAGES]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.messageList);
        const array = action.payload.messageList;
        let regex = /[^0-9]/g;
        array.sort(
          (a, b) =>
            a["createAt"].replace(regex, "") - b["createAt"].replace(regex, "")
        );
        console.log(array);
        draft.messageList = [...array];
        // draft.messageList = [];

        // draft.messageList = [...action.payload.messageList];
      }),
    [ADD_MESSAGE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.messageList.push(action.payload);
      }),
  },
  initialState
);

const actionsCreators = {
  // getMessages,
  // addMessage,
  addMessageDB,
  getMessageDB,
};

export { actionsCreators };
