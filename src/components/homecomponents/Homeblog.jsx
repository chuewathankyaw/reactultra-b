import React from "react";
import "./homeproduct.css";
export default function Homeblog() {
  return (
    <section id="our-blog" className="container">
      <div className="blog-title">
        <h3 className="capital">Our Blog</h3>
        <h5 className="second-text">Lorem ipsum dolor sit amet consectetur.</h5>
      </div>
      <div className="blog">
        <div className="blog-1">
          <p>
            HOW IMPORTANT IS <br /> MOISTURE FOR WOMEN...
          </p>
          <a>
            <button className="white">READ MORE</button>
          </a>
        </div>
        <div className="blog-1 blog-2">
          <p>GAME CHANGERS FOR EVERY DAY...</p>
          <a>
            <button className="white-1">READ MORE</button>
          </a>
        </div>
      </div>
    </section>
  );
}
