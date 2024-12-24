import FooterOne from "@/layout/footers/FooterOne";
import HeaderThree from "@/layout/headers/HeaderThree";
import FaqAreaHomeThree from "../../multi-page/home-5/FaqAreaHomeThree";
import BlogAreaHomeFive from "../../multi-page/home-5/BlogAreaHomeFive";
import VideoAreaHomeFive from "../../multi-page/home-5/VideoAreaHomeFive";
import BrandAreaHomeFive from "../../multi-page/home-5/BrandAreaHomeFive";
import HeroBannerHomeFive from "../../multi-page/home-5/HeroBannerHomeFive";
import PricingAreaHomeFive from "../../multi-page/home-5/PricingAreaHomeFive";
import FeatureAreaHomeFive from "../../multi-page/home-5/FeatureAreaHomeFive";
import ProjectAreaHomeFour from "../../multi-page/home-4/ProjectAreaHomeFour";
import ServicesAreaHomeFive from "../../multi-page/home-5/ServicesAreaHomeFive";
import TestimonialAreaHomeFive from "../../multi-page/home-5/TestimonialAreaHomeFive";

const HomeFiveOnePage = () => {
  return (
    <>
      <HeaderThree onePageHomeFive={true} style={true} />
      <main>
        <HeroBannerHomeFive />
        <FeatureAreaHomeFive />
        <VideoAreaHomeFive onPageStyle={true} />
        <ProjectAreaHomeFour style={true} />
        <PricingAreaHomeFive onPageStyle={true} />
        <ServicesAreaHomeFive />
        <FaqAreaHomeThree />
        <TestimonialAreaHomeFive />
        <BrandAreaHomeFive />
        <BlogAreaHomeFive />
      </main>
      <FooterOne style={true} />
    </>
  );
};

export default HomeFiveOnePage;
