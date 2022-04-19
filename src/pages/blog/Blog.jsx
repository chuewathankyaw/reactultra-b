import Blogbanner from "../../components/blogcomponents/blogbanner/Blogbanner";
import Blogbody from "../../components/blogcomponents/blogbody/Blogbody";
import Head from "../../components/head/Head";

export default function Blog() {
  return (
    <>
      <Head />
      <Blogbanner />
      <div>
        <Blogbody />
      </div>
    </>
  );
}
