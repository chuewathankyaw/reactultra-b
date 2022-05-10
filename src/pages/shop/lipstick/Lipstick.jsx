import React from "react";
import Footer from "../../../components/footer/Footer";
import Head from "../../../components/head/Head";
import Chanellipstick from "../../../components/lipstickCompo/Chanellipstick";
import Foundationlipstick from "../../../components/lipstickCompo/Foundationlipstick";
import Lipstickbanner from "../../../components/lipstickCompo/Lipstickbanner";
import Lipstickbanner2 from "../../../components/lipstickCompo/Lipstickbanner2";
import Lorellipstick from "../../../components/lipstickCompo/Lorellipstick";
import Particle from "../../../components/particle/Particle";

export default function Lipstick({ shopdata, addToCart }) {
  return (
    <>
      <Lipstickbanner />
      <Particle />
      <Foundationlipstick products={shopdata} addToCart={addToCart} />
      <Particle />
      <Chanellipstick products={shopdata} addToCart={addToCart} />
      <Particle />
      <Lipstickbanner2 />
      <Particle />
      <Lorellipstick products={shopdata} addToCart={addToCart} />
      <Footer />
    </>
  );
}
