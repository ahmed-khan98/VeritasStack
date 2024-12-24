
import React from 'react';
import Image from 'next/image';
import testimonial_data from '@/data/TestimonialData';
import testimonial_quote from '@/assets/img/testimonial/testimonial-5-quote.png';
import testimonial_shape_1 from '@/assets/img/testimonial/testimonial-5-shape-1.png';
import testimonial_shape_2 from '@/assets/img/testimonial/testimonial-inner-shape-1.jpg';

const TestimonialAre = () => {
  return (
    <>
      <section className="testimonial-area tp-testimonial-inner pt-120 pb-90">
        <div className="container">
          <div className="row">
            {testimonial_data.map((item, i) =>
              <div key={i} className="col-lg-6">
                <div className="tp-testimonial-5-item mb-30">
                  <div className="tp-testimonial-5-content">
                    <p>{item.sm_info}</p>
                  </div>
                  <div className="tp-testimonial-5-avatar d-flex">
                    <div className="tp-testimonial-5-avatar-thumb">
                      <Image src={item.img} alt="image" />
                    </div>
                    <div className="tp-testimonial-5-avatar-content">
                      <div className="tp-testimonial-5-avatar-rating mb-45">
                        <i className="fa-solid fa-star"></i>{' '}
                        <i className="fa-solid fa-star"></i>{' '}
                        <i className="fa-solid fa-star"></i>{' '}
                        <i className="fa-solid fa-star"></i>{' '}
                        <i className="fa-solid fa-star"></i>{' '}
                      </div>
                      <h5 className="tp-testimonial-5-avatar-title">{item.name}</h5>
                      <span>{item.job_title}</span>
                      <div className="tp-testimonial-5-avatar-quote">
                        <Image src={testimonial_quote} alt="image" />
                      </div>
                    </div>
                  </div>
                  <div className="tp-testimonial-5-shape-1">
                    <Image src={testimonial_shape_1} alt="image" />
                  </div>
                  <div className="tp-testimonial-5-shape-2">
                    <Image src={testimonial_shape_2} alt="image" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAre;