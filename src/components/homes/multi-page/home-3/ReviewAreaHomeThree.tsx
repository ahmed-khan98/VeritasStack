'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';

import review_thumb from "@/assets/img/thumbs/review-thumb-1.jpg";


import rating_avatar_1 from "@/assets/img/team/avatar/rating-avatar-1.png";
import rating_avatar_2 from "@/assets/img/team/avatar/rating-avatar-2.png";
import rating_avatar_3 from "@/assets/img/team/avatar/rating-avatar-3.png";
import rating_avatar_4 from "@/assets/img/team/avatar/rating-avatar-4.png";
import rating_avatar_5 from "@/assets/img/team/avatar/rating-avatar-5.png";


const review_content = {
  sub_title: "Our Client Rivews",
  title: "What Our Clients Saying About Veritas Stack LLC",
  slider_data: [
    {
      id: 1,
      name: "David Backhum",
      job_title: "David Backhum",
      info: "Veritas Stack LLC provides exceptional service. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure customer satisfaction. I've been consistently impressed with the quality of their work and their commitment to delivering on time. I highly recommend Veritas Stack LLC for all your technology needs."
    },
    {
      id: 2,
      name: "Jamil Rayhan",
      job_title: "David Backhum",
      info: "Veritas Stack LLC provides exceptional service. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure customer satisfaction. I've been consistently impressed with the quality of their work and their commitment to delivering on time. I highly recommend Veritas Stack LLC for all your technology needs."
    },
    {
      id: 3,
      name: "Mahdi Hasan",
      job_title: "David Backhum",
      info: "Veritas Stack LLC provides exceptional service. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure customer satisfaction. I've been consistently impressed with the quality of their work and their commitment to delivering on time. I highly recommend Veritas Stack LLC for all your technology needs."
    },
    {
      id: 4,
      name: "Asiq Alahi",
      job_title: "David Backhum",
      info: "Veritas Stack LLC provides exceptional service. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure customer satisfaction. I've been consistently impressed with the quality of their work and their commitment to delivering on time. I highly recommend Veritas Stack LLC for all your technology needs."
    },
    // for swiper
    {
      id: 1,
      name: "David Backhum",
      job_title: "David Backhum",
      info: "Veritas Stack LLC provides exceptional service. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure customer satisfaction. I've been consistently impressed with the quality of their work and their commitment to delivering on time. I highly recommend Veritas Stack LLC for all your technology needs."
    },
    {
      id: 2,
      name: "Jamil Rayhan",
      job_title: "David Backhum",
      info: "Veritas Stack LLC provides exceptional service. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure customer satisfaction. I've been consistently impressed with the quality of their work and their commitment to delivering on time. I highly recommend Veritas Stack LLC for all your technology needs."
    },
    {
      id: 3,
      name: "Mahdi Hasan",
      job_title: "David Backhum",
      info: "Veritas Stack LLC provides exceptional service. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure customer satisfaction. I've been consistently impressed with the quality of their work and their commitment to delivering on time. I highly recommend Veritas Stack LLC for all your technology needs."
    },
    {
      id: 4,
      name: "Asiq Alahi",
      job_title: "David Backhum",
      info: "Veritas Stack LLC provides exceptional service. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure customer satisfaction. I've been consistently impressed with the quality of their work and their commitment to delivering on time. I highly recommend Veritas Stack LLC for all your technology needs."
    },


  ]
}
const { sub_title, title, slider_data } = review_content

const slider_images = [rating_avatar_1, rating_avatar_2, rating_avatar_3, rating_avatar_4, rating_avatar_5, rating_avatar_1, rating_avatar_2, rating_avatar_3, rating_avatar_4, rating_avatar_5]


const setting_1 = {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".testi-button-next",
    prevEl: ".testi-button-prev",
  },
}

const setting_2 = {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    '1400': {
      slidesPerView: 5,
    },
    '1200': {
      slidesPerView: 5,
    },
    '992': {
      slidesPerView: 3,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 3,
    },
    '0': {
      slidesPerView: 3,
    },
  },
}

const ReviewAreaHomeThree = () => {
  type SwiperType = any;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  return (
    <>
      <section className="review-area pt-120 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5">
              <div className="tp-review-thumb pb-60">
                <Image src={review_thumb} style={{ width: '100%', height: 'auto' }} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="tp-review-wrap ml-50 pb-60">
                <div className="tp-section tp-section-3 mb-50">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                </div>
                <div className="tp-review-wrapper pb-60">
                  <Swiper
                    {...setting_1}

                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}

                    className="swiper-container swiper tp-review-active">
                    {slider_data.map((item, i) =>
                      <SwiperSlide key={i} className="tp-review-item">
                        <div className="tp-review-content">
                          <p>{item.info}</p>
                        </div>
                        <div className="tp-review-avatar">
                          <h4 className="tp-review-avatar-title">{item.name}</h4>
                          <span>{item.job_title}</span>
                        </div>
                      </SwiperSlide>
                    )}
                  </Swiper>
                </div>
                <div className="tp-review-thumb-wrapper">
                  <Swiper
                    {...setting_2}

                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}

                    className="swiper-container swiper tp-review-avatar-active">
                    {slider_images.map((image, index) =>
                      <SwiperSlide key={index} className="tp-review-avatar-thumb">
                        <Image src={image} alt="testi-avata" />
                      </SwiperSlide>
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewAreaHomeThree;