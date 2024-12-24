import React from 'react';
import ContactArea from './ContactArea';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/breadcrumb';

const Contact = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Contact Us' title='Contact Us' />
        <ContactArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Contact;