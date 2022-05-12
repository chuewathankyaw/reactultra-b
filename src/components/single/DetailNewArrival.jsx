import React, { Component } from "react";

import "./detailproduct/detail.css";

import { shop } from "../shopdata2";
import { useParams } from "react-router-dom";
import DetailForProduct from "./detailproduct/Detailforproduct";
import "./detailproduct/detail.css";
import Footer from "../footer/Footer";

function DetailNewArrival({ addToCart }) {
  const productid = useParams();
  console.log("prodcct id", productid.id);

  return (
    <>
      <div>
        {shop.map((item) =>
          item.id == 13
            ? item.arrivaldata.map((user) =>
                user.id == productid.id ? (
                  <div>
                    {/* <h1>Hello World from Detail foucndation</h1> */}
                    <DetailForProduct key={user.id} product={user} />
                    <button className="cart2" onClick={() => addToCart(user)}>
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

export default DetailNewArrival;
