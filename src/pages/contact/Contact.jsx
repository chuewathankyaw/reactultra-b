import Contactbanner from "../../components/contactcomponents/Contactbanner";
import Contactbody from "../../components/contactcomponents/Contactbody";
import Footer from "../../components/footer/Footer";
import Head from "../../components/head/Head";
import Particle from "../../components/particle/Particle";

export default function Contact() {
  return (
    <>
      <Head />
      <Contactbanner />
      <Particle />
      <Contactbody />
      <Footer />
    </>
  );
}
