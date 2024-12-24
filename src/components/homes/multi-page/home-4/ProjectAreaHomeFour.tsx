'use client'
import React from 'react';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from 'next/image';

import project_img_1 from "@/assets/img/project/four/project-4-thumb-1.jpg";
import project_img_2 from "@/assets/img/project/four/project-4-thumb-2.jpg";
import project_img_3 from "@/assets/img/project/four/project-4-thumb-3.jpg";
import project_img_4 from "@/assets/img/project/four/project-4-thumb-4.jpg";

type TData = {
  sub_title: string;
  title: string;
}
const project_content: TData = {
  sub_title: "Recently Completed work",
  title: "Improve & Enhance the Tech Projects",
}
const { sub_title, title } = project_content


interface DataType {
  id: number;
  img: StaticImageData;
  category: string;
  title: string;
}[]
const slider_data: DataType[] = [
  {
    id: 1,
    img: project_img_1,
    category: "Idea",
    title: "Product Design",
  },
  {
    id: 2,
    img: project_img_2,
    category: "Development",
    title: "Smart Vision",
  },
  {
    id: 3,
    img: project_img_3,
    category: "Technology",
    title: "Web  Development",
  },
  {
    id: 4,
    img: project_img_4,
    category: "Security",
    title: "Analytic Solution",
  },
  // swiper update 
  {
    id: 1,
    img: project_img_1,
    category: "Idea",
    title: "Product Design",
  },
  {
    id: 2,
    img: project_img_2,
    category: "Development",
    title: "Smart Vision",
  },
  {
    id: 3,
    img: project_img_3,
    category: "Technology",
    title: "Web  Development",
  },
  {
    id: 4,
    img: project_img_4,
    category: "Security",
    title: "Analytic Solution",
  },
]

const ProjectAreaHomeFour = ({style} : any) => {
  const bg_img = style ? '/assets/img/project/five/project-5-bg-1.jpg' : '/assets/img/project/four/project-4-bg-1.jpg'
  return (
    <> 
      <section id="project-one-page" className="project-area tp-project-4 fix pb-120 pt-115">
        <div className="tp-project-4-bg" style={{ backgroundImage: `url(${bg_img})` }}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-8 col-md-8">
              <div className="tp-section tp-section-red mb-65">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-4 col-md-4">
              <div className="tp-project-4-arrows mb-35">
                <div className="tp-project-4-arrows-wrapper">
                  <div className="tp-project-4-prv" style={{cursor: 'pointer'}}><i className="fa-regular fa-arrow-left"></i></div>
                  <div className="tp-project-4-nxt" style={{cursor: 'pointer'}}><i className="fa-regular fa-arrow-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-project-4-wrapper">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                  }}
                  navigation={{
                    nextEl: '.tp-project-4-nxt',
                    prevEl: '.tp-project-4-prv',
                  }}
                  modules={[Navigation]}
                  breakpoints={{
                    '1200': {
                      slidesPerView: 4,
                    },
                    '992': {
                      slidesPerView: 4,
                    },
                    '768': {
                      slidesPerView: 3,
                    },
                    '576': {
                      slidesPerView: 1,
                    },
                    '0': {
                      slidesPerView: 1,
                    },
                  }}
                  className="swiper-container tp-project-4-active">
                  {slider_data.map((item, i) =>
                    <SwiperSlide key={i} className="tp-project-4-item">
                      <div className="tp-project-4-item-thumb tp-thumb-common fix">
                        <div className="tp-thumb-common-overlay-red wow"></div>
                        <Image src={item.img} style={{ width: '100%', height: 'auto' }} alt="image-title" />
                      </div>
                      <div className="tp-project-4-item-content">
                        <span>{item.category}</span>
                        <h4 className="tp-project-4-title under-line-white"><a href="/project-details">{item.title}</a></h4>
                      </div>
                      <div className="tp-project-4-arrow">
                        <Link href="/project-details"><i className="fa-regular fa-arrow-right"></i></Link>
                      </div>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default ProjectAreaHomeFour;