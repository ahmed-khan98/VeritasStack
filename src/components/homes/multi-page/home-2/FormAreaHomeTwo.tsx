/* eslint-disable @next/next/no-img-element */

import ContactFormHomeTwo from '@/components/forms/ContactFormHomeTwo';
import accordion_data from '@/data/AccordionData';
import React from 'react';

const FormAreaHomeTwo = ({onPageStyle}: any) => {
  return (
    <>
      <section id="contact-one-page" className={`form-area tp-faq-wrapper ${onPageStyle? "" : "pb-55"}`}>
        <div className="tp-faq-bg" style={{ backgroundImage: `url(/assets/img/shape/faq-2-shape-1.jpg)` }}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-form-wrapper mb-60 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-form-content">
                  <span>Contact With Us</span>
                  <h4 className="tp-form-title">Drop Us a Line</h4>
                </div>
                <div className="tp-form-wrap"> 
                  <ContactFormHomeTwo />
                </div>
                <div className="tp-form-shape">
                  <img src="assets/img/shape/contact-2-shape-1.png" alt="image-title" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-faq ml-70 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-faq-content">
                  <span>See Our Faqs</span>
                  <h4 className="tp-faq-content-title">Questions & Answer</h4>
                </div>
                <div className="tp-faq-accordion">
                  <div className="accordion" id="accordionExample">
                    {accordion_data.map((item, i) =>
                      <div key={i} className="accordion-item">
                        <h2 className="accordion-header">
                          <button className={`accordion-button ${i === 1 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`} aria-expanded={i === 1 ? "true" : "false"} aria-controls={`collapse${item.tab_id}`}>
                            {item.question}
                            <span className="accordion-btn"></span>
                          </button>
                        </h2>
                        <div id={`collapse${item.tab_id}`} className={`accordion-collapse collapse ${i === 1 ? "show" : ""}`}
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
      </section>
    </>
  );
};

export default FormAreaHomeTwo;