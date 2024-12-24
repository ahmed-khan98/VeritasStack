
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import about_thumb_1 from "@/assets/img/about/four/about-4-thumb-1.png";
import avatar_img from "@/assets/img/about/one/avatar-1.png";

interface DataType {
  sub_title: string;
  title: string;
  info: string;
  feature_list: {
      id: number;
      icon: string;
      title: string;
      info: React.JSX.Element;
  }[];
  name: string;
  job_title: string;
}
const about_content: DataType = {
  sub_title: "Hey! We Are Tecz",
  title: "We Always Try to Give Smart Solution For Business",
  info: "System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa",
  feature_list: [
    {
      id: 1,
      icon: "flaticon-server",
      title: "Cloud Based",
      info: <>There are many variations of available but the <br /> majority have suffered alteration</>,
    },
    {
      id: 2,
      icon: "flaticon-technical-support",
      title: "Technical Support",
      info: <>There are many variations of available but the <br /> majority have suffered alteration</>,
    },
  ],
  name: "Harry Newman",
  job_title: "Co Founder",
}
const { sub_title, title, info, feature_list, name,job_title } = about_content

const AboutAreaHomeFour = () => {
  return (
    <>
      <section className="about-area pt-115 pb-55">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-5">
              <div className="tp-about-4-thumb pb-60 wow fadeInRight" data-wow-duration=".6s" data-wow-delay=".6s">
                <Image src={about_thumb_1} alt="image-title" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="tp-about-4 pb-60 wow fadeInLeft" data-wow-duration=".6s" data-wow-delay=".6s">
                <div className="tp-about-wrap ml-20">
                  <div className="tp-section tp-section-red mb-35">
                    <span className="tp-section-sub-title">{sub_title}</span>
                    <h4 className="tp-section-title">{title}</h4>
                    <div className="tp-section-title-wrapper">
                      <p>{info}</p>
                    </div>
                  </div>
                  <div className="tp-about-info pb-45">
                    {feature_list.map((item, i) =>
                      <div key={i} className="tp-about-info-item d-flex mb-15">
                        <div className="tp-about-info-item-icon">
                          <i className={item.icon}></i>
                        </div>
                        <div className="tp-about-info-item-content">
                          <h5 className="tp-about-info-item-title">{item.title}</h5>
                          <p>{item.info}</p>
                        </div>
                      </div>
                    )} 
                  </div>
                  <div className="tp-about-details d-flex align-items-center flex-wrap">
                    <div className="tp-about-btn mr-30">
                      <Link className="tp-btn-red" href="/services">Discover More</Link>
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
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeFour;