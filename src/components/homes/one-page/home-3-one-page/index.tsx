
"use client"
import HeaderTwo from '@/layout/headers/HeaderTwo'; 
import FooterOne from '@/layout/footers/FooterOne';
// import ShopArea from '@/components/inner-shop/shop/ShopArea';
import CtaAreaHomeOne from '../../multi-page/home/CtaAreaHomeOne';
import CtaAreaHomeThree from '../../multi-page/home-3/CtaAreaHomeThree';
import HeroAreaHomeThree from '../../multi-page/home-3/HeroAreaHomeThree';
import TeamAreaHomeThree from '../../multi-page/home-3/TeamAreaHomeThree';
import BlogAreaHomeThree from '../../multi-page/home-3/BlogAreaHomeThree';
// import BrandAreaHomeThree from '../../multi-page/home-3/BrandAreaHomeThree';
import AboutAreaHomeThree from '../../multi-page/home-3/AboutAreaHomeThree';
import ReviewAreaHomeThree from '../../multi-page/home-3/ReviewAreaHomeThree';
import FeatureAreaHomeThree from '../../multi-page/home-3/FeatureAreaHomeThree';
import ProjectAreaHomeThree from '../../multi-page/home-3/ProjectAreaHomeThree';
import CounterAreaHomeThree from '../../multi-page/home-3/CounterAreaHomeThree';
import OfferingAreaHomeThree from '../../multi-page/home-3/OfferingAreaHomeThree';
import SolutionAreaHomeThree from '../../multi-page/home-3/SolutionAreaHomeThree';
import { useQuery } from '@apollo/client';
import GETDATA from '@/queries/getPosts';

const HomeThreeOnePage = () => {
  const { loading, error, data } = useQuery(GETDATA);
  console.log(data?.projects, '<-----data');
  console.log(error, '<-----error');
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
        {/* <SolutionAreaHomeThree /> */}
        <TeamAreaHomeThree onPageStyle={true} />
         {/* <ShopArea onPageStyle={true}/> */}
        {/* <BrandAreaHomeThree /> */}
        <BlogAreaHomeThree onPageStyle={true} />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeThreeOnePage;