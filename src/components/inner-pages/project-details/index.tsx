import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import ProjectDetailsArea from './ProjectDetailsArea';
// import RelatedProject from './RelatedProject';
import FooterOne from '@/layout/footers/FooterOne';

interface ProjectDetailsProps {
  id: number; // Assuming id is a string, you can adjust the type accordingly
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ id }) => {
  console.log("hello world");
  
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Project Details' title='Project Details' />
        <ProjectDetailsArea id={id} />
        {/* <RelatedProject /> */}
      </main>
      <FooterOne />
    </>
  );
};

export default ProjectDetails;
