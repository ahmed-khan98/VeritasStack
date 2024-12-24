
import React from 'react';
import BlogArea from './BlogArea';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';

const Blog = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Blog' title='Blog' />
        <BlogArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Blog;