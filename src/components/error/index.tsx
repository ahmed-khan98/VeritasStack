
import React from 'react';
import Link from 'next/link';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo';

const Error = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <section className="error-area tp-erorr-wrap">
          <div className="tp-erorr-bg" style={{backgroundImage: `url(/assets/img/thumbs/error-bg-1.jpg)`}}></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-erorr-content text-center">
                  <h4 className="tp-erorr-title">4<span>0</span>4</h4>
                  <span>Ooops....</span>
                  <p>We are sorry, something went wrong</p>
                  <Link className="tp-btn" href="/">Go Home <i className="fa-light fa-arrow-right ml-5"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
    </>
  );
};

export default Error;