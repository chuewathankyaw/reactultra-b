import Head from "../../components/head/Head";
import Homeaboutus from "../../components/homecomponents/Homeaboutus";
import Homeblog from "../../components/homecomponents/Homeblog";
import Homebrand from "../../components/homecomponents/Homebrand";
import Homenewarrival from "../../components/homecomponents/Homenewarrival";
import { Homeproduct } from "../../components/homecomponents/Homeproduct";
import Slider from "../../components/homecomponents/slidercomponents/Slider";

export default function Home() {
  return (
    <>
      <Head />
      <Slider />
      <Homeproduct />
      <Homeblog />
      <Homenewarrival />
      <Homeaboutus />
      <Homebrand />
    </>
  );
}
