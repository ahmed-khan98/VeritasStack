

import BlogPostboxArea from './BlogPostboxArea';
import HeaderTwo from '@/layout/headers/HeaderTwo'; 
import FooterOne from '@/layout/footers/FooterOne';
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import CtaAreaHomeOne from '@/components/homes/multi-page/home/CtaAreaHomeOne';

const BlogSidebar = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Blog Sidebar' title='Blog Sidebar' />
        <BlogPostboxArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne style_inner={true} />
    </>
  );
};

export default BlogSidebar;