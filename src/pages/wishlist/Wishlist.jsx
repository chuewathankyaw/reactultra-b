import Footer from "../../components/footer/Footer";
import Head from "../../components/head/Head";
import Particle from "../../components/particle/Particle";
import Wbanner from "../../components/wish/wbanner/Wbanner";
import Wtable from "../../components/wtable/Wtable";

const Wishlist = ({ wishItem, addToWish, decreaseQtyWish }) => {
  return (
    <>
      <Wbanner />
      <Particle />
      <Wtable
        wishItem={wishItem}
        addToWish={addToWish}
        decreaseQtyWish={decreaseQtyWish}
      />
    </>
  );
};
export default Wishlist;
