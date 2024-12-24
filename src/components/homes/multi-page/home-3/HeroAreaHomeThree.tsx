'use client'
import React,{useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

import slider_shape_1 from "@/assets/img/slider/slider-shape-1.png";
import slider_shape_2 from "@/assets/img/slider/slider-shape-2.png";
import slider_shape_3 from "@/assets/img/slider/slider-shape-3.png";
import slider_shape_4 from "@/assets/img/slider/slider-shape-4.png";

interface DataType {
  id: number;
  bg_img: string;
  sub_title: string;
  title: string;
}[]

const slider_data: DataType[] = [
  {
    id: 1,
    bg_img: "/assets/img/slider/slider-3-thumb-1.jpg",
    sub_title: "We are IT services agnecy ~",
    title: "<span>Think</span> Big  We make <br /> IT Possible",
  },
  {
    id: 2,
    bg_img: "/assets/img/slider/slider-3-thumb-2.jpg",
    sub_title: "We are services IT agnecy",
    title: "<span>Take </span> Your Business to </span> <br />New Heights ",
  },
  {
    id: 3,
    bg_img: "/assets/img/slider/slider-3-thumb-3.jpg",
    sub_title: "We are services IT agnecy",
    title: "<span>Think</span> Big  We make <br /> IT Possible",
  },

]

const HeroAreaHomeThree = () => {
 

  return (
    <>
      <section className="slider-area tp-slider-wrap">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          pagination={{
            el: ".tp-slider-dot",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class=${className}>
            <button>${index < 9 ? "0" : ""}${index + 1}</button>
           </span>`;
            },
          }}
          className="swiper-container tp-slider-active">
          {slider_data.map((item, i) =>
            <SwiperSlide key={i} >
              <div className='swiper-slide'>
                <div className='tp-slider-wrapper'>

                  <div key={i} className="tp-slider-bg" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tp-slider-content">
                          <span className="tp-slider-sub-title">{item.sub_title}</span>
                          <h2 className="tp-slider-title" dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                          <div className="tp-slider-btn">
                            <Link className="tp-btn" href="/contact">Contact Us</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tp-slider-shape-1">
                    <Image src={slider_shape_1} alt="image-title" />
                  </div>
                  <div className="tp-slider-shape-2">
                    <Image src={slider_shape_2} alt="image-title" />
                  </div>
                  <div className="tp-slider-shape-3">
                    <Image src={slider_shape_3} alt="image-title" />
                  </div>
                  <div className="tp-slider-shape-4">
                    <Image src={slider_shape_4} alt="image-title" />
                  </div>

                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper> 
        <div className="tp-slider-dot"></div>

      </section>
    </>
  );
};

export default HeroAreaHomeThree;