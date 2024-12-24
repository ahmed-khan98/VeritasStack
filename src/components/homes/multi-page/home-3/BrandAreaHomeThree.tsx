'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import brand_img_1 from "@/assets/img/brand/three/brand-3-thumb-1.png";
import brand_img_2 from "@/assets/img/brand/three/brand-3-thumb-2.png";
import brand_img_3 from "@/assets/img/brand/three/brand-3-thumb-3.png";
import brand_img_4 from "@/assets/img/brand/three/brand-3-thumb-4.png";
import brand_img_5 from "@/assets/img/brand/three/brand-3-thumb-5.png";
import { Swiper, SwiperSlide } from 'swiper/react';

type DataType = StaticImageData[]
const brand_images: DataType = [brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5, brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5,]

const setting = {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 5,
    },
    '992': {
      slidesPerView: 4,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 3,
    },
    '0': {
      slidesPerView: 2,
    },
  }
}

const BrandAreaHomeThree = ({style, style_2} : any) => {
  return (
    <> 
      <div className={`brand-area ${style? "pt-120" : style_2 ? "pt-110" : ""} pb-110`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...setting} className="swiper-container tp-brand-3-active">
                {brand_images.map((item, i) =>
                  <SwiperSlide key={i} className="tp-brand-3-item text-center">
                    <Image src={item} alt="image-title" />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAreaHomeThree;