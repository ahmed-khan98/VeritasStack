
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import TeamArea from './TeamArea';
import FeatureAreaHomeOne from '@/components/homes/multi-page/home/FeatureAreaHomeOne';
import BrandAreaHomeThree from '@/components/homes/multi-page/home-3/BrandAreaHomeThree';
import TeamFormArea from './TeamFormArea';
import FooterOne from '@/layout/footers/FooterOne';
import CtaAreaHomeOne from '@/components/homes/multi-page/home/CtaAreaHomeOne';

const Team = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Team' title='Our Team' />
        <TeamArea />
        <FeatureAreaHomeOne style={true} />
        <BrandAreaHomeThree style={true} />
        <TeamFormArea />
        <CtaAreaHomeOne /> 
      </main>
      <FooterOne style_inner={true} />
    </>
  );
};

export default Team;