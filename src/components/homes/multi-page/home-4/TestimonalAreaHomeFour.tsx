'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import testimonial_thumb from "@/assets/img/testimonial/testimonial-4-thumb-1.png";
import avatar_img_1 from "@/assets/img/testimonial/sm/testimonial-avater-2.png";
import avatar_img_2 from "@/assets/img/testimonial/sm/testimonial-avater-3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


interface DataType {
  sub_title: string;
  title: string;
  testimonial_data: {
      id: number;
      img: StaticImageData;
      name: string;
      job_title: string;
      sm_info: string;
  }[];
}

const testimonial_content:DataType = {
  sub_title: "Clients Rivews",
  title: "What Our Coustomer Telling About Our Tecz",
  testimonial_data: [
    {
      id: 1,
      img: avatar_img_1,
      name: "Harry Newman",
      job_title: "Co Founder",
      sm_info: "Duis elementum a lorem eu iaculis. Pellentesque ac mollis arcu. Suspendisse quis neque vehicula, sodales velit id, lobortis lectus. Suspendisse eleifend ultricies bibendum. Maecenas maximus ac urna at interdum. Cras posuere sapien",
    },
    {
      id: 2,
      img: avatar_img_2,
      name: "MR Harry",
      job_title: "Founder",
      sm_info: "Duis elementum a lorem eu iaculis. Pellentesque ac mollis arcu. Suspendisse quis neque vehicula, sodales velit id, lobortis lectus. Suspendisse eleifend ultricies bibendum. Maecenas maximus ac urna at interdum. Cras posuere sapien",
    },
  ]
}
const { sub_title, title, testimonial_data } = testimonial_content

const setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.tp-testimonial-4-nxt',
    prevEl: '.tp-testimonial-4-prv',
  },
  breakpoints: {
    '1200': {
      slidesPerView: 1,
    },
    '992': {
      slidesPerView: 1,
    },
    '768': {
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}
const TestimonalAreaHomeFour = () => {
  return (
    <>
      <section className="testionial-area tp-testimonial-4-bg pt-115 pb-115 mb-115 fix" style={{ backgroundImage: `url(/assets/img/testimonial/testimonial-4-bg-1.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-section tp-section-red mb-50">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="tp-testimonial-4-wrapper">
                <Swiper
                  {...setting}
                  modules={[Navigation]}
                  className="swiper-container tp-testimonial-4-active">
                  {testimonial_data.map((item, i) =>
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-testimonial-4-item">
                        <div className="tp-testimonial-4-avatar">
                          <Image src={item.img} alt="image-title" />
                        </div>
                        <div className="tp-testimonial-4-content">
                          <p>{item.sm_info}</p>
                        </div>
                        <div className="tp-testimonial-4-avatar-info">
                          <h4 className="tp-testimonial-4-avatar-title">{item.name}</h4>
                          <span>{item.job_title}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  )}
                </Swiper>
                <div className="tp-testimonial-4-arrow">
                  <div className="tp-testimonial-4-prv" style={{ cursor: "pointer" }}><i className="fa-regular fa-arrow-left"></i></div>
                  <div className="tp-testimonial-4-nxt ml-30" style={{ cursor: "pointer" }}><i className="fa-regular fa-arrow-right"></i></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-testimonial-4-thumb">
                <div className="tp-testimonial-4-thumb-shape wow slideInRight" data-wow-duration="1s"
                  data-wow-delay=".1s">
                  <Image src={testimonial_thumb} alt="image-title" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonalAreaHomeFour;