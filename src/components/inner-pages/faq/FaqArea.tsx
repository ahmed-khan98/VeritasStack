"use client"
import QuestionForm from "@/components/forms/QuestionForm";
import accordion_data from "@/data/AccordionData"; 


const faq_feature_data = [
  { id: 1, icon: "flaticon-settings", title: "IT Solution" },
  { id: 2, icon: "flaticon-search", title: "General Inquiris" },
  { id: 3, icon: "flaticon-settings", title: "Theme Features" },
  { id: 4, icon: "flaticon-user", title: "Account Setting" },
  { id: 5, icon: "flaticon-information", title: "Our Information" },
]
const FaqArea = () => {


  return (
    <>
      <section className="tp-faq-area tp-faq-inner-2-bg pt-120 pb-90">
        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <div className="tp-faq-inner-2-item mb-30">
                {/* <div className="tp-faq-inner-2-search mb-40">
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="tp-footer-widget-newsletter-wrapper">
                      <div className="tp-footer-widget-newsletter-input">
                        <input type="email" placeholder="Get News & Updates" />
                      </div>
                      <div className="tp-footer-widget-newsletter-submit">
                        <button>
                          <i className="fa-regular fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div> */}
                <div className="tp-faq-inner-2-message">
                  <div className="tp-form-content">
                    <h4 className="tp-form-title">Seamless & Hassle-Free IT Support</h4>
                    <p className="tp">However, it can easily be configured to make and receive external calls as well. And as both a Microsoft Gold partner and experts in unified communications solutions, Akita was well placed to deliver the solution. As Canenco was starting largely from scratch, all IT hardware was required</p>
                  </div>
                  <div className="tp-form-wrap">
                    {/* <QuestionForm /> */}
                  </div>
                </div>
                
              </div>

              {/* <div className="tp-faq-inner-2-item mb-30">
                {faq_feature_data.map((feature, i) =>
                  <a key={i} href="#" className="tp-faq-inner-2-feature d-flex align-items-center mb-10">
                    <div className="tp-faq-inner-2-feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <h5 className="tp-faq-inner-2-feature-title">{feature.title}</h5>
                  </a>
                )}
              </div> */}
            </div>

            <div className="col-lg-6">
              <div className="tp-faq tp-faq-inner-2-wrap mb-60 ml-70 wow fadeInLeft" data-wow-duration="1s"
                data-wow-delay=".4s">
                <div className="tp-faq-content">
                  <h4 className="tp-faq-content-title">Questions & Answer</h4>
                </div>
                <div className="tp-faq-accordion">
                  <div className="accordion" id="accordionExample">
                    {accordion_data.map((item, i) =>
                      <div key={i} className="accordion-item">
                        <h2 className="accordion-header">
                          <button className={`accordion-button ${i === 1 ? "show" : "collapsed"}`} type="button" data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`} 
                            aria-expanded={i === 1 ? true : false} 
                            aria-controls={`collapse${item.tab_id}`}>
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
              {/* <div className="tp-faq tp-faq-inner-2-wrap ml-70 wow fadeInLeft" data-wow-duration="1s"
                data-wow-delay=".4s">
                <div className="tp-faq-content">
                  <h4 className="tp-faq-content-title">Questions & Answer</h4>
                </div>
                <div className="tp-faq-accordion">
                  <div className="accordion" id="accordionExample2">
                    {accordion_data.map((item, i) =>
                      <div key={i} className="accordion-item">
                        <h2 className="accordion-header">
                          <button className={`accordion-button ${i === 0 ? "show" : "collapsed"}`} type="button" data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id_2}`} aria-expanded={i === 1 ? true : false} aria-controls={`collapse${item.tab_id_2}`}>
                              {item.question}
                            <span className="accordion-btn"></span>
                          </button>
                        </h2>
                        <div id={`collapse${item.tab_id_2}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                          data-bs-parent="#accordionExample2">
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;