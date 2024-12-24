
import React from 'react';
import Image from 'next/image';
import testimonial_thumb_1 from "@/assets/img/about/inner/about-inner-thumb-1.jpg";
import testimonial_shape_1 from "@/assets/img/about/inner/about-inner-shape-1.jpg";
import check_icon from "@/assets/img/icon/check-icon.svg";
import Link from 'next/link';

const Testimonial_content = {
  sub_title: "Check Our Benifits",
  title: "We're Partner of Your Innovations",
  sm_info: "System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa",
  info_text_1: <>Lorem ipsum is simply free text dolor sit <br /> am adipi we daily ipsum</>,
  list_1: "Perspiciatis omnis natus error",
  list_2: "Donec gravida imperdie",
  info_text_2: "High Quality IT Solutions for Startup",

}
const { sub_title, title, sm_info, info_text_1, list_1, list_2, info_text_2 } = Testimonial_content

const TestimonialVideoArea = () => {
  return (
    <>
      <section className="video-area tp-video-two">
        <div className="container">
          <div className="tp-video-inner-bg">
            <div className="row">
              <div className="col-lg-6">
                <div className="tp-video-inner">
                  <div className="tp-video-inner-thumb w-img">
                    <Image src={testimonial_thumb_1} alt="image" />
                  </div>
                  <div className="tp-video-inner-shape-1 tp-thumb-common fix">
                    <div className="tp-thumb-common-overlay wow"></div>
                    <Image src={testimonial_shape_1} alt="image" />
                  </div>
                </div>
              </div>
              <div className="offset-xl-1 col-xl-5 col-lg-6">
                <div className="tp-video-two-wrapper p-relative pt-55 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                  <div className="tp-section tp-section-two mb-35">
                    <span className="tp-section-sub-title">{sub_title}</span>
                    <h4 className="tp-section-title">{title}</h4>
                    <div className="tp-section-title-wrapper">
                      <p>{sm_info}</p>
                    </div>
                    <div className="tp-section-title-info d-flex align-items-center mt-30">
                      <div className="tp-section-title-info-icon">
                        <i className="flaticon-project"></i>
                      </div>
                      <div className="tp-section-title-info-text">
                        <span>{info_text_1}</span>
                      </div>
                    </div>
                  </div>
                  <div className="tp-video-two-list mb-50">
                    <ul>
                      <li><span><Image src={check_icon} alt="image" /></span>{list_1}</li>
                      <li><span><Image src={check_icon} alt="image" /></span>{list_2}</li>
                    </ul>
                  </div>
                  <div className="tp-video-two-btn">
                    <Link className="tp-btn" href="/about">Discover More</Link>
                  </div>
                  <div className="tp-video-two-info">
                    <div className="tp-video-two-info-icon">
                      <i className="flaticon-manufacturing"></i>
                    </div>
                    <div className="tp-video-two-info-text">
                      <span>{info_text_2}</span>
                    </div>
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

export default TestimonialVideoArea;