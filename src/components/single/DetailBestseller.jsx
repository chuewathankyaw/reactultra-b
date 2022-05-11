import React from "react";
import { useParams } from "react-router-dom";
import { bestseller } from "../bestsellercomponents/bestsellerdata";
import Footer from "../footer/Footer";

import DetailForProduct from "./detailproduct/Detailforproduct";

export default function DetailBestseller({ shopdata, addToCart }) {
  const productid = useParams();
  console.log("prodcct id", productid.id);

  return (
    <>
      <div>
        {shopdata.map((item) =>
          item.id === 15
            ? item.bestsellerdata.map(
                (user) =>
                  user.id == productid.id ? (
                    <div>
                      <DetailForProduct key={user.id} product={user} />
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
                // user.id === productid.id
              )
            : ""
        )}
      </div>
      <Footer />
    </>
  );
}
