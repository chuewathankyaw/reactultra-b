import React from "react";

const Cart = (props) => {
  return (
    <div className="cart1">
      <h2 className="section-header">CART</h2>

      <div className="cart-footer">
        <h3>
          Total : $<span className="cart-total">0</span>
        </h3>
        <button className="clear-cart banner-btn">clear cart</button>
      </div>
      {/* <button id="close-cart" onClick={() => setCart(!show1)}>
        <i className="uil uil-multiply"></i>
      </button> */}
    </div>
  );
};

export default Cart;
