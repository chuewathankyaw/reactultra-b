import React, { useState } from "react";
import Footer from "../../../components/footer/Footer";

import Head from "../../../components/head/Head";
import Particle from "../../../components/particle/Particle";
import { shop } from "../../../components/shopdata2";
import FoundationArea from "../../../components/skincareCompo/Foundationskin";

import Innifreeskin from "../../../components/skincareCompo/Innifreeskin";
import { Skinbanner } from "../../../components/skincareCompo/Skinbanner";
import { Skinbanner2 } from "../../../components/skincareCompo/Skinbanner2";
import Somebymiskin from "../../../components/skincareCompo/Somebymiskin";

// import "./skincare.css";

export default function Skincare({ shopdata, addToCart, addToWish }) {
  console.log("shoopdata from skincare Array is", shopdata);
  return (
    <>
      <Skinbanner />
      <Particle />
      <FoundationArea
        products={shopdata}
        addToCart={addToCart}
        addToWish={addToWish}
      />
      <Particle />
      <Somebymiskin
        products={shopdata}
        addToCart={addToCart}
        addToWish={addToWish}
      />
      <Particle />
      <Skinbanner2 />
      <Particle />
      <Innifreeskin
        products={shopdata}
        addToCart={addToCart}
        addToWish={addToWish}
      />
      <Footer />
    </>
  );
}
