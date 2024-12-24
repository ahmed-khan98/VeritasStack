"use client"
import blog_data from '@/data/BlogData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".tp-blog-main-slider-dot",
    clickable: true,
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

type DataType = {
  sub_title: string;
  title: string;
  info: string;
}

const blog_content: DataType = {
  sub_title: "Waht's New",
  title: "Blog & Article",
  info: "System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa ",
}
const {sub_title, title, info}  = blog_content

const BlogAreaHomeTwo = () => {
  const blogs = blog_data.filter(items => items.page === "home_2")
  return (
    <>  
      <section id="blog-one-page" className="blog-area tp-blog-two-bg fix">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="tp-section tp-section-two mb-35">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-5">
              <div className="tp-section mb-40">
                <div className="tp-section-title-wrapper">
                  <p>{info}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-blog-two-wrapper">
                <Swiper {...setting} loop={true} className="swiper-container tp-blog-two-active">
                  {blogs.map((item, i) =>
                    <SwiperSlide key={i} className="tp-blog-two mb-40">
                      <div className="tp-blog-two-item">
                        <div className="tp-blog-two-thumb overlay-anim tp-thumb-common fix">
                          <div className="tp-thumb-common-overlay wow"></div>
                          <Link href="/blog-details">
                            <Image src={item.img} alt="image-title" /></Link>
                        </div>
                        <div className="tp-blog-two-content">
                          <span>{item.time} _ {item.category}</span>
                          <h4 className="tp-blog-two-title">
                            <Link href="/blog-details">{item.title}</Link>
                          </h4>
                          <div className="tp-blog-two-btn">
                            <Link href="/blog-details">Read More</Link>
                          </div>
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

export default BlogAreaHomeTwo;