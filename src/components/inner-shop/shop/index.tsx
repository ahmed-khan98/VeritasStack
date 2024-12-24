import ShopArea from "./ShopArea";
import HeaderTwo from "@/layout/headers/HeaderTwo";
import FooterOne from "@/layout/footers/FooterOne";
import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import BottomCtaAreaHomeTwo from "@/components/homes/multi-page/home-2/BottomCtaAreaHomeTwo";

const Shop = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Products" title="Shop" />
        <ShopArea />
        <BottomCtaAreaHomeTwo />
      </main>
      <FooterOne />
    </>
  );
};

export default Shop;
