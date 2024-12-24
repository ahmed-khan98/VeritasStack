
import Link from 'next/link'; 
import React from 'react';

type  DataType = {
  title: string;
  btn_text: string;
}

const cta_content: DataType = {
  title: "Veritas Stack LLC Always Ready For Solve Your Problem",
  btn_text: "Contact Us",
}
const {title, btn_text}  = cta_content

const CtaAreaHomeOne = ({style} : any) => {
  return (
    <>
      <section className={`cta-area ${style ? "tp-cta-bottom-2" : "tp-cta-bottom mb-12"}`}>
        <div className="container">
          <div className="tp-cta-bg wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" 
          style={{backgroundImage: `url(/assets/img/bg/cta-bg-1.jpg)`, backgroundSize: "cover"}}>
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="tp-cta-wrapper">
                  <h4 className="tp-cta-title">{title}</h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-5">
                <div className="tp-cta-btn">
                  <Link href="/contact" className="tp-btn">{btn_text}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaAreaHomeOne;

 
