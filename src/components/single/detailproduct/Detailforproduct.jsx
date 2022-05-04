import React from "react";
import "./detail.css";
const DetailForProduct = (props) => {
  console.log("Hello here is props id is", props.product.id);
  return (
    <div className="app">
      <div className="details" key={props.product.id}>
        <div className="big-img">
          <img src={props.product.detail_image[0]} alt=" " />
        </div>

        <div className="box">
          <div className="row">
            <h2>{props.product.title}</h2>
            <span>{props.product.price}</span>
          </div>

          <div className="colors">
            {props.product.colors.map((color) => (
              <button style={{ background: color }}></button>
            ))}
          </div>
          <p>{props.product.description}</p>
          <p>{props.product.content}</p>

          <div className="thumb">
            {props.product.detail_image.map((img) => (
              <img src={img} alt="" />
            ))}
          </div>
          <button className="cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default DetailForProduct;
