
import BlogDetailsPostBox from '@/components/blogs/blog-details/BlogDetailsPostBox';
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import CtaAreaHomeOne from '@/components/homes/multi-page/home/CtaAreaHomeOne';
import blog_data from '@/data/BlogData';
import Wrapper from '@/layout/Wrapper';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';

export const metadata = {
  title: "Blog Details Tecz - IT Solutions & Technology React Next js Template",
};

const index = ({ params }: { params: { id: number } }) => {
  const blogs = blog_data.filter(items => items.page === "blog");
  const single_blog = blogs.find((item) => Number(item.id) === Number(params.id));

  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Blog Details' title='Blog Details' />
        <BlogDetailsPostBox single_blog={single_blog} key={single_blog?.id} />
        <CtaAreaHomeOne />
      </main>
      <FooterOne style_inner={true} />
    </Wrapper>
  );
};

export default index;