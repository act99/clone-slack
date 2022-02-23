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

  getSpace: () => api.get("/api/workspaces"),

  addSpace: (workName) =>
    api.post("/api/workspaces", {
      workName: workName,
    }),

  deleteSpace: (workID) => api.delete(`/api/workspaces/${workID}`),

  getDm: (workId) => api.get(`/api/dms?workId=${workId}`),

  addDm: (workId, memberName) =>
    api.post(`/api/members/${workId}`, {
      workId: workId,
      memberName: memberName,
    }),

  getMark: (receiverName) => api.get(`/api/bookmark/${receiverName}`),

  addMark: (bookmark) => api.post("/api/bookmark", bookmark),

  deleteMark: (bookmarkId) => api.delete(`/api/bookmark/${bookmarkId}`),
};
