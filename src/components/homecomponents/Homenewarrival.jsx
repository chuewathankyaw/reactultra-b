import React from "react";
import "./homeproduct.css";
import Swiperproduct from "./SwiperProduct/Swiperproduct";

export default function Homenewarrival({ addToCart, addToWish }) {
  return (
    <section class="promotion_container container ">
      <div class="promotion_title">
        <h3 class="capital">New Arrival </h3>
        <h5 class="second-text">
          Explore the latest products in our collection!
        </h5>
      </div>
      <div class="promotion_product-container container ">
        <Swiperproduct addToCart={addToCart} addToWish={addToWish} arrival />
      </div>
      {/* <div class="swiper-pagination "></div> */}
    </section>
  );
}
