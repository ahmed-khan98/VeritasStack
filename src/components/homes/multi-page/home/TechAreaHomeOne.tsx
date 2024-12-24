'use client'
import Link from 'next/link';
import React, {useState} from 'react';
import RightSymbleIcon from '@/svg/HomeOneIcons/RightSymbleIcon';
import  shape_1 from "@/assets/img/shape/video-1-shape-1.png"
import  shape_2 from "@/assets/img/shape/video-1-shape-2.png"
import Image from 'next/image';
import VideoPopup from '@/modals/VideoPopup';


type DataType = {
  sub_title: string;
  title: string;
  info: React.JSX.Element;
  tech_data: {
      id: number;
      title: string;
      info: React.JSX.Element;
  }[];
}

const tech_content: DataType = {
  sub_title: "What Else Here",
  title: "The Best Tech Solutions for Our Clients",
  info: <>Tecz is a provider of IT consulting and software development services. We have helped organizations and companies <br /> improve business performance</>,
  tech_data: [
    {
      id: 1,
      title: "Deliver Perfect Solution",
      info: <>Donec suscipit ante ipsum. Donec convallis <br /> quam at tortor hendrerit ut</>,
    },
    {
      id: 2,
      title: "Work With Global Brands",
      info: <>Donec suscipit ante ipsum. Donec convallis <br /> quam at tortor hendrerit ut</>,
    },
  ]
}
const { sub_title, title, info, tech_data } = tech_content

const TechAreaHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="tech-area pt-115 pb-60 mb-120 p-relative tp-tech-bg" style={{ backgroundImage: `url(/assets/img/bg/tech-bg-1.jpg)` }}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="tp-tech-wrap pb-60 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-section mb-40">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{info}</p>
                  </div>
                </div>
                <div className="tp-tech-list mb-35">
                  {tech_data.map((item, i) =>
                    <div key={i} className={`tp-tech-item d-flex ${i === 0 ? "mb-10" : ""}`}>
                      <div className="tp-tech-item-icon">
                        <span> <RightSymbleIcon /> </span>
                      </div>
                      <div className="tp-tech-item-content">
                        <h5 className="tp-tech-title">{item.title}</h5>
                        <p>{item.info}</p>
                      </div>
                    </div>
                  )} 
                </div>
                <div className="tp-tech-btn">
                  <Link className="tp-btn" href="/about">Discover More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">

              <div className="tp-video-1">
                <div className="tp-video-1-shape-1">
                  <Image src={shape_1} alt="image-title" />
                </div>
                <div className="tp-video-1-shape-2">
                  <Image src={shape_2} alt="image-title" />
                </div>
                <div className="tp-video-1-play">
                  <a className="popup-video"  
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                  ><i className="flaticon-play"></i></a>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div className="tp-tech-thumb overlay-anim wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s"
          style={{ backgroundImage: `url(/assets/img/thumbs/tech-thumb.jpg)` }}></div>
      </section>
       {/* video modal start */}
       <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"tUP5S4YdEJo"}
      />
      {/* video modal end */}

    </>
  );
};

export default TechAreaHomeOne;