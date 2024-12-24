
import BottomCtaAreaHomeTwo from '@/components/homes/multi-page/home-2/BottomCtaAreaHomeTwo';
import PricingAreaHomeFive from '@/components/homes/multi-page/home-5/PricingAreaHomeFive';
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import HeaderTwo from '@/layout/headers/HeaderTwo'; 
import FooterOne from '@/layout/footers/FooterOne';
import PricingBlogArea from './PricingBlogArea';

const Pricing = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Pricing' title='Pricing' />
        <PricingAreaHomeFive style={true} />
        <PricingBlogArea />
        <BottomCtaAreaHomeTwo />
      </main>
      <FooterOne />
    </>
  );
};

export default Pricing;