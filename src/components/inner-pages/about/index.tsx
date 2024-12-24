
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb'; 
import VideoAreaHomeFive from '@/components/homes/multi-page/home-5/VideoAreaHomeFive';
import CounterAreaHomeOne from '@/components/homes/multi-page/home/CounterAreaHomeOne';
import FeatureAreaHomeOne from '@/components/homes/multi-page/home/FeatureAreaHomeOne';
import ManagementAreaHomeOne from '@/components/homes/multi-page/home/ManagementAreaHomeOne';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo'; 
import AboutTeamArea from './AboutTeamArea';
import BottomCtaAreaHomeTwo from '@/components/homes/multi-page/home-2/BottomCtaAreaHomeTwo'; 
import TestimonialAreaHomeTwo from '@/components/homes/multi-page/home-2/TestimonialAreaHomeTwo';
import BrandAreaHomeThree from '@/components/homes/multi-page/home-3/BrandAreaHomeThree';

const About = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='About' title='About Us' />
        <VideoAreaHomeFive style={true} />
        <FeatureAreaHomeOne style={true} />
        <CounterAreaHomeOne />
        <TestimonialAreaHomeTwo />
        <BrandAreaHomeThree style={true} />
        {/* <ManagementAreaHomeOne /> */}
        <AboutTeamArea />
        <BottomCtaAreaHomeTwo />
      </main>
      <FooterOne />
    </>
  );
};

export default About;