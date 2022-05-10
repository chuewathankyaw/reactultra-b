import React from "react";
import { shop } from "../shopdata2";
import { useParams } from "react-router-dom";
import DetailForProduct from "./detailproduct/Detailforproduct";
import Head from "../head/Head";
import Footer from "../footer/Footer";

export default function DetailSkinInnifree({ shopdata }) {
  const productid = useParams();
  console.log("prodcct id from skin innifee", productid.id);

  return (
    <>
      <div>
        {shopdata.map((item) =>
          item.id == 3
            ? item.skin_innifree.map(
                (user) =>
                  user.id == productid.id ? (
                    <div>
                      <DetailForProduct key={user.id} product={user} />
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
