import BlogAreaHomeFive from "./BlogAreaHomeFive";
import FooterOne from "@/layout/footers/FooterOne";
import VideoAreaHomeFive from "./VideoAreaHomeFive";
import FaqAreaHomeThree from "./FaqAreaHomeThree";
import BrandAreaHomeFive from "./BrandAreaHomeFive";
import HeroBannerHomeFive from "./HeroBannerHomeFive";
import HeaderThree from "@/layout/headers/HeaderThree";
import FeatureAreaHomeFive from "./FeatureAreaHomeFive";
import PricingAreaHomeFive from "./PricingAreaHomeFive";
import ServicesAreaHomeFive from "./ServicesAreaHomeFive";
import ProjectAreaHomeFour from "../home-4/ProjectAreaHomeFour";
import TestimonialAreaHomeFive from "./TestimonialAreaHomeFive";

const HomeFive = () => {
  return (
    <>
      <HeaderThree style={true} />
      <main>
        <HeroBannerHomeFive />
        <FeatureAreaHomeFive />
        <VideoAreaHomeFive />
        <ProjectAreaHomeFour style={true} />
        <PricingAreaHomeFive />
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

export default HomeFive;
