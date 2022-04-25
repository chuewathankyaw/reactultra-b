import React from "react";
import "./homeproduct.css";
import Swiperproduct from "./SwiperProduct/Swiperproduct";

export default function Homenewarrival() {
  return (
    <section class="promotion_container container ">
      <div class="promotion_title">
        <h1 class="capital">New Arrival </h1>
        <h5 class="second-text">
          Explore the latest products in our collection!
        </h5>
      </div>
      <div class="promotion_product-container container ">
        <Swiperproduct arrival />
      </div>
      {/* <div class="swiper-pagination "></div> */}
    </section>
  );
}
