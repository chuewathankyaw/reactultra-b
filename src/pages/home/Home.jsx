import Head from "../../components/head/Head";
import Homeaboutus from "../../components/homecomponents/Homeaboutus";
import Homeblog from "../../components/homecomponents/Homeblog";
import Homebrand from "../../components/homecomponents/Homebrand";
import Homenewarrival from "../../components/homecomponents/Homenewarrival";
import { Homeproduct } from "../../components/homecomponents/Homeproduct";
import Slider from "../../components/homecomponents/slidercomponents/Slider";
import Footer from "../../components/footer/Footer";
import Particle from "../../components/particle/Particle";

export default function Home() {
  return (
    <>
      <Slider />
      <Particle />
      <Homeproduct />
      <Particle />
      <Homeblog />
      <Particle />
      <Homenewarrival />
      <Particle />
      <Homeaboutus />
      <Particle />
      <Homebrand />
      <Footer />
    </>
  );
}
