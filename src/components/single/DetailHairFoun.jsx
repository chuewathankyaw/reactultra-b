import React from "react";
import { shop } from "../shopdata2";
import { useParams } from "react-router-dom";
import DetailForProduct from "./detailproduct/Detailforproduct";
import Head from "../head/Head";
import Footer from "../footer/Footer";

export default function DetailHairFoun({ shopdata, addToCart }) {
  const productid = useParams();
  console.log("prodcct id", productid.id);

  return (
    <>
      <div>
        {shopdata.map((item) =>
          item.id === 10
            ? item.hair_themixbysu.map(
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
