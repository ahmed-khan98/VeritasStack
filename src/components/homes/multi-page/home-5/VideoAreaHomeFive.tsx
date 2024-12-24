
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatar_img from "@/assets/img/about/one/avatar-1.png";
import video_img_1 from "@/assets/img/about/five/about-5-thumb-1.jpg";
import video_img_2 from "@/assets/img/about/five/about-5-thumb-2.jpg";

const video_content = {
  call_text: "Best Awarded Company",
  phone: "We adapt our delivery to the way your work, whether as an external provider.",
  sub_title: "About us",
  title: "We're Partner of Your Innovations",
  info: "At VeritasStack, we specialize in empowering businesses to thrive in the digital world by providing tailored solutions backed by deep expertise in financial systems, supply chain management, and seamless merchant integration.",
  title_info: "Our comprehensive services ensure your success at every stage.",
  // feature_1: "Perspiciatis omnis natus error",
  // feature_2: "Donec gravida imperdie",
  // name: "Harry Newman",
  // job_title: "Co Founder",

}
const { call_text, phone, sub_title, title, info,title_info} = video_content

const VideoAreaHomeFive = ({style, onPageStyle} : any) => {
  return (
    <> 
      <section id="about-one-page" className={`video-area ${style ? "tp-benifits-inner pt-120" : "tp-benifits-4"} ${onPageStyle? "pt-80" : ""}`}>
        <div className="container">
          <div className="row">

            <div className="col-xxl-7 col-xl-6 col-lg-6 order-2 order-lg-1">
              <div className="tp-benifits-5-thumb">
                <div className="tp-benifits-5-thumb-1">
                  <Image src={video_img_1} alt="theme-pure" />
                </div>
                <div className="tp-benifits-5-thumb-2 overlay-anim">
                  <div className={`${style ? "tp-thumb-common-overlay" : "tp-thumb-common-overlay-red"} wow`}></div>
                  <Image src={video_img_2} alt="theme-pure" />
                </div>
                <div className="tp-benifits-5-wrap">
                  <div className="tp-benifits-5-contact">
                    <div className="tp-benifits-5-contact-icon">
                      <i className="fa-solid fa-award" style={{ fontSize: '40px' }}></i>
                    </div>
                    <div className="tp-benifits-5-contact-content">
                    <h5 className="tp-about-avatar-title">{call_text}</h5>
                      {/* <span>{call_text}</span>*/}
                      <a href='#'>{phone}</a> 
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-5 col-xl-6 col-lg-6 order-1 order-lg-2"> 
              <div className="tp-video-two-wrapper p-relative pb-120 wow fadeInLeft" data-wow-duration="1s"
                data-wow-delay=".6s">
                <div className={`tp-section ${style ? "" : "tp-section-red"} mb-35`}>
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{info}</p>
                  </div>
                  <div className="tp-section-title-info d-flex align-items-center mt-30">
                     <div className="tp-section-title-info-icon">
                      <i className="flaticon-project"></i>
                    </div>
                    <div className="tp-section-title-info-text">
                      <span>{title_info}</span>
                     </div>
                  </div>
                </div>
                {/* <div className="tp-video-two-list mb-50">
                  <ul>
                    <li><span><i className="fa-regular fa-circle-check"></i></span>{feature_1}</li>
                    <li><span><i className="fa-regular fa-circle-check"></i></span>{feature_2}</li>
                  </ul>
                </div>
                <div className="tp-about-details d-flex align-items-center flex-wrap">
                  <div className="tp-about-btn mr-30 mb-10">
                    <Link className={`${style ? "tp-btn" : "tp-btn-red"}`} href="/about">Discover More</Link>
                  </div>
                  <div className="tp-about-avatar d-flex align-items-center mb-10">
                    <div className="tp-about-avatar-thumb">
                      <Image src={avatar_img} alt="theme-pure" />
                    </div>
                    <div className="tp-about-avatar-info">
                      <h5 className="tp-about-avatar-title">{name}</h5>
                      <span>{job_title}</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default VideoAreaHomeFive;