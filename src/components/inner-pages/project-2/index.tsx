
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import ProjectAreaTwo from './ProjectAreaTwo';

const ProjectTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Project 02' title='Our Project' />
        <ProjectAreaTwo />
      </main>
      <FooterOne />
    </>
  );
};

export default ProjectTwo 