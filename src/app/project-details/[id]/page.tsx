// Import necessary modules and components
import ProjectDetails from '@/components/inner-pages/project-details';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata: { title: string } = {
  title: "Project Details Tecz - IT Solutions & Technology React Next js Template",
};

interface IndexProps {
  params: {
    id: string; 
  };
}

// Index component
const Index: React.FC<IndexProps> = ({ params: { id } }) => {
  // Convert the id to a number
  const convertNumber: number = parseInt(id, 10);
  console.log("convertNumber--->", convertNumber);

  return (
    <Wrapper>
      <ProjectDetails id={convertNumber} />
    </Wrapper>
  );
};

export default Index;
