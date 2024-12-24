
import React from 'react';
import Image from 'next/image';

import about_thumb_1 from "@/assets/img/about/one/about-thumb-1.jpg";
import about_thumb_2 from "@/assets/img/about/one/about-thumb-2.jpg";
import about_shape_1 from "@/assets/img/about/one/about-shape-1.png";
import avatar_img from "@/assets/img/about/one/avatar-1.png";
import Link from 'next/link';


type DataType = {
  exprience_year: string;
  exprience_title: React.JSX.Element;
  sub_title: string;
  title: string;
  sm_des: string;
  about_info_data: {
      id: number;
      icon: string;
      title: string;
      sm_info: React.JSX.Element;
  }[];
  btn_text: string;
  name: string;
  job_title: string;
}

const about_content: DataType = {
  exprience_year: '25',
  exprience_title: <>Years <br /> Experience</>,
  sub_title: "Hey! We Are Tecz",
  title: "We Always Try to Give Smart Solution For Business",
  sm_des: "System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa",
  about_info_data: [
    {
      id: 1,
      icon: "flaticon-server",
      title: "Cloud Based",
      sm_info: <>There are many variations of available but the <br /> majority have suffered alteration </>,
    },
    {
      id: 2,
      icon: "flaticon-technical-support",
      title: "Technical Support",
      sm_info: <>There are many variations of available but the <br /> majority have suffered alteration </>,
    },

  ],
  btn_text: "Discover More",
  name: "Harry Newman",
  job_title: "Co Founder",
}
const { exprience_year, exprience_title, sub_title, title, sm_des, about_info_data, btn_text, name, job_title } = about_content

const AboutAreaHomeOne = ({style_onpage}: any) => {
  return (
    <>
      <section id="about-one-page" className={`about-area ${style_onpage? "pt-160 pb-100" : ""}`}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-5">
              <div className="tp-about-thumb wow fadeInRight" data-wow-duration=".8s" data-wow-delay=".4s">
                <div className="tp-about-thumb-main overlay-anim w-img tp-thumb-common fix">
                  <div className="tp-thumb-common-overlay wow"></div>
                  <Image src={about_thumb_1} alt="image-title" />
                </div>
                <div className="tp-about-thumb-shape">
                  <div className="tp-about-thumb-shape-one">
                    <div className="about-image-1 overlay-anim tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <Image src={about_thumb_2} alt="image-title" />
                    </div>
                  </div>
                  <div className="tp-about-thumb-shape-two">
                    <Image src={about_shape_1} alt="image-title" />
                  </div>
                </div>
                <div className="tp-about-exprience d-none d-xl-block">
                  <h5 className="tp-about-exprience-title">{exprience_year}</h5>
                  <p>{exprience_title}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="tp-about-wrap ml-20 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-section mb-40">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{sm_des}</p>
                  </div>
                </div>
                <div className="tp-about-info pb-15">
                  {about_info_data.map((item, i) =>
                    <div key={i} className="tp-about-info-item d-flex mb-15">
                      <div className="tp-about-info-item-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tp-about-info-item-content">
                        <h5 className="tp-about-info-item-title">{item.title}</h5>
                        <p>{item.sm_info}</p>
                      </div>
                    </div>
                  )} 
                </div>
                <div className="tp-about-details d-flex align-items-center flex-wrap">
                  <div className="tp-about-btn mr-30">
                    <Link className="tp-btn" href="/about">{btn_text}</Link>
                  </div>
                  <div className="tp-about-avatar d-flex align-items-center">
                    <div className="tp-about-avatar-thumb">
                      <Image src={avatar_img} alt="image-title" />
                    </div>
                    <div className="tp-about-avatar-info">
                      <h5 className="tp-about-avatar-title">{name}</h5>
                      <span>{job_title}</span>
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

export default AboutAreaHomeOne;