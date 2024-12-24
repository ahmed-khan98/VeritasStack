'use client'
import blog_data from '@/data/BlogData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BlogCarouselArea = () => {
  const blogs = blog_data.filter(items => items.page === "blog")
  return (
    <>
      <section className="blog-area tp-blog-inner pt-120 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper  
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                modules={[Pagination]}
                autoplay={{
                  delay: 4000,
                }}
                pagination={{
                  el: ".tp-blog-carousel-dot",
                  clickable: true,
                }}
                breakpoints={{
                  '1200': {
                    slidesPerView: 3,
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
                }}
                
                className="swiper-container tp-blog-carousel-active">
                {blogs.slice(5).map((item, i) =>
                  <SwiperSlide key={i} className="tp-blog-two mb-50">
                    <div className="tp-blog-two-item">
                      <div className="tp-blog-two-thumb overlay-anim tp-thumb-common fix">
                        <div className="tp-thumb-common-overlay wow"></div>
                        <Link href={`/blog-details/${item.id}`}>
                          <Image src={item.img} alt="image" />
                          <div className="tp-blog-two-thumb-plus">
                            <i className="fa-regular fa-plus"></i>
                          </div>
                        </Link>
                      </div>
                      <div className="tp-blog-two-content">
                        <span>{item.time} _ {item.category}</span>
                        <h4 className="tp-blog-two-title">
                        <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                        </h4>
                        <div className="tp-blog-two-btn">
                        <Link href={`/blog-details/${item.id}`}>Read More</Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )} 

                <div className="tp-blog-carousel-dot"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCarouselArea;