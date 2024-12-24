
import BlogCarousel from '@/components/blogs/blog-carousel';
import Wrapper from '@/layout/Wrapper';
import React from 'react';


export const metadata = {
  title: "Blog Carousel Tecz - IT Solutions & Technology React Next js Template",
};



const index = () => {
  return (
    <Wrapper>
      <BlogCarousel />      
    </Wrapper>
  );
};

export default index;