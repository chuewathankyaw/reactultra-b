import Blogbanner from "../../components/blogcomponents/blogbanner/Blogbanner";
import Blogbody from "../../components/blogcomponents/blogbody/Blogbody";
import Head from "../../components/head/Head";
import Footer from "../../components/footer/Footer";
import Particle from "../../components/particle/Particle";
export default function Blog() {
  return (
    <>
      <Blogbanner />
      <Particle />
      <div>
        <Blogbody />
      </div>
      <Footer />
    </>
  );
}
