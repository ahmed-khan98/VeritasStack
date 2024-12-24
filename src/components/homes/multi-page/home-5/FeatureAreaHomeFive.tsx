
import React from 'react';
import line_shape from "@/assets/img/shape/line-5-shape-1.png";
import Image from 'next/image';
import Link from 'next/link';

interface DataType{
  id: number;
  icon: string;
  title: string;
  info: string;
}[]

const feature_data: DataType[] = [
  {
    id: 1,
    icon: "flaticon-data-protection",
    title: "Internet & Cyber Securit Solution",
    info: "We're a team of creatives who are excited about unique ideas",
  },
  {
    id: 2,
    icon: "flaticon-project-management",
    title: "Custom IT <br /> & Cyber Solution",
    info: "We're a team of creatives who are excited about unique ideas",
  },
  {
    id: 3,
    icon: "flaticon-technical-support",
    title: "Expert IT Counsultant",
    info: "We're a team of creatives who are excited about unique ideas",
  },
]
const FeatureAreaHomeFive = () => {
  return (
    <>
      <section className="feature-area tp-feature-5-wrap pt-120 pb-80">
        <div className="container">
          <div className="row">
            {feature_data.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-feature-5 mb-40">
                  <div className="tp-feature-5-item">
                    <div className="tp-feature-5-front d-flex align-items-center">
                      <div className="tp-feature-5-front-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tp-feature-5-front-content">
                        <h5 className="tp-feature-5-front-title" dangerouslySetInnerHTML={{__html: item.title}}></h5>
                      </div>
                    </div>
                    <div className="tp-feature-5-back">
                      <div className="tp-feature-5-back-bg" style={{ backgroundImage: `url(/assets/img/feature/five/feature-5-thumb-1.jpg)` }}>
                        <div className="tp-feature-5-back-content text-center">
                          <p>{item.info}</p>
                          <Link href="/services-details">Find Your Solution</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} 
          </div>
        </div>
        <div className="tp-feature-5-shape-1">
          <Image src={line_shape} alt="theme-pure" />
        </div>
      </section>
    </>
  );
};

export default FeatureAreaHomeFive;