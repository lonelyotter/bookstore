import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

// 登录并设置cookie
export function login(username, password) {
  let formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  return instance({
    method: "post",
    url: "/login",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => {
    Cookies.set("user", JSON.stringify(res.data));
  });
}

// 登出并删除cookie
export function logout() {
  return instance.post("/logout").then((res) => {
    Cookies.remove("user");
  });
}

// 从cookie中取出用户信息，若不存在返回null
export function getUser() {
  let userStr = Cookies.get("user");
  if (userStr) {
    return JSON.parse(userStr);
  } else {
    return null;
  }
}
