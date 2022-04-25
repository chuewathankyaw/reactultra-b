import React from "react";
import "./homeproduct.css";

export default function Homeaboutus() {
  return (
    <section id="aboutus" className="container">
      <div className="f-col">
        <img className="about-img" src="./images/about.jpg" alt="" />
        <h3>A LITTLE OUR STORY</h3>
        <h1>Ultra-B</h1>
        <p>
          On sait depuis longtemps que travailler avec du texte lisible et
          contenant du sens est source de distractions, et empêche de se
          concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
          sur un texte générique comme 'Du texte. Du texte.
        </p>
        <a>
          <button>READ MORE</button>
        </a>
      </div>

      <div className="s-col">
        <div className="aff-price">
          <a href="#">
            <i className="uil uil-dollar-alt"></i>
          </a>
          <h3>Affordable Pricing</h3>
          <h5>Identical to the original. Handpicked materials.</h5>
        </div>
        <div className="free-ship">
          <a href="#">
            <i className="uil uil-truck"></i>
          </a>
          <h3>Free Shipping</h3>
          <h5>Free shipping for orders over 50000MMK</h5>
        </div>
        <div className="com">
          <a href="#">
            <i className="uil uil-gift"></i>
          </a>
          <h3>(COM) options available</h3>
          <h5>A professional team of expect craftsmen</h5>
        </div>
      </div>
    </section>
  );
}
