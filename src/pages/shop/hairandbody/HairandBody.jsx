import React from "react";
import Hairbanner from "../../../components/hairCompo/Hairbanner";
import Bodylotionhair from "../../../components/hairCompo/Bodylotionhair";
import Foundationhair from "../../../components/hairCompo/Foundationhair";

import Hairbanner2 from "../../../components/hairCompo/Hairbanner2";
import Showerhair from "../../../components/hairCompo/Showerhair";

import Footer from "../../../components/footer/Footer";
import Particle from "../../../components/particle/Particle";
export const HairandBody = ({ shopdata, addToCart, addToWish }) => {
  return (
    <>
      <Hairbanner />
      <Particle />
      <Foundationhair
        products={shopdata}
        addToCart={addToCart}
        addToWish={addToWish}
      />
      <Particle />
      <Bodylotionhair
        products={shopdata}
        addToCart={addToCart}
        addToWish={addToWish}
      />
      <Particle />
      <Hairbanner2 />
      <Particle />
      <Showerhair
        products={shopdata}
        addToCart={addToCart}
        addToWish={addToWish}
      />
      <Footer />
    </>
  );
};
