import React from "react";
import Footer from "../../../components/footer/Footer";
import Head from "../../../components/head/Head";
import Chanellipstick from "../../../components/lipstickCompo/Chanellipstick";
import Foundationlipstick from "../../../components/lipstickCompo/Foundationlipstick";
import Lipstickbanner from "../../../components/lipstickCompo/Lipstickbanner";
import Lipstickbanner2 from "../../../components/lipstickCompo/Lipstickbanner2";
import Lorellipstick from "../../../components/lipstickCompo/Lorellipstick";

export default function Lipstick() {
  return (
    <>
      <Head />
      <Lipstickbanner />
      <Foundationlipstick />
      <Chanellipstick />
      <Lipstickbanner2 />
      <Lorellipstick />
      <Footer />
    </>
  );
}
