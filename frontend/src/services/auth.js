import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

export function login(username, password) {
  return new Promise((resolve, reject) => {
    instance
      .get("/login", { auth: { username: username, password: password } })
      .then((res) => {
        Cookies.set("user", JSON.stringify(res.data));
        resolve(res);
      })
      .catch((err) => reject(err.response.data));
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    instance
      .post("/logout")
      .then((res) => {
        Cookies.remove("user");
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
}

export function getUser() {
  let userStr = Cookies.get("user");
  if (userStr) {
    return JSON.parse(userStr);
  } else {
    return null;
  }
}
