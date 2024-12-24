
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import CtaAreaHomeOne from '@/components/homes/multi-page/home/CtaAreaHomeOne';
import ReviewArea from '@/components/inner-shop/shop-details/ReviewArea';
import ShopDetailsArea from '@/components/inner-shop/shop-details/ShopDetailsArea';
import shop_data from '@/data/ShopData';
import Wrapper from '@/layout/Wrapper';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';

export const metadata = {
  title: "Shop Details Tecz - IT Solutions & Technology React Next js Template",
};


const index = ({ params }: { params: { id: number } }) => { 
  const single_blog = shop_data.find((item) => Number(item.id) === Number(params.id));
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Product' title='Shop Details' />
        <ShopDetailsArea single_blog={single_blog} key={single_blog?.id} />
        <ReviewArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne style_inner={true} />
    </Wrapper>
  );
};

export default index;