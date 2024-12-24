import React from 'react';
import CtaAreaHometwo from './CtaAreaHometwo';
import FormAreaHomeTwo from './FormAreaHomeTwo';
import TeamAreaHomeTwo from './TeamAreaHomeTwo';
import StepAreaHomeTwo from './StepAreaHomeTwo';
import BlogAreaHomeTwo from './BlogAreaHomeTwo';
import HeroAreaHomeOne from './HeroAreaHomeTwo';
import AboutAreaHomeTwo from './AboutAreaHomeTwo';
import VideoAreaHomeTwo from './VideoAreaHomeTwo';
import HeaderOne from '@/layout/headers/HeaderOne';
import BrandAreaHomeArea from './BrandAreaHomeTwo';
import FooterOne from '@/layout/footers/FooterOne';
import ProjectAreaHomeTwo from './ProjectAreaHomeTwo';
import ServicesAreaHomeTwo from './ServicesAreaHomeTwo';
import BottomCtaAreaHomeTwo from './BottomCtaAreaHomeTwo';
import TestimonialAreaHomeTwo from './TestimonialAreaHomeTwo';

const HomeTwo = () => {
  return (
    <>
      <HeaderOne style={true} />
      <main>
        <HeroAreaHomeOne />
        <BrandAreaHomeArea />
        <ServicesAreaHomeTwo />
        <AboutAreaHomeTwo />
        <ProjectAreaHomeTwo />
        <VideoAreaHomeTwo />
        <StepAreaHomeTwo />
        <CtaAreaHometwo />
        <TestimonialAreaHomeTwo />
        <FormAreaHomeTwo />
        <TeamAreaHomeTwo />
        <BlogAreaHomeTwo />
        <BottomCtaAreaHomeTwo />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeTwo;