'use client'
import React, { useState } from 'react';

import Image from 'next/image';
import VideoPopup from '@/modals/VideoPopup';
import video_shape_1 from "@/assets/img/shape/video-2-shape-1.png";
import video_shape_2 from "@/assets/img/shape/video-2-shape-2.png";
import check_icon from "@/assets/img/icon/check-icon.svg";
import Link from 'next/link';

const video_content = {
  sub_title: "Check Our Benifits",
  title: "We're Partner of Your Innovations",
  info: "System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa",
  info_text: <>Lorem ipsum is simply free text dolor sit <br /> am adipi we daily ipsum</>,
  feature_1: "Perspiciatis omnis natus error",
  feature_2: "Donec gravida imperdie",
  info_box: "High Quality IT Solutions for Startup",

}
const {sub_title, title, info, info_text, feature_1, feature_2, info_box} = video_content

const VideoAreaHomeTwo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="video-area tp-video-two mb-120">
        <div className="tp-video-two-bg  p-relative" style={{ backgroundImage: `url(/assets/img/video/video-2-thumb-1.jpg)` }}>
          <div className="tp-video-two-wrap  d-none d-lg-block">
            <div className="tp-video-two-shape-one">
              <Image src={video_shape_1} alt="image-title" />
            </div>
            <div className="tp-video-two-shape-two">
              <Image src={video_shape_2} alt="image-title" />
            </div>
          </div>
          <div className="tp-video-two-playlist">
            <a className="popup-video"
              onClick={() => setIsVideoOpen(true)}
              style={{ cursor: "pointer" }}
            ><i
              className="flaticon-play"></i></a>
            <p>Watch Our Videos</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="offset-xl-7 col-xl-5 offset-lg-6 col-lg-6">
              <div className="tp-video-two-wrapper p-relative pb-65 pt-55 wow fadeInRight" data-wow-duration="1s"
                data-wow-delay=".4s">
                <div className="tp-section tp-section-two mb-35">
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
                      <span>{info_text}</span>
                    </div>
                  </div>
                </div>
                <div className="tp-video-two-list mb-50">
                  <ul>
                    <li><span><Image src={check_icon} alt="image-title" /></span>{feature_1}</li>
                    <li><span><Image src={check_icon} alt="image-title" /></span>{feature_2}</li>
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
                    <span>{info_box}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"nPQ4BpTfK1Q"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoAreaHomeTwo;