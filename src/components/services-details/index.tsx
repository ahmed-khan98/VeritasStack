
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import SercicesDetailsArea from './SercicesDetailsArea';
import FooterOne from '@/layout/footers/FooterOne';

const ServicesDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Services Details' title='Services Details' />
        <SercicesDetailsArea />
      </main>
      <FooterOne />
    </>
  );
};

export default ServicesDetails;