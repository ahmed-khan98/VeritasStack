
import Link from 'next/link';
import React from 'react';

type  DataType = {
  title: React.JSX.Element;
  btn_text: string;
}
const cta_content: DataType = {
  title: <>IT Solutions  & Services <br /> at your Fingertips</>,
  btn_text: "Discove More",
}
const {title, btn_text}  = cta_content

const CtaAreaHometwo = () => {
  return (
    <>
      <section className="cta-area tp-cta-two mt-70 pt-120 pb-120">
        <div className="tp-cta-two-bg" style={{backgroundImage: `url(/assets/img/bg/cta-2-bg.jpg)`}}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tp-cta-two-wrapper text-center">
                <div className="tp-cta-two-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                  <i className="flaticon-technology"></i>
                </div>
                <h4 className="tp-cta-two-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">{title}</h4>
                <div className="tp-cta-two-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                  <Link className="tp-btn" href="/contact">{btn_text}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaAreaHometwo;