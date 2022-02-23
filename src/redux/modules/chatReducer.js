import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
// action type
const GET_CHAT = "GET_CHAT";
const MOVE_CHAT = "MOVE_CHAT";
const GET_MESSAGES = "GET_MESSAGES";
const WRITE_MESSAGE = "WRITE_MESSAGE";
const CLEAR_MESSAGES = "CLEAR_MESSAGES";
const SET_MESSAGES = "SET_MESSAGES";
const IS_LOADING = "IS_LOADING";
const IS_LOADED = "IS_LOADED";
const CLEAR_CURRENT_CHAT = "CLEAR_CURRENT_CHAT";
const SET_CATEGORY = "SET_CATEGORY";
const CLEAR_CATEGORY = "CLEAR_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";

// action creator

// 채팅 리스트를 다루는 액션
const getChat = createAction(GET_CHAT, (chat_list) => ({ chat_list }));
// 채팅방을 옮기는 액션
const moveChat = createAction(MOVE_CHAT, (chat_list) => ({ chat_list }));
// 채팅방의 대화 내용을 가져오기
const getMessages = createAction(GET_MESSAGES, (chat_list) => ({ chat_list }));
// 사용자가 입력한 메시지의 텍스트를 기록
const writeMessage = createAction(WRITE_MESSAGE, (chat_list) => ({
  chat_list,
}));
// 저장한 대화 내용을 없애기
const clearMessages = createAction(CLEAR_MESSAGES, (chat_list) => ({
  chat_list,
}));
// DB의 채팅방의 대화 내용을 넣어놓기
const setMessages = createAction(SET_MESSAGES, (chat_list) => ({ chat_list }));
// 로딩을 다루는 액션
const isLoading = createAction(IS_LOADING, (chat_list) => ({ chat_list }));
// 로딩 완료 액션
const isLoaded = createAction(IS_LOADED, (chat_list) => ({ chat_list }));
// 입장한 채팅방 정보를 없애기
const clearCurrentChat = createAction(CLEAR_CURRENT_CHAT, (chat_list) => ({
  chat_list,
}));
// 카테고리 설정
const setCategory = createAction(SET_CATEGORY, (chat_list) => ({ chat_list }));
// 카테고리 초기화
const clearCategory = createAction(CLEAR_CATEGORY, (chat_list) => ({
  chat_list,
}));
// 카테고리 삭제
const deleteCategory = createAction(DELETE_CATEGORY, (chat_list) => ({
  chat_list,
}));

const initialState = {
  // 채팅 리스트를 받는 배열
  chatInfo: [],
  // 현재 접속 채팅 방
  currentChat: {
    roomId: null,
    roomName: null,
    category: null,
  },
  // 현재 접속 채팅 메시지
  messages: [],
  messageText: null,
  // 메시지 현재 페이지
  messageCurPage: null,
  // 메시지 총 페이지
  messageTotalPage: null,
  // 메시지 로딩
  loading: false,
  // 사용자가 설정한 카테고리(채팅방 생성시)
  selectedCategory: [],
};

const createRoom =
  (data, closePopup) =>
  async (dispatch, getState, { history }) => {
    try {
      const res = await apis.createRoom(data);
      window.alert("채팅방이 생성되었습니다.");
      dispatch(getChatList());
      closePopup();
    } catch (error) {
      console.log(error);
    }
  };

// 채팅방 목록 조회
const getChatList =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const res = await apis.getChatList();
      dispatch(getChat(res.data));
    } catch (error) {
      console.log(error);
    }
  };

// DB에 존재하는 채팅방 메시지들 가져오기
const getChatMessages =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const roomId = getState().chat.currentChat.roomId;
      const res = await apis.getChatMessages(roomId);
      const chatMessagesArray = res.data.content;
      dispatch(setMessages(chatMessagesArray));
    } catch (error) {
      console.log(error);
    }
  };

// reducer
export default handleActions(
  {
    [GET_CHAT]: (state, action) =>
      produce(state, (draft) => {
        draft.chatInfo = action.payload;
      }),
    [MOVE_CHAT]: (state, action) =>
      produce(state, (draft) => {
        draft.currentChat = action.payload;
      }),
    [GET_MESSAGES]: (state, action) =>
      produce(state, (draft) => {
        draft.messages.push(action.payload);
        draft.loading = true;
      }),
    [WRITE_MESSAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.messageText = action.payload;
      }),
    [CLEAR_MESSAGES]: (state, action) =>
      produce(state, (draft) => {
        draft.messages = [];
      }),
    [SET_MESSAGES]: (state, action) =>
      produce(state, (draft) => {
        draft.messages = action.payload;
      }),
    [IS_LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.loading = false;
      }),
    [IS_LOADED]: (state, action) =>
      produce(state, (draft) => {
        draft.loading = true;
      }),
    [CLEAR_CURRENT_CHAT]: (state, action) =>
      produce(state, (draft) => {
        draft.currentChat.roomId = null;
        draft.currentChat.roomName = null;
      }),
    [SET_CATEGORY]: (state, action) =>
      produce(state, (draft) => {
        draft.selectedCategory.push(action.payload);
      }),
    [CLEAR_CATEGORY]: (state, action) =>
      produce(state, (draft) => {
        draft.selectedCategory = [];
      }),
    [DELETE_CATEGORY]: (state, action) =>
      produce(state, (draft) => {
        draft.selectedCategory.splice(
          state.selectedCategory.indexOf(action.payload),
          1
        );
      }),
  },
  initialState
);

const actionsCreators = {
  createRoom,
  getChatList,
  moveChat,
  getMessages,
  writeMessage,
  clearMessages,
  getChatMessages,
  isLoading,
  isLoaded,
  clearCurrentChat,
  setCategory,
  clearCategory,
  getChat,
  deleteCategory,
};

export { actionsCreators };
