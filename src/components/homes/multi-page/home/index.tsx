import React from "react";
import CtaAreaHomeOne from "./CtaAreaHomeOne";
import TechAreaHomeOne from "./TechAreaHomeOne";
import BlogAreaHomeOne from "./BlogAreaHomeOne";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import SolveAreaHomeOne from "./SolveAreaHomeOne";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import HeroBannerHomeOne from "./HeroBannerHomeOne";
import BrandAreaHomeArea from "./BrandAreaHomeArea";
import FeatureAreaHomeOne from "./FeatureAreaHomeOne";
import GoogleMap from "@/components/common/GoogleMap";
import ProjectAreaHomeOne from "./ProjectAreaHomeOne";
import CounterAreaHomeOne from "./CounterAreaHomeOne";
import ServicesAreaHomeOne from "./ServicesAreaHomeOne";
import ManagementAreaHomeOne from "./ManagementAreaHomeOne";

const HomeOne = () => {
  return <>
    <HeaderOne />
    <main>
      <HeroBannerHomeOne />
      <FeatureAreaHomeOne />
      <AboutAreaHomeOne />
      <ProjectAreaHomeOne style_home_one={true} />
      <CounterAreaHomeOne />
      <ManagementAreaHomeOne />
      <TechAreaHomeOne />
      <ServicesAreaHomeOne />
      <BrandAreaHomeArea />
      <SolveAreaHomeOne />
      <BlogAreaHomeOne />
      <CtaAreaHomeOne /> 
      <GoogleMap />
    </main>
    <FooterOne />

  </>;
};

export default HomeOne;
