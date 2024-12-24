"use client"
import VideoPopup from '@/modals/VideoPopup';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import shape_1 from "@/assets/img/banner/one/banner-one-shape-1.png";
import shape_2 from "@/assets/img/banner/one/banner-one-shape-2.png"; 
import BGShapeIcon from '@/svg/HomeOneIcons/BGShapeIcon';
import ScrollBtnIcon from '@/svg/HomeOneIcons/ScrollBtnIcon';

interface DataType {
  sub_title: string;
  title: React.JSX.Element;
  btn_text: string;
  banner_social: {
      link: string;
      title: string;
  }[];
}

const hero_content: DataType = {
  sub_title: 'Solutions for your businesses ',
  title: <><span>Inno</span>vating <br /> Tech Solution</>,
  btn_text: "Discover More",
  banner_social: [
    {
      link: "https://www.instagram.com",
      title: "INSTAGRAM",
    },
    {
      link: "http://twitter.com",
      title: "TWITTER",
    },      
    {
      link: "http://facebook.com",
      title: "FACEBOOK",
    },
   
  ]

}
const {sub_title, title, btn_text, banner_social}  = hero_content

const HeroBannerHomeOne = ({style_onpage}: any) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="banner-area tp-banner-bg theme-bg p-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-banner">
                <span className="tp-banner-sub-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">{sub_title}</span>
                <h2 className="tp-banner-title wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".7s">{title}</h2>
                <div className="tp-banner-btn wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".9s">
                  <Link className="tp-btn" href="/about">{btn_text}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-banner-social d-none d-lg-block">
          {banner_social.map((item, i) =>  <Link href={item.link} target='_blank' key={i}>{item.title}</Link>)} 
        </div>
        <div className="tp-banner-shape">
          <div className="tp-banner-shape-one">
            <Image src={shape_1} alt="image-title" />
          </div>
          <div className="tp-banner-shape-two">
            <Image src={shape_2} alt="image-title" />
          </div>
        </div>
        <div className={`tp-banner-scroll-down ${style_onpage? "d-none" : ""}`}>
          <div className="tp-banner-scroll-shape">
            <span><BGShapeIcon /></span>
          </div>
        </div>
        <div className={`tp-banner-scroll-mouse ${style_onpage? "d-none" : ""}`}>         
          <a href="#project-id">
            <span> <ScrollBtnIcon /></span>
          </a>
          <p>Scroll Down</p>
        </div>
        <div className="tp-banner-video d-none d-md-block">
          <a className="popup-video" 
            onClick={() => setIsVideoOpen(true)}
            style={{ cursor: "pointer" }}
          ><i className="flaticon-play"></i></a>
        </div>
        <div className="tp-banner-bg-shape" style={{ backgroundImage: `url(/assets/img/banner/one/banner-thumb-1.jpg)` }}></div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroBannerHomeOne;