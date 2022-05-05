import React from "react";
import { useParams } from "react-router-dom";
import { bestsellerdata } from "../bestsellercomponents/bestsellerdata";
import Footer from "../footer/Footer";
import Head from "../head/Head";
import DetailForProduct from "./detailproduct/Detailforproduct";

export default function DetailBestseller() {
  const productid = useParams();
  console.log("prodcct id", productid.id);

  return (
    <>
      <Head />
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
