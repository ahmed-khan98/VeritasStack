'use client'
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


interface DataType {
  sub_title: string;
  title: React.JSX.Element;
  // info: string;
  offering_data: {
      id: number;
      title: string;
      info: string;
      icon: string;
  }[];
}

const offering_content: DataType = {
  sub_title: "Our Awesome Services",
  title: <>We Are Dedicated To<br/> Serve You All Time.</>,
  // info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation ullamco laboris",
  offering_data: [
    {
      id: 1,
      title: "Ui/Ux Designing",
      icon: "flaticon-ux-design",
      info: "Veritas Stack LLC understands the needs of enhancing growth your business ideas by delivering the most amazing web designing services.",
    },
    {
      id: 2,
      icon: "flaticon-ux-design",
      title: "Website Development",
      info: "Web Improvement Is The Work Engaged With Building Up A Site For The Internet (World Wide Web) Or An Intranet (A Private Network).",
    },
    {
      id: 3,
      icon: "flaticon-ux-design",
      title: "App Design & Development",
      info: "For clients that want custom mobile app development solution,Veritas Stack LLC offers unique, compatible,",
    },
    {
      id: 4,
      icon: "flaticon-ux-design",
      title: "Accounting & Bookkeeping",
      info: "We specialize in simplifying bookkeeping for businesses of all sizes. Our expert team ensures your financial records are accurate, organized, and up-to-date, giving you the confidence to focus on growing your business.",
    },
    {
      id: 5,
      icon: "flaticon-ux-design",
      title: "Digital Marketing ",
      info: "Leverage The Skills Of Our Company’s Digital Marketing Services Capable Of Delivering Outstanding Marketing Strategies. We Help Our Clients ",
    },
  
  ]
}
const { sub_title, title, offering_data } = offering_content

const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 3,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}
const OfferingAreaHomeThree = () => {
  return (
    <>
      <section id="services-one-page" className="offering-area tp-offer-bg pb-80 pt-120" style={{ backgroundImage: `url(/assets/img/bg/offer-bg-1.jpg)` }}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="tp-section tp-section-white-two mb-80">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
            {/* <div className="col-lg-5">
              <div className="tp-section-title-wrapper mb-80">
                <p>{info}</p>
              </div>
            </div> */}
          </div>
          <Swiper {...setting} className="swiper-container tp-project-3-slider-active">
          {offering_data.map((item, i) =>
              <SwiperSlide key={i} className="tp-project-3-item mb-30 tp-thumb-common fix wow fadeInRight" data-wow-duration="1.2s" data-wow-delay=".6s">
                <div className="tp-offer-item mb-40 wow bounceIn" data-wow-duration=".6s" data-wow-delay=".6s">
                  <div className="tp-offer-item-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-offer-item-content">
                    <h4 className="tp-offer-item-title under-line-white">
                      <Link href="/services-details">{item.title}</Link></h4>
                    <p>{item.info}</p>
                  </div>
                  <div className="tp-offer-item-btn">
                    <Link href="/services-details">Read More <i className="fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </SwiperSlide>
            )}
          
          </Swiper>
          
     
        </div>
      </section>
    </>
  );
};

export default OfferingAreaHomeThree;