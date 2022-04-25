import React from "react";
import Head from "../../../components/head/Head";
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
      <FoundationArea />
      <Somebymiskin />
      <Skinbanner2 />
      <Innifreeskin />
    </>
  );
}
