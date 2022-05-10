import React from "react";
import { useParams } from "react-router-dom";
import { bestseller } from "../bestsellercomponents/bestsellerdata";
import Footer from "../footer/Footer";

import DetailForProduct from "./detailproduct/Detailforproduct";

export default function DetailBestseller() {
  const productid = useParams();
  console.log("prodcct id", productid.id);
  const { bestsellerdata } = bestseller;
  console.log("i am bestsellerdata", bestsellerdata);

  return (
    <>
      <div>
        {bestsellerdata.map((user) =>
          user.id == productid.id ? (
            <DetailForProduct key={user.id} product={user} />
          ) : (
            " "
          )
        )}
      </div>
      <Footer />
    </>
  );
}
