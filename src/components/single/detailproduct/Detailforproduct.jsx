import React from "react";
import "./detail.css";
const DetailForProduct = ({ product, addToCart }) => {
  console.log("Hello here is props id is", product.detail_image[0]);
  const productDetail = product;
  // product.detail_image.map((img) => console.log(img));

  console.log("Product detail is ", productDetail.price);
  return (
    // <h1>Hello i am prodict {productDetail.id}</h1>
    <>
      {/* <h1>Hello World</h1> */}
      <div className="app">
        <div className="details" key={productDetail.id}>
          <div className="big-img">
            <img src={productDetail.detail_image[0]} alt=" " />
            <div className="thumb">
              {productDetail.detail_image.map((img) => (
                <img src={img} alt="" />
              ))}
            </div>
          </div>

          <div className="box">
            <div className="row">
              <h2>{productDetail.title}</h2>
              <span>{productDetail.price}</span>
            </div>

            <div className="colors">
              {productDetail.colors.map((color) => (
                <button style={{ background: color }}></button>
              ))}
            </div>
            <p>{productDetail.description}</p>
            <p>{productDetail.content}</p>

            {/* <button className="cart2" onClick={() => addToCart(item, user)}>
              Add to cart
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailForProduct;
