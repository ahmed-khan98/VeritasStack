'use client'
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import projcet_img_1 from "@/assets/img/project/two/project-2-thumb-1.jpg";
import projcet_img_2 from "@/assets/img/project/two/project-2-thumb-2.jpg";
import projcet_img_3 from "@/assets/img/project/two/project-2-thumb-3.jpg";
import projcet_img_4 from "@/assets/img/project/two/project-2-thumb-4.jpg";
import Image from 'next/image';

const project_content = {
  sub_title: "Recently Completed work",
  title: <>Improve & Enhance the <br /> Tech Projects</>,
  btn_text: "View all Work",
  slider_project: [
    {
      id: 1,
      img: projcet_img_1,
      tag: "Development",
      title: "Smart Vision",
    },
    {
      id: 2,
      img: projcet_img_2,
      tag: "Development",
      title: "Digital Soloution",
    },
    {
      id: 3,
      img: projcet_img_3,
      tag: "Development",
      title: "Business Solution",
    },
    {
      id: 4,
      img: projcet_img_4,
      tag: "Development",
      title: "Growth Planning",
    },
    // repeat for swiper
    {
      id: 5,
      img: projcet_img_1,
      tag: "Development",
      title: "Smart Vision",
    },
    {
      id: 6,
      img: projcet_img_2,
      tag: "Development",
      title: "Digital Soloution",
    },
    {
      id: 7,
      img: projcet_img_3,
      tag: "Development",
      title: "Business Solution",
    },
    {
      id: 8,
      img: projcet_img_4,
      tag: "Development",
      title: "Growth Planning",
    },
  ],
}
const { sub_title, title, btn_text, slider_project } = project_content

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
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}
const ProjectAreaHomeTwo = () => {
  return (
    <> 
      <section id="project-one-page" className="project-area fix p-relative pt-110 pb-80">
        <div className="tp-project-2-bg" style={{ backgroundImage: `url(/assets/img/bg/project-2-bg-1.jpg)` }}></div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="tp-section tp-section-two mb-60">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-project-2-btn mb-60">
                <Link className="tp-btn" href="/project-1">{btn_text}</Link>
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="tp-project-2-wrapper">
                <Swiper {...setting} loop={true} className="swiper-container tp-project-2-slider-active">  
                    {slider_project.map((item, i) =>
                      <SwiperSlide key={i} className="tp-project-2 p-relative mb-40">
                        <div className="tp-project-2-thumb">
                          <Image src={item.img} style={{ width: "100%",  }} alt={item.title} />
                        </div>
                        <div className="tp-project-2-info d-flex justify-content-between align-items-center">
                          <div className="tp-project-2-content">
                            <span>{item.tag}</span>
                            <h4 className="tp-project-2-title"><Link href="/project-details">{item.title}</Link></h4>
                          </div>
                          <div className="tp-project-2-icon">
                            <Link href="/project-details"><i className="fa-regular fa-arrow-right"></i></Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    )}  
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectAreaHomeTwo;