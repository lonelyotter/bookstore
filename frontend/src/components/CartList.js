import React from "react";
import { Content } from "antd/es/layout/layout";
import CartCard from "./CartCard";

export default class CartList extends React.Component {
  constructor(props) {
    super(props);
    const books = require("../assets/books.json");
    const cart = [
      { id: 1, number: 1 },
      { id: 2, number: 2 },
    ];
    const booksInCart = cart.map((book) => ({
      book: books[book.id - 1],
      nums: book.number,
    }));

    this.state = {
      cart: booksInCart,
    };
  }
  componentDidMount() {
    let totalPrice = 0;
    for (let cartItem of this.state.cart) {
      totalPrice += cartItem.nums * cartItem.book.price;
    }
    this.setState(() => ({
      totalPrice: totalPrice.toFixed(2),
    }));
  }

  render() {
    return (
      <div align={"middle"}>
        <div>
          {this.state.cart.map((cartItem) => (
            <CartCard
              key={cartItem.book.id}
              bookInfo={cartItem.book}
              num={cartItem.nums}
            />
          ))}
        </div>
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "xx-large",
            }}
          >
            合计：
            <span style={{ color: "red" }}>¥{this.state.totalPrice}</span>
          </h1>
        </div>
      </div>
    );
  }
}
