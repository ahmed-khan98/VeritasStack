import HeaderOne from "@/layout/headers/HeaderOne";
import FooterOne from "@/layout/footers/FooterOne";
import HeroAreaHomeOne from "../../multi-page/home-2/HeroAreaHomeTwo";
import StepAreaHomeTwo from "../../multi-page/home-2/StepAreaHomeTwo";
import CtaAreaHometwo from "../../multi-page/home-2/CtaAreaHometwo";
import FormAreaHomeTwo from "../../multi-page/home-2/FormAreaHomeTwo";
import TeamAreaHomeTwo from "../../multi-page/home-2/TeamAreaHomeTwo";
import BlogAreaHomeTwo from "../../multi-page/home-2/BlogAreaHomeTwo";
import AboutAreaHomeTwo from "../../multi-page/home-2/AboutAreaHomeTwo";
import VideoAreaHomeTwo from "../../multi-page/home-2/VideoAreaHomeTwo";
import BrandAreaHomeArea from "../../multi-page/home-2/BrandAreaHomeTwo";
import ProjectAreaHomeTwo from "../../multi-page/home-2/ProjectAreaHomeTwo";
import ServicesAreaHomeTwo from "../../multi-page/home-2/ServicesAreaHomeTwo";
import BottomCtaAreaHomeTwo from "../../multi-page/home-2/BottomCtaAreaHomeTwo";
import TestimonialAreaHomeTwo from "../../multi-page/home-2/TestimonialAreaHomeTwo";

const HomeTwoOnePage = () => {
  return (
    <>
      <HeaderOne style={true} onePageHomeTwo={true} />
      <main>
        <HeroAreaHomeOne />
        <BrandAreaHomeArea />
        <ServicesAreaHomeTwo onPageStyle={true} />
        <AboutAreaHomeTwo />
        <ProjectAreaHomeTwo />
        <VideoAreaHomeTwo />
        <StepAreaHomeTwo />
        <CtaAreaHometwo />
        <TestimonialAreaHomeTwo />
        <FormAreaHomeTwo onPageStyle={true} />
        <TeamAreaHomeTwo onPageStyle={true} />
        <BlogAreaHomeTwo />
        <BottomCtaAreaHomeTwo />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeTwoOnePage;
