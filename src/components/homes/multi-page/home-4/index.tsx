
import TeamAreaHomeFour from './TeamAreaHomeFour';
import HeroAreaHomeThree from './HeroAreaHomeThree'; 
import AboutAreaHomeFour from './AboutAreaHomeFour'; 
import VideoAreaHomeFour from './VideoAreaHomeFour';
import BrandAreaHomeFour from './BrandAreaHomeFour';
import BlogAreaHomeFour from './BlogAreaHomeFour';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderThree from '@/layout/headers/HeaderThree';
import ProjectAreaHomeFour from './ProjectAreaHomeFour';
import FeatureAreaHomeFour from './FeatureAreaHomeFour';
import ServicesAreaHomeFour from './ServicesAreaHomeFour';
import IndustryAreaHomeFour from './IndustryAreaHomeFour';
import TestimonalAreaHomeFour from './TestimonalAreaHomeFour';
import BestServicesAreaHomeFour from './BestServicesAreaHomeFour';

const HomeFour = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <HeroAreaHomeThree />
        <ServicesAreaHomeFour />
        <AboutAreaHomeFour />
        <BestServicesAreaHomeFour />
        <ProjectAreaHomeFour />
        <TestimonalAreaHomeFour /> 
        <FeatureAreaHomeFour />
        <VideoAreaHomeFour />
        <IndustryAreaHomeFour />
        <TeamAreaHomeFour />
        <BrandAreaHomeFour />
        <BlogAreaHomeFour />
      </main>
      <FooterOne style={true} />
    </>
  );
};

export default HomeFour;