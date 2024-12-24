
import React from 'react';
import TestimonialAre from './TestimonialAre';
import TeamFormArea from '../team/TeamFormArea';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import TestimonialVideoArea from './TestimonialVideoArea';
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import CtaAreaHomeOne from '@/components/homes/multi-page/home/CtaAreaHomeOne';
import BrandAreaHomeThree from '@/components/homes/multi-page/home-3/BrandAreaHomeThree';

const Testimonial = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Testimonial' title='Testimonial' />
        <TestimonialAre />
        <TestimonialVideoArea />
        <BrandAreaHomeThree style_2={true} />
        <TeamFormArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne style_inner={true} />
    </>
  );
};

export default Testimonial;