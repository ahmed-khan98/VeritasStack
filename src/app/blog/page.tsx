import React from 'react';
import Wrapper from '@/layout/Wrapper';
import Blog from '@/components/blogs/blog';

export const metadata = {
  title: "Blog -   Veritas Stack LLC",
};


const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;