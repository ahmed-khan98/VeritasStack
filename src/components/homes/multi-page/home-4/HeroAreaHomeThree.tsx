'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import slider_thumb_1 from '@/assets/img/slider/slider-2-thumb-1.jpg';
import slider_thumb_2 from '@/assets/img/banner/one/banner-thumb-1.jpg';
import banner_shape from '@/assets/img/banner/four/banner-4-shape-1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import VideoPopup from '@/modals/VideoPopup';

interface DataType {
  id: number;
  title: string;
  img: StaticImageData;
}[]
const slider_data: DataType[] = [
  {
    id: 1,
    title: "Innovative Solution For Your Buisness",
    img: slider_thumb_1,
  },
  {
    id: 2,
    title: "Your Buisness For Innovative Solution",
    img: slider_thumb_2,
  },
  {
    id: 3,
    title: "Innovative Solution For Your Buisness",
    img: slider_thumb_1,
  },
]

const HeroAreaHomeThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="banner-area tp-slider-2 p-relative fix">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop={true}  
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          pagination={{
            el: ".tp-slider-2-pagination",
            clickable: true,
          }}
          className="swiper-container tp-slider-2-active">
          {slider_data.map((item, i) =>
            <SwiperSlide key={i} className="swiper-slide">
              <div className="tp-slider-2-item">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                      <div className={`${i === 0 ? "tp-slider-2-wrap-bland" : ""}`}>
                        <div className="tp-slider-2-wrap">
                          <div className="tp-slider-2-video">
                            <a className="popup-video"
                              onClick={() => setIsVideoOpen(true)}
                              style={{ cursor: "pointer" }}
                            ><i
                              className="flaticon-play"></i></a>
                          </div>
                          <div className="tp-slider-2-contact">
                            <h4 className="tp-slider-2-title">{item.title}</h4>
                          </div>
                          <div className="tp-slider-2-btn">
                            <Link className="tp-btn-red" href="/contact">Discover More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                      <div className="tp-slider-2-thumb">
                        <Image src={item.img} alt="image-title" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        <div className="tp-slider-2-pagination"></div>

        <div className="tp-slider-2-shape-1">
          <Image src={banner_shape} alt="image-title" />
        </div>
        <div className="tp-slider-2-social d-none d-xl-block">
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
        videoId={"nPQ4BpTfK1Q"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroAreaHomeThree;