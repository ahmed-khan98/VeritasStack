/* eslint-disable jsx-a11y/aria-proptypes */

import accordion_data from '@/data/AccordionData';
import React from 'react';

const faq_content = {
  sub_title: "See Our Faqs",
  title: "Questions & Answer",
  title_2: <>We are trusted company for our <br /> best IT service</>,
}
const { sub_title, title, title_2 } = faq_content

const FaqAreaHomeThree = () => {
  return (
    <>
      <section className="faq-area tp-faq-5 pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="tp-faq tp-faq-red ml-70 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".8s">
                <div className="tp-section tp-section-red mb-55">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                </div>
                <div className="tp-faq-accordion">
                  <div className="accordion" id="accordionExample">
                    {accordion_data.map((item, i) =>
                      <div key={i} className="accordion-item">
                        <h2 className="accordion-header">
                          <button className={`accordion-button ${i === 1? "" : "collapsed"}`} type="button" data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`} aria-expanded={`${i === 1 ? "true" : "false"}`} aria-controls={`collapse${item.tab_id}`}>
                               {item.question}
                            <span className="accordion-btn"></span>
                          </button>
                        </h2>
                        <div id={`collapse${item.tab_id}`} className={`accordion-collapse collapse ${i === 1? "show" : ""}`}
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    )} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-faq-5-bg" style={{ backgroundImage: `url(/assets/img/bg/faq-5-bg-1.jpg)` }}></div>
        <div className="tp-faq-5-bg-2" style={{ backgroundImage: `url(/assets/img/bg/faq-5-bg-2.jpg)` }}>
          <div className="tp-faq-5-content">
            <h5 className="tp-faq-5-title">{title_2}</h5>
            <div className="tp-faq-5-icon">
              <i className="flaticon-worldwide"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqAreaHomeThree;