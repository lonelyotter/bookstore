import axios from "axios";
import { getUser } from "./auth";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

export function getBooks() {
  const { username, password } = getUser();

  return instance
    .get("/books", {
      auth: { username: username, password: password },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export function getBook(id) {
  const { username, password } = getUser();

  return instance
    .get("/book/" + id, {
      auth: { username: username, password: password },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export function getCartItems() {
  const { id: userId, username, password } = getUser();

  return instance
    .get("/cart", {
      params: { userId: userId },
      auth: { username: username, password: password },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export function deleteCartItem(cartItemId) {
  const { username, password } = getUser();

  return instance({
    method: "DELETE",
    url: "/cart",
    auth: { username, password },
    params: { id: cartItemId },
  })
    .then((res) => res.data)
    .catch((err) => err);
}

export function addCartItem(bookId) {
  const { id: userId, username, password } = getUser();

  return instance({
    method: "POST",
    url: "/cart",
    auth: { username, password },
    data: { userId: userId, bookId: bookId },
  })
    .then((res) => res.data)
    .catch((err) => err);
}

export function checkout(order) {
  const { id: userId, username, password } = getUser();
  return instance({
    method: "POST",
    url: "/checkout",
    auth: { username, password },
    data: { userId: userId, ...order },
  })
    .then((res) => res.data)
    .catch((err) => err);
}

export function getOrders() {
  const { username, password } = getUser();
  return instance
    .get("/orders", { auth: { username: username, password: password } })
    .then((res) => res.data)
    .catch((err) => err);
}

export function getOrderDetail(id) {
  const { username, password } = getUser();
  return instance
    .get("/order", {
      params: { id: id },
      auth: { username: username, password: password },
    })
    .then((res) => res.data)
    .catch((err) => err);
}
