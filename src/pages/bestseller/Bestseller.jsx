import Bestsellerbanner from "../../components/bestsellercomponents/Bestsellerbanner";
import Bestsellerbody from "../../components/bestsellercomponents/Bestsellerbody";
import Footer from "../../components/footer/Footer";
import Head from "../../components/head/Head";
import Particle from "../../components/particle/Particle";

export default function Bestseller({ addToCart, addToWish }) {
  return (
    <>
      <Bestsellerbanner />
      <Particle />
      <Bestsellerbody addToCart={addToCart} addToWish={addToWish} />
      <Footer />
    </>
  );
}
