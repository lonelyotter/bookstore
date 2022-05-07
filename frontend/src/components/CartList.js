import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import { deleteCartItem, getCartItems } from "../services/api";

export default function CartList() {
  const userId = 1;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartItems(userId).then((cartItems) => setCartItems(cartItems));
  }, []);

  const updateCart = () =>
    getCartItems(userId).then((cartItems) => setCartItems(cartItems));

  const removeItem = (id) => {
    deleteCartItem(id).then(updateCart);
  };

  return (
    <div align={"middle"}>
      <div>
        {cartItems.map((cartItem) => (
          <CartCard
            bookInfo={cartItem}
            removeItem={removeItem}
            key={cartItem.id}
          />
        ))}
      </div>
    </div>
  );
}
