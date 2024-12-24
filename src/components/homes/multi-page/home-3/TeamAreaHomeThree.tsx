'use client'
import { TeamSocialLinks } from '@/components/common/SocialLinks';
import team_data from '@/data/TeamData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 3,
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
  },
}


type DataType = {
  sub_title: string;
  title: React.JSX.Element;
}

const team_content: DataType = {
  sub_title: "Meet With Our Specialist",
  title: <>Team that Builds Ideas Driven <br /> by the Future</>,
}
const {sub_title, title} = team_content

const TeamAreaHomeThree = ({onPageStyle}: any) => {
  const team_members = team_data.filter(menubars => menubars.page === "home_3")
  return (
    <>
      <section className={`team-area fix pt-115 pb-60 ${onPageStyle? "" : "tp-team-3-border mb-115"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-3-wrapper">
                <div className="tp-section tp-section-3 mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-3-wrap">
                <Swiper {...setting} className="swiper-container tp-team-3-active">
                  {team_members.map((item, i) =>
                    <SwiperSlide key={i} className="tp-team-3-item mb-40">
                      <div className="tp-team-3-thumb">
                        <div className="tp-team-3-thumb-wrap tp-thumb-common fix">
                          <div className="tp-thumb-common-overlay wow"></div>
                          <Image src={item.img} style={{width: '100%', height: "auto"}} alt="image-title" />
                        </div>
                        <div className="tp-team-3-thumb-social">
                          <TeamSocialLinks />
                        </div>
                      </div>
                      <div className="tp-team-3-content">
                        <h5 className="tp-team-3-title">
                          <Link href="/team-details">{item.name}</Link></h5>
                        <span>{item.job_title}</span>
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

export default TeamAreaHomeThree;