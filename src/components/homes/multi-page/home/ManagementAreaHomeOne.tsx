import React from 'react';
import Image from 'next/image';

import management_thumb_1 from "@/assets/img/thumbs/management-thumb-1.jpg";
import management_shape1 from "@/assets/img/shape/management-shape-1.png";

interface DataType {
  sub_title: string;
  title: string;
  info: string;
  management_data: {
      id: number;
      icon: string;
      title: string;
      info: string;
  }[];
}
const management_content: DataType = {
  sub_title: "Tech Management",
  title: "Let's Build Your Success With Tecz Solution",
  info: "Lorem ipsum is simply free text dolor sit am adipi we help you ensure everyone.",
  management_data: [
    {
      id: 1,
      icon: "flaticon-data-protection",
      title: "Data Protection",
      info: "We've designed a culture that allows our <br /> stewards to assimilate",
    },
    {
      id: 1,
      icon: "flaticon-optimization",
      title: "Optimize IT System ",
      info: "We've designed a culture that allows our <br /> stewards to assimilate",
    },
  ]
}
const { sub_title, title, info, management_data } = management_content

const ManagementAreaHomeOne = () => {
  return (
    <>
      <section className="management-area tp-management-position pb-60">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-management-thumb-wrap p-relative">
                <div className="tp-management-thumb overlay-anim tp-thumb-common fix w-img mb-60 wow fadeInUp"
                  data-wow-duration="1s" data-wow-delay=".4s">
                  <div className="tp-thumb-common-overlay wow"></div>
                  <Image src={management_thumb_1} style={{ width: "100%", height: 'auto' }} alt="image-title" />
                </div>
                <div className="tp-management-shape-1">
                  <Image src={management_shape1} alt="image-title" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="tp-management-wrap pb-60 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-section mb-40">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <span>{info}</span>
                  </div>
                </div>
                <div className="tp-management-list">
                  {management_data.map((item, i) =>
                    <div key={i} className="tp-management-item d-flex">
                      <div className="tp-management-item-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tp-management-item-content">
                        <h5 className="tp-management-item-title">{item.title}</h5>
                        <p>{item.info}</p>
                      </div>
                    </div>
                  )} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManagementAreaHomeOne;