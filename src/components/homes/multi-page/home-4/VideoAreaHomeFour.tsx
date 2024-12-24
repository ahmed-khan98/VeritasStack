
import React from 'react';
import Image from 'next/image';
import benifits_thumb from '@/assets/img/thumbs/benifits-4-thumb-1.jpg';
import Link from 'next/link';

interface DataType {
  sub_title: string;
  title: string;
  sm_info: string;
  info_text_1: React.JSX.Element;
  list_1: string;
  list_2: string;
  info_text_2: string;
}
           
const video_content: DataType = {
  sub_title: "Check Our Benifits",
  title: "We're Partner of Your Innovations",
  sm_info: "System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa",
  info_text_1: <>Lorem ipsum is simply free text dolor sit <br /> am adipi we daily ipsum</>,
  list_1: "Perspiciatis omnis natus error",
  list_2: "Donec gravida imperdie",
  info_text_2: "High Quality IT Solutions for Startup",


}
const { sub_title, title, sm_info, info_text_1, list_1, list_2, info_text_2 } = video_content

const VideoAreaHomeFour = () => {
  return (
    <>
      <section className="video-area tp-benifits-4">
        <div className="tp-benifits-4-bg  p-relative" style={{ backgroundImage: `url(/assets/img/thumbs/benifits-4-bg-1.jpg)` }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="tp-benifits-4-thumb">
                <div className="tp-benifits-4-thumb-1">
                  <Image src={benifits_thumb} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="tp-video-two-wrapper p-relative pb-120 wow fadeInLeft">
                <div className="tp-section tp-section-red mb-35">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{sm_info}</p>
                  </div>
                  <div className="tp-section-title-info d-flex align-items-center mt-30">
                    <div className="tp-section-title-info-icon">
                      <i className="flaticon-project"></i>
                    </div>
                    <div className="tp-section-title-info-text">
                      <span>{info_text_1}</span>
                    </div>
                  </div>
                </div>
                <div className="tp-video-two-list mb-50">
                  <ul>
                    <li><span><i className="fa-regular fa-circle-check"></i></span>{list_1}</li>
                    <li><span><i className="fa-regular fa-circle-check"></i></span>{list_2}</li>
                  </ul>
                </div>
                <div className="tp-video-two-btn">
                  <Link className="tp-btn-red" href="/about">Discover More</Link>
                </div>
                <div className="tp-video-two-info">
                  <div className="tp-video-two-info-icon">
                    <i className="flaticon-manufacturing"></i>
                  </div>
                  <div className="tp-video-two-info-text">
                    <span>{info_text_2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoAreaHomeFour;