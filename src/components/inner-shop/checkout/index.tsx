
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import CheckoutArea from './CheckoutArea';
import FooterOne from '@/layout/footers/FooterOne';

const Checkout = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Checkout' title='Checkout' />
        <CheckoutArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Checkout;