import React from "react";
import { shop } from "../shopdata2";
import { useParams } from "react-router-dom";
import DetailForProduct from "./detailproduct/Detailforproduct";

export default function DetailMakeupFoun() {
  const productid = useParams();
  console.log("prodcct id", productid.id);

  return (
    <div>
      {shop.map((item) =>
        item.id === 4
          ? item.makeup_foundation.map(
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
  );
}
