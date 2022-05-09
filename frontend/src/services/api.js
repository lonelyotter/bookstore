import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

export function getBooks() {
  const { id: userId, username, password } = JSON.parse(Cookies.get("user"));
  return new Promise((resolve, reject) => {
    instance
      .get("/books", {
        auth: { username: username, password: password },
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}

export function getBook(id) {
  const { id: userId, username, password } = JSON.parse(Cookies.get("user"));
  return new Promise((resolve, reject) => {
    instance
      .get("/book/" + id, {
        auth: { username: username, password: password },
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}

export function getCartItems() {
  const { id: userId, username, password } = JSON.parse(Cookies.get("user"));
  return new Promise((resolve, reject) => {
    instance
      .get("/cart", {
        params: { userId: userId },
        auth: { username: username, password: password },
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}

export function deleteCartItem(cartItemId) {
  const { id: userId, username, password } = JSON.parse(Cookies.get("user"));
  return new Promise((resolve, reject) => {
    instance({
      method: "DELETE",
      url: "/cart",
      auth: { username, password },
      params: { id: cartItemId },
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function addCartItem(bookId) {
  console.log(bookId);
  const { id: userId, username, password } = JSON.parse(Cookies.get("user"));
  return new Promise((resolve, reject) => {
    instance({
      method: "POST",
      url: "/cart",
      auth: { username, password },
      data: { userId: userId, bookId: bookId },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
}
