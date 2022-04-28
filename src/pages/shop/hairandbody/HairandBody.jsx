import React from "react";
import Hairbanner from "../../../components/hairCompo/Hairbanner";
import Bodylotionhair from "../../../components/hairCompo/Bodylotionhair";
import Foundationhair from "../../../components/hairCompo/Foundationhair";

import Hairbanner2 from "../../../components/hairCompo/Hairbanner2";
import Showerhair from "../../../components/hairCompo/Showerhair";
import Head from "../../../components/head/Head";
import Footer from "../../../components/footer/Footer";
import Particle from "../../../components/particle/Particle";
export const HairandBody = () => {
  return (
    <>
      <Head />
      <Hairbanner />
      <Particle />
      <Foundationhair />
      <Particle />
      <Bodylotionhair />
      <Particle />
      <Hairbanner2 />
      <Particle />
      <Showerhair />
      <Footer />
    </>
  );
};
