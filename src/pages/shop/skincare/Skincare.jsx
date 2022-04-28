import React from "react";
import Footer from "../../../components/footer/Footer";
import Head from "../../../components/head/Head";
import Particle from "../../../components/particle/Particle";
import FoundationArea from "../../../components/skincareCompo/Foundationskin";

import Innifreeskin from "../../../components/skincareCompo/Innifreeskin";
import { Skinbanner } from "../../../components/skincareCompo/Skinbanner";
import { Skinbanner2 } from "../../../components/skincareCompo/Skinbanner2";
import Somebymiskin from "../../../components/skincareCompo/Somebymiskin";

// import "./skincare.css";

export default function Skincare() {
  return (
    <>
      <Head />
      <Skinbanner />
      <Particle />
      <FoundationArea />
      <Particle />
      <Somebymiskin />
      <Particle />
      <Skinbanner2 />
      <Particle />
      <Innifreeskin />
      <Footer />
    </>
  );
}
