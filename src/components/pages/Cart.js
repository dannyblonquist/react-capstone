import { useState, UseEffect, useContext } from "react";
import { CartContext } from "../../App";

import "../../styles/cart.scss";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleItemAddOrRemoval = (item, crementor) => {
    if (item.quantity === 1 && crementor === -1) return;

    const currentQuantity = item.quantity;
    const updatedProduct = { ...item, quantity: currentQuantity + crementor };
    const itemIndex = cartItems.findIndex((product) => product.id === item.id);
    const cartCopy = [...cartItems];
    cartCopy[itemIndex] = updatedProduct;

    setCartItems(cartCopy);
  };

  return (
    <div className="cart">
      {cartItems.map((item) => {
        return (
          <div className="item-in-cart" key={item.index}>
            <h3>{item.title}</h3>
            <img src={item.image} />
            <div className="item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              className="plus-btn"
              onClick={() => handleItemAddOrRemoval(item, 1)}
            >
              +
            </button>
            <div className="quantity">{item.quantity}</div>
            <button
              className="minus-btn"
              onClick={() => handleItemAddOrRemoval(item, -1)}
            >
              -
            </button>
            <i
              className="trash-icon"
              class="fas fa-trash"
              onClick={() =>
                setCartItems((c) =>
                  c.filter((product) => product.id !== item.id)
                )
              }
            ></i>
          </div>
        );
      })}
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
