"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import service_shape from "@/assets/img/services/two/services-2-shape-1.png";
import service_img_2 from "@/assets/img/services/one/services-avater-2.png";


interface DataType {
  sub_title: string;
  title: string;
  info: string;
  slider_data: {
      id: number;
      icon: string;
      title: React.JSX.Element;
  }[];
}
const services_content: DataType = {
  sub_title: "Service We Are Offering",
  title: "We Provide Our Clients Best IT Service",
  info: "System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa ",
  slider_data: [
    {
      id: 1,
      icon: "flaticon-data-visualization",
      title: <>Ui/Ux <br /> Designing</>,
    },
    {
      id: 2,
      icon: "flaticon-ux-design",
      title: <>Website <br /> Development</>,
    },
    {
      id: 3,
      icon: "flaticon-advertisig-agency",
      title: <>Application Design & <br />Development</>,
    },
    
    
    // swiper update 
    // {
    //   id: 5,
    //   icon: "flaticon-data-visualization",
    //   title: <>Machine <br />Learning</>,
    // },
    // {
    //   id: 6,
    //   icon: "flaticon-ux-design",
    //   title: <>Devops</>,
    // },
    // {
    //   id: 7,
    //   icon: "flaticon-search-engine",
    //   title: <>Database<br />Development</>,
    // },
    {
      id: 5,
      icon: "flaticon-search-engine",
      title: <>Business and <br />Finance</>,
    }
  
  ]
}
const { sub_title, title, info, slider_data } = services_content

const setting = {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: false,
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
      autoplay: {
        delay: 3500,
      },
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

const ServicesAreaHomeTwo = ({onPageStyle} : any) => {
  return (
    <> 
      <section id="services-one-page" className={`services-area tp-services-two pb-120 ${onPageStyle? "pt-60" : ""}`}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-section tp-section-two mb-50 wow fadeInRight" data-wow-duration="1s"
                data-wow-delay=".4s">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
            <div className="offset-xl-2 col-xl-5 col-lg-6">
              <div className="tp-section mb-40 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-section-title-wrapper">
                  {/* <p>{info}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper {...setting} loop={true}  className="swiper-container tp-services-two-active">
          {slider_data.map((item, i) =>
            <SwiperSlide  key={i}>
              <div className="tp-services-two-bg tp-thumb-common fix" style={{backgroundImage: `url(/assets/img/services/two/services-thumb-1.jpg)`}}>
                <div className="tp-thumb-common-overlay wow"></div>
                <div className="tp-services-two-item">
                  <div className="tp-services-two-count">
                    <span>0{item.id}</span>
                  </div>
                  <div className="tp-services-two-content">
                    <div className="tp-services-two-item-icon">
                      <i className={item.icon}></i>
                    </div>
                    <h4 className="tp-services-two-title">
                      <Link href="#">{item.title}</Link>
                    </h4>
                  </div>
                  <div className="tp-services-two-btn">
                    <Link href="#">Read More</Link>
                  </div>
                  <div className="tp-services-two-shape">
                    <Image src={service_shape} alt="image-title" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )} 
        </Swiper>
      </section>
    </>
  );
};

export default ServicesAreaHomeTwo;