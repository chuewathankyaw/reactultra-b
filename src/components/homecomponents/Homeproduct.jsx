import React from "react";
import "./homeproduct.css";
import Swiperproduct from "./SwiperProduct/Swiperproduct";

export const Homeproduct = () => {
  return (
    <>
      <section className="promotion_container container topMar">
        <div className="promotion_title">
          <h1 className="capital">Promotion Time</h1>
          <h5 className="second-text">Weekly Sale Item Available</h5>
        </div>
        <div className="promotion_product-container container ">
          <Swiperproduct />
        </div>
        <div className="swiper-pagination "></div>
      </section>
    </>
  );
};
