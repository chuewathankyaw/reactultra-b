import React from "react";
import Footer from "../../../components/footer/Footer";
import Head from "../../../components/head/Head";
import EyeShadowmakeup from "../../../components/makeupCompo/Eyeshadowmakeup";
import Foundationmakeup from "../../../components/makeupCompo/Foundationmakeup";
import Makeupbanner from "../../../components/makeupCompo/Makeupbanner";
import Makeupbanner2 from "../../../components/makeupCompo/Makeupbanner2";
import Twowaymakeup from "../../../components/makeupCompo/Twowaymakeup";

export default function Makeup() {
  return (
    <>
      <Head />
      <Makeupbanner />
      <Foundationmakeup />
      <EyeShadowmakeup />
      <Makeupbanner2 />
      <Twowaymakeup />
      <Footer />
    </>
  );
}
