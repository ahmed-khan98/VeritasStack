
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import BlogDetailsPostBox from './BlogDetailsPostBox';
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import CtaAreaHomeOne from '@/components/homes/multi-page/home/CtaAreaHomeOne';

const BlogDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Blog Details' title='Blog Details' />
        <BlogDetailsPostBox />
        <CtaAreaHomeOne />
      </main>
      <FooterOne style_inner={true} />
    </>
  );
};

export default BlogDetails;