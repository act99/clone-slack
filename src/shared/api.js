import axios from "axios";

const tokenCheck = document.cookie;
const token = tokenCheck.split("=")[1];
const api = axios.create({
  // 실제 베이스 유알엘
  baseURL: "http://52.78.96.234:8080",
  // baseURL: "http://3.37.123.52:8080",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    token: token,
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["authorization"] = `${accessToken}`;
  return config;
});

export const apis = {
  login: (id, pwd) => api.post("/user/login", { username: id, password: pwd }),
  signup: (id, nickname, pwd, passwordcheck) =>
    api.post("/user/signup", {
      username: id,
      nickname: nickname,
      password: pwd,
      passwordcheck: passwordcheck,
    }),
  userInfo: (token) =>
    api.post(`/user/userinfo`, {
      authorization: token,
    }),

  // getSpace: () => api.post("/user/worklist"),
  getSpace: () => api.get("/api/workspaces"),
  // getSpace: () => api.get("/user/workinfo"),

  getSpace: () => api.get("/api/workspaces"),

  addSpace: (workName) =>
    api.post("/api/workspaces", {
      workName: workName,
    }),

  deleteSpace: (workID) => api.delete(`/api/workspaces/${workID}`),

  // getDm: (workId) => api.get(`/api/members?workId=${workId}`),
  getDm: (workId) => api.get(`/api/members/${workId}`),

  addDm: (workId, memberName) =>
    api.post(`/api/members/${workId}`, {
      workId: workId,
      memberName: memberName,
    }),

  getMark: (workId) => api.get(`/api/bookmark/${workId}`),

  addMark: (workId, bookmark) => api.post(`/api/bookmark/${workId}`, bookmark),

  deleteMark: (bookmarkId) => api.delete(`/api/bookmark/${bookmarkId}`),

  getChat: (workId) => api.get(`/api/chat/${workId}`),
  addChat: (workId, memberId, memberName, chat) =>
    api.post(`/api/dms/${workId}`, {
      memberId: memberId,
      memberName: memberName,
      chat: chat,
    }),

  createRoom: function (data) {
    return axios.post(`/api/chat/rooms`, data);
  },
  getChatList: function () {
    return axios.get(`/api/chat/rooms`);
  },
  getChatMessages: function (roomId) {
    return axios.get(`/api/chat/rooms/${roomId}/messages`);
  },
};
