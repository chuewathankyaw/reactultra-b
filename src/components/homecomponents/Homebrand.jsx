import React from "react";
import "./homeproduct.css";

export default function Homebrand() {
  return (
    <section className="ava-brand container">
      <div className="ava-title">
        <h3 className="capital">available brand</h3>
        <h5 className="second-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h5>
      </div>
      <div className="first-row">
        <img src="images/brand1.jpg" alt="" />
        <img src="images/brand2.png" alt="" />
        <img className="center" src="images/brand3.png" alt="" />
        <img src="images/brand4.png" alt="" />
        <img src="images/brand5.jpg" alt="" />
      </div>
      <div className="second-row">
        <img src="images/brand6.png" alt="" />
        <img src="images/brand7.png" alt="" />
        <img className="s-center" src="images/brand8.png" alt="" />
        <img src="images/brand9.jpg" alt="" />
        <img src="images/brand10.jpg" alt="" />
      </div>
    </section>
  );
}
