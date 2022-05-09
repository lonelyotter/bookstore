import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

// 登录并设置cookie
export function login(username, password) {
  return instance
    .get("/login", { auth: { username: username, password: password } })
    .then((res) => {
      Cookies.set("user", JSON.stringify(res.data));
    })
    .catch((err) => err);
}

// 登出并删除cookie
export function logout() {
  Cookies.remove("user");
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
