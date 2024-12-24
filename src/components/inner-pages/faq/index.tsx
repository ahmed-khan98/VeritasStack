import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import HeaderTwo from "@/layout/headers/HeaderTwo";
import React from "react";
import FaqArea from "./FaqArea";
import BottomCtaAreaHomeTwo from "@/components/homes/multi-page/home-2/BottomCtaAreaHomeTwo";
import FooterOne from "@/layout/footers/FooterOne";

const Faq = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="{Faq's}" title="Frequently Asked Questions" />
        <FaqArea />
        <BottomCtaAreaHomeTwo />
      </main>
      <FooterOne />
    </>
  );
};

export default Faq;
