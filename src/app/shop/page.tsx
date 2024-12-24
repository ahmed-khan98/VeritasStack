import Shop from '@/components/inner-shop/shop';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "Shop Tecz - IT Solutions & Technology React Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <Shop />
    </Wrapper>
  );
};

export default index;