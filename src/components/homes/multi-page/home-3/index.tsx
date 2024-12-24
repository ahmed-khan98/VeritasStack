'use client'
import HeaderTwo from '@/layout/headers/HeaderTwo'; 
import HeroAreaHomeThree from './HeroAreaHomeThree';
import AboutAreaHomeThree from './AboutAreaHomeThree';
import CtaAreaHomeThree from './CtaAreaHomeThree';
import CtaAreaHomeOne from '../home/CtaAreaHomeOne';
import TeamAreaHomeThree from './TeamAreaHomeThree';
import FooterOne from '@/layout/footers/FooterOne';
import BlogAreaHomeThree from './BlogAreaHomeThree';
import BrandAreaHomeThree from './BrandAreaHomeThree';
import ReviewAreaHomeThree from './ReviewAreaHomeThree';
import CounterAreaHomeThree from './CounterAreaHomeThree';
import ProjectAreaHomeThree from './ProjectAreaHomeThree';
import FeatureAreaHomeThree from './FeatureAreaHomeThree';
import OfferingAreaHomeThree from './OfferingAreaHomeThree';
import SolutionAreaHomeThree from './SolutionAreaHomeThree';

const HomeThree = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroAreaHomeThree />
        <FeatureAreaHomeThree />
        <AboutAreaHomeThree />
        <OfferingAreaHomeThree />
        <CtaAreaHomeThree />
        <ProjectAreaHomeThree />
        <ReviewAreaHomeThree />
        <CounterAreaHomeThree />
        <CtaAreaHomeOne style={true} />
        <SolutionAreaHomeThree />
        <TeamAreaHomeThree />
        <BrandAreaHomeThree />
        <BlogAreaHomeThree />
      </main>
      <FooterOne />

    </>
  );
};

export default HomeThree;