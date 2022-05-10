import React from "react";
import CartData from "../../components/cartCompo/Cart";

const CartPage1 = ({ cartItems, addToCart, decreaseQty }) => {
  return (
    <>
      <CartData
        cartItems={cartItems}
        addToCart={addToCart}
        decreaseQty={decreaseQty}
      />
    </>
  );
};

export default CartPage1;
