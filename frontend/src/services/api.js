const url = "http://localhost:8080/api/";

export function getBooks() {
  return fetch(url + "books").then((r) => r.json());
}

export function getBook(id) {
  return fetch(url + "book/" + id).then((r) => r.json());
}

export function getCartItems(userId) {
  return fetch(url + "cart?userId=" + userId).then((r) => r.json());
}

export function deleteCartItem(id) {
  return fetch(url + "cart?id=" + id, { method: "DELETE" });
}
