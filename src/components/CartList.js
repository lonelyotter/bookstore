import React from "react";
import CartCard from "./CartCard";
export default class CartList extends React.Component {
  render() {
    return (
      <div>
        <CartCard />
        <CartCard />
      </div>
    );
  }
}
