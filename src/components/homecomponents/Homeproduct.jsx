import React, { useState } from "react";
import "./homeproduct.css";
import Swiperproduct from "./SwiperProduct/Swiperproduct";

export const Homeproduct = ({ addToCart }) => {
  return (
    <>
      <section className="promotion_container container topMar">
        <div className="promotion_title">
          <h3 className="capital">Promotion Time</h3>
          <h5 className="second-text">Weekly Sale Item Available</h5>
        </div>
        <div className="promotion_product-container container ">
          <Swiperproduct addToCart={addToCart} />
        </div>
        <div className="swiper-pagination "></div>
      </section>
    </>
  );
};
