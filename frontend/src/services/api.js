import axios from "axios";
import { getUser } from "./auth";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

export function getBooks() {
  return instance
    .get("/books")
    .then((res) => res.data)
    .catch((err) => err);
}

export function getBook(id) {
  return instance
    .get("/book/" + id)
    .then((res) => res.data)
    .catch((err) => err);
}

export function getCartItems() {
  return instance
    .get("/cart")
    .then((res) => res.data)
    .catch((err) => err);
}

export function deleteCartItem(cartItemId) {
  return instance({
    method: "DELETE",
    url: "/cart",
    params: { id: cartItemId },
  })
    .then((res) => res.data)
    .catch((err) => err);
}

export function addCartItem(bookId) {
  return instance({
    method: "POST",
    url: "/cart",
    data: { bookId: bookId },
  })
    .then((res) => res.data)
    .catch((err) => err);
}

export function checkout(order) {
  const { id: userId } = getUser();
  return instance({
    method: "POST",
    url: "/checkout",
    data: { userId: userId, ...order },
  })
    .then((res) => res.data)
    .catch((err) => err);
}

export function getOrders() {
  return instance
    .get("/orders")
    .then((res) => res.data)
    .catch((err) => err);
}

export function getAllOrders() {
  return instance
    .get("/admin/orders")
    .then((res) => res.data)
    .catch((err) => err);
}

export function getOrderDetail(id) {
  return instance
    .get("/order", {
      params: { id: id },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export function updateBook(bookDetail) {
  return instance({
    method: "POST",
    url: "/admin/book",
    data: bookDetail,
  })
    .then((res) => res.data)
    .catch((err) => err);
}

export function deleteBook(bookId) {
  return instance({
    method: "DELETE",
    url: "/admin/book",
    params: { id: bookId },
  })
    .then((res) => res.data)
    .catch((err) => err);
}
