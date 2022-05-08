import axios from "axios";

const url = "http://localhost:8080/api/";

export function getBooks() {
  return fetch(url + "books")
    .then((r) => r.json())
    .catch((error) => {
      console.log(error);
    });
}

export function getBook(id) {
  return fetch(url + "book/" + id)
    .then((r) => r.json())
    .catch((error) => {
      console.log(error);
    });
}

export function getCartItems(userId) {
  return fetch(url + "cart?userId=" + userId)
    .then((r) => r.json())
    .catch((error) => {
      console.log(error);
    });
}

export function deleteCartItem(id) {
  return fetch(url + "cart?id=" + id, { method: "DELETE" }).catch((error) => {
    console.log(error);
  });
}

export function addCartItem(userId, bookId) {
  return fetch(url + "cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId, bookId: bookId }),
  }).catch((error) => {
    console.log(error);
  });
}

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

export function login(username, password) {
  return new Promise((resolve, reject) => {
    instance
      .get("/login", { auth: { username: username, password: password } })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
