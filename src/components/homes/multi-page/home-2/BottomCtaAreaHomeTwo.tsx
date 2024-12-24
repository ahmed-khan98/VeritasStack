
import Link from 'next/link';
import React from 'react';

const BottomCtaAreaHomeTwo = () => {
  return (
    <>
      <section className="cta-area tp-cta-three-bg" style={{backgroundImage: `url(/assets/img/bg/cta-2-bg-1.jpg)`}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-1 col-lg-2">
              <div className="tp-cta-three-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <i className="flaticon-solution"></i>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="tp-cta-three-content wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <h4 className="tp-cta-three-title">Looking for the Best IT Business Solutions?</h4>
              </div>
            </div>
            <div className="offset-xl-4 col-xl-3 col-lg-4">
              <div className="tp-cta-three-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <Link href="/contact" className="tp-btn">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomCtaAreaHomeTwo;