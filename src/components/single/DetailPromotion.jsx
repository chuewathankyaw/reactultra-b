import React, { Component } from "react";

import { shop } from "../shopdata2";
import { useParams } from "react-router-dom";
import DetailForProduct from "./detailproduct/Detailforproduct";

import Footer from "../footer/Footer";

function DetailPromotion({ addToCart }) {
  const productid = useParams();
  console.log("prodcct id", productid.id);

  return (
    <>
      <div>
        {shop.map((item) =>
          item.id == 14
            ? item.promotiondata.map((user) =>
                user.id == productid.id ? (
                  <div>
                    {/* <h1>Hello World from Detail foucndation</h1> */}
                    <DetailForProduct
                      key={user.id}
                      product={user}
                      addToCart={addToCart}
                    />
                    <button
                      className="cart2"
                      onClick={() => addToCart(item, user)}
                    >
                      Add to cart
                    </button>
                  </div>
                ) : (
                  " "
                )
              )
            : ""
        )}
      </div>
      <Footer />
    </>
  );
}

export default DetailPromotion;
