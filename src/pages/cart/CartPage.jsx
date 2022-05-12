import React from "react";
import CartData from "../../components/cartCompo/Cart";

const CartPage1 = ({ cartItems, addToCart, decreaseQty, removeall }) => {
  return (
    <>
      <CartData
        cartItems={cartItems}
        addToCart={addToCart}
        decreaseQty={decreaseQty}
        removeall={removeall}
      />
    </>
  );
};

export default CartPage1;
