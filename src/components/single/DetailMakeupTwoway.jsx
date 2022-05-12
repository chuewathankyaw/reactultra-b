import React from "react";
import { shop } from "../shopdata2";
import { useParams } from "react-router-dom";
import DetailForProduct from "./detailproduct/Detailforproduct";
import Head from "../head/Head";
import Footer from "../footer/Footer";
import "./detailproduct/detail.css";
export default function DetailMakeupTwoway({ shopdata, addToCart }) {
  const productid = useParams();
  console.log("prodcct id", productid.id);

  return (
    <>
      <div>
        {shopdata.map((item) =>
          item.id === 6
            ? item.makeup_twoway.map(
                (user) =>
                  user.id == productid.id ? (
                    <div>
                      <DetailForProduct key={user.id} product={user} />
                      <button className="cart2" onClick={() => addToCart(user)}>
                        Add to cart
                      </button>
                    </div>
                  ) : (
                    " "
                  )
                // user.id === productid.id
              )
            : ""
        )}
      </div>
      <Footer />
    </>
  );
}
