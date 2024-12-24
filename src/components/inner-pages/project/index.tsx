
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import ProjectArea from './ProjectArea';
import FooterOne from '@/layout/footers/FooterOne';

const Project = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Project 01' title=' Our Project' />
        <ProjectArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Project;