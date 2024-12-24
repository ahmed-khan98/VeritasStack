/* eslint-disable @next/next/no-img-element */
// Import necessary libraries and components
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import GETDATA from '@/queries/getPosts';
import loader from '@/assets/img/Loader/Hnhloaderbkue.gif'



// Import Swiper styles (if not already imported)
import 'swiper/css';

// Project content details
const project_content = {
  sub_title: 'Our Case Studies ~',
  title: <>Technology Is Transforming Every Industry Sector</>,
};
const { sub_title, title } = project_content;

// Swiper settings
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
};

const ProjectAreaHomeThree: React.FC = () => {
  const baseUrl = 'https://api.hnhtechsolutions.com'
  const { data, error, loading } = useQuery(GETDATA);

  // Handle loading and error states
  if (loading) return <Image src={loader} alt='Loader HNHTechSolutions' style={{ marginLeft: "35%", marginTop: "100px", marginBottom: "100px" }} />
  if (error) return <p>Error: {error.message}</p>;

  const data1 = data?.projects;

  return (
    <>
      <section id="project-one-page" className="project-area tp-project-3-bg pt-115 pb-90" style={{ backgroundImage: `url(/assets/img/project/three/project-3-bg-1.jpg)` }}>
        <div className="container tp-project-3-width">
          <div className="row">
            <div className="col-12">
              <div className="tp-section tp-section-3 mb-50 text-center">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <Swiper {...setting} className="swiper-container tp-project-3-slider-active" style={{ height: "auto" }}>
            {Array.isArray(data1) &&
              data1.map((item, i) => (
                <SwiperSlide key={i} className="tp-project-3-item mb-30 tp-thumb-common fix wow fadeInRight" data-wow-duration="1.2s" data-wow-delay=".6s">
                  <div className="tp-project-3-thumb">
                    <div className="tp-thumb-common-overlay wow"></div>s

                    <img src={baseUrl + item?.images} height={1000} width={1000} style={{ width: '100%', height: '450px', objectFit: "contain" }} alt="image-title" />

                  </div>
                  <div className="tp-project-3-info d-flex justify-content-between align-items-center">
                    <div className="tp-project-3-content">
                      <span>{item?.categories[0].name}</span>
                      <h4 className="tp-project-3-title under-line-white"> <Link href={`/project-details/${item.id}`}>{item?.title}</Link></h4>
                    </div>
                    <div className="tp-project-3-icon">
                      <Link href={`/project-details/${item.id}`}>
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProjectAreaHomeThree;
