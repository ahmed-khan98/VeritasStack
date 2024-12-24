

import FooterOne from "@/layout/footers/FooterOne";
import HeaderThree from "@/layout/headers/HeaderThree"; 
import ShopArea from "@/components/inner-shop/shop/ShopArea";
import TeamAreaHomeFour from "../../multi-page/home-4/TeamAreaHomeFour";
import BlogAreaHomeFour from "../../multi-page/home-4/BlogAreaHomeFour";
import HeroAreaHomeThree from "../../multi-page/home-4/HeroAreaHomeThree";
import VideoAreaHomeFour from "../../multi-page/home-4/VideoAreaHomeFour";
import BrandAreaHomeFour from "../../multi-page/home-4/BrandAreaHomeFour";
import AboutAreaHomeFour from "../../multi-page/home-4/AboutAreaHomeFour";
import ProjectAreaHomeFour from "../../multi-page/home-4/ProjectAreaHomeFour";
import FeatureAreaHomeFour from "../../multi-page/home-4/FeatureAreaHomeFour";
import IndustryAreaHomeFour from "../../multi-page/home-4/IndustryAreaHomeFour";
import ServicesAreaHomeFour from "../../multi-page/home-4/ServicesAreaHomeFour";
import TestimonalAreaHomeFour from "../../multi-page/home-4/TestimonalAreaHomeFour";
import BestServicesAreaHomeFour from "../../multi-page/home-4/BestServicesAreaHomeFour";

const HomeFourOnePage = () => {
  return (
    <>
      <HeaderThree onePageHomeFour={true} />
      <main>
        <HeroAreaHomeThree />
        <ServicesAreaHomeFour />
        <AboutAreaHomeFour />
        <BestServicesAreaHomeFour onPageStyle={true} />
        <ProjectAreaHomeFour />
        <TestimonalAreaHomeFour />
        <FeatureAreaHomeFour />
        <VideoAreaHomeFour />
        <IndustryAreaHomeFour />
        <TeamAreaHomeFour onPageStyle={true} /> 
        <ShopArea onPageStyle={true} style_2={true} />
        <BrandAreaHomeFour onPageStyle={true} />
        <BlogAreaHomeFour onPageStyle={true} />
      </main>
      <FooterOne style={true} />
    </>
  );
};

export default HomeFourOnePage;
