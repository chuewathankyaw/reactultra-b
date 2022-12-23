import React from "react";
import "./cart.css";

const CartData = ({ cartItems, addToCart, decreaseQty, removeall }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // prodcut qty total
  return (
    <>
      <div className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItems.length === 0 && (
              <h1 className="no-items productcart">No Items are add in Cart</h1>
            )}
            {cartItems.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list productcart d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.product_image} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <div>
                      <h4>
                        {item.price}.00 * {item.qty}
                      </h4>
                      <span>{productQty}.00 MMK</span>
                    </div>
                  </div>

                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart1">
                        <i
                          className="fa-solid fa-xmark"
                          onClick={() => removeall(item)}
                        ></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className="cartControl c_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCart b_flex"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total productcart">
            <h2>Cart Summary</h2>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>{totalPrice}.00 MMK</h3>
            </div>
            <div className="check">
              <button className="checkOut">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartData;
