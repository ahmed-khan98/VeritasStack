'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';
import industry_img_1 from "@/assets/img/shape/industry-4-shape-1.png";
import industry_img_2 from "@/assets/img/shape/industry-4-shape-2.png";
import solve_shape from "@/assets/img/shape/solve-4-shape-1.png";
import Link from 'next/link';

interface DataType{
  sub_title: string;
  title: string;
  info: React.JSX.Element;
  industry_data: {
      id: number;
      icon: string;
      title: string;
  }[];
}
const industries_content: DataType = {
  sub_title: "Our Industries",
  title: "We're Always Try To Dedicated Good Service",
  info: <>Tecz is a provider of IT consulting and software development <br /> services. We have helped organizations and companies <br /> improve business performance</>,
  industry_data: [
    {
      id: 1,
      icon: "flaticon-globe",
      title: "Banking",
    },
    {
      id: 2,
      icon: "flaticon-android",
      title: "Healthcare",
    },
    {
      id: 3,
      icon: "flaticon-apple",
      title: "Education",
    },
    {
      id: 4,
      icon: "flaticon-internet-of-things",
      title: "Networking",
    },
    {
      id: 5,
      icon: "flaticon-smartwatch",
      title: "Marketing",
    },
    {
      id: 6,
      icon: "flaticon-tv",
      title: "Manufacture",
    },
  ]
}
const { sub_title, title, info, industry_data } = industries_content

const IndustryAreaHomeFour = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <section className="industry-area tp-industry-bg pt-115 pb-60" style={{ backgroundImage: `url(/assets/img/bg/industries-4-bg-1.jpg)` }}>
        <div className="tp-industry-bg-2" style={{ backgroundImage: `url(/assets/img/bg/industries-4-bg-2.jpg)` }}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-section tp-section-red-white mb-150 wow fadeInRight" data-wow-duration="1s"
                data-wow-delay=".5s">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
                <div className="tp-section-title-wrapper">
                  <p>{info}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tp-industry-4-video">
                <div className="tp-industry-4-video-shape-1">
                  <Image src={industry_img_1} alt="image-title" />
                </div>
                <div className="tp-industry-4-video-shape-2">
                  <Image src={industry_img_2} alt="image-title" />
                </div>
                <div className="tp-industry-4-video-icon">
                  <a className="popup-video"
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                  ><i
                    className="flaticon-play"></i></a>
                </div>
              </div>
            </div>

          </div>
          <div className="row">
            {industry_data.map((item, i) =>
              <div key={i} className="col-lg-2 col-md-4 col-sm-6">
                <Link href="/services-details" className="tp-solve-item mb-60 wow bounceIn" data-wow-duration=".6s"
                  data-wow-delay=".6s">
                  <div className="tp-solve-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-solve-content">
                    <h5 className="tp-solve-title">{item.title}</h5>
                  </div>
                  <div className="tp-solve-shape">
                    <Image src={solve_shape} alt="image-title" />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"tOHZ1mcAK8s"}
      />
      {/* video modal end */}
    </>
  );
};

export default IndustryAreaHomeFour;