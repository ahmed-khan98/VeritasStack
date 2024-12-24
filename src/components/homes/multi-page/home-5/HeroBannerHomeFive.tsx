'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';
import banner_img from "@/assets/img/banner/five/banner-5-thumb-1.png";

type DataType= {
  sub_title: string;
  title: string;
  video_text: React.JSX.Element;
}
const hero_content: DataType = {
  sub_title: "BEST IT SOLUTION FOR YOU",
  title: "Technology Solutions for Future",
  video_text: <>Watch Our <br /> Showcase</>
}
const { sub_title, title, video_text } = hero_content

const HeroBannerHomeFive = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <section className="banner-area tp-banner-5-bg" style={{ backgroundImage: `url(/assets/img/banner/five/banner-5-bg-1.jpg)` }}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="tp-banner-5-wrapper">
                <span className="tp-banner-5-sub-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">{sub_title}</span>
                <h4 className="tp-banner-5-title wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".7s">{title}</h4>
                <div className="tp-banner-5-info d-flex align-items-center wow fadeInUp" data-wow-duration="1.4s"
                  data-wow-delay=".9s">
                  <div className="tp-banner-5-btn">
                    <Link className="tp-btn-red" href="/about">Discover More</Link>
                  </div>
                  <div className="tp-banner-5-video d-flex align-items-center">
                    <a className="popup-video" 
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                    ><i
                      className="flaticon-play"></i></a>
                    <span>{video_text}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-banner-5-thumb">
                <div className="tp-banner-5-thumb-1">
                  <Image src={banner_img} style={{width: '100%', height: 'auto'}} alt="theme-pure" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-slider-2-social d-none d-lg-block">
          <span>Follow us _ </span>
          <a href="#">Fb</a>
          <a href="#">Tw</a>
          <a href="#">Yt</a>
          <a href="#">In</a>
        </div>
      </section>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"nvY4v8m4gGI"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroBannerHomeFive;