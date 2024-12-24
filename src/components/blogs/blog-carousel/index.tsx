
import React from 'react';
import BlogCarouselArea from './BlogCarouselArea';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import CtaAreaHomeOne from '@/components/homes/multi-page/home/CtaAreaHomeOne';

const BlogCarousel = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Blog Carousel' title='Blog Carousel' />
        <BlogCarouselArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne style_inner={true} />
    </>
  );
};

export default BlogCarousel;