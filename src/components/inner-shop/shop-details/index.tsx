
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import ShopDetailsArea from './ShopDetailsArea';
import ReviewArea from './ReviewArea';
import CtaAreaHomeOne from '@/components/homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layout/footers/FooterOne';

const ShopDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Product' title='Shop Details' />
        <ShopDetailsArea />
        <ReviewArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne style_inner={true} />
    </>
  );
};

export default ShopDetails;