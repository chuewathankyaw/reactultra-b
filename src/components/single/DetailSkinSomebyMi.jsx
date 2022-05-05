import React from "react";
import { shop } from "../shopdata2";
import { useParams } from "react-router-dom";
import DetailForProduct from "./detailproduct/Detailforproduct";
import Head from "../head/Head";
import Footer from "../footer/Footer";

export default function DetailSkinSomebyMi() {
  const productid = useParams();
  console.log("prodcct id", productid.id);

  return (
    <>
      <Head />
      <div>
        {shop.map((item) =>
          item.id === 2
            ? item.skin_somebymi.map(
                (user) =>
                  user.id == productid.id ? (
                    <DetailForProduct key={user.id} product={user} />
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
