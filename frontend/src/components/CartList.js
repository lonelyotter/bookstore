import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import { getCartItems } from "../services/api";

export default function CartList() {
  const userId = 1;

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getCartItems(userId).then((cartItems) => setCartItems(cartItems));
  }, []);

  return (
    <div align={"middle"}>
      <div>
        {cartItems.map((cartItem) => (
          <CartCard bookInfo={cartItem} />
        ))}
      </div>
      {/*<div>*/}
      {/*  <h1*/}
      {/*    style={{*/}
      {/*      textAlign: "center",*/}
      {/*      fontSize: "xx-large",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    合计：*/}
      {/*    <span style={{ color: "red" }}>¥{this.state.totalPrice}</span>*/}
      {/*  </h1>*/}
      {/*</div>*/}
    </div>
  );
}
