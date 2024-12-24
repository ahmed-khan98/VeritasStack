
import React from 'react';
import Image from 'next/image';
import shape_1 from "@/assets/img/feature/one/feature-shape-1.png";
import features_shape from "@/assets/img/feature/one/features-bg.png";

interface DataType {
  id: number;
  fade: string;
  icon: string;
  title: React.JSX.Element;
  sm_info: string;
}[]
const feature_data: DataType[] = [
  {
    id: 1,
    fade: "fadeInRight",
    icon: "flaticon-solution-1",
    title: <>Best Business <br /> Solution</>,
    sm_info: "We offers a full-cycle development services that meet business",
  },
  {
    id: 2,
    fade: "fadeInUp",
    icon: "flaticon-search-engine",
    title: <>Business Growth <br /> Planning</>,
    sm_info: "We offers a full-cycle development services that meet business",
  },
  {
    id: 3,
    fade: "fadeInLeft",
    icon: "flaticon-speed",
    title: <>Search Engine <br /> Optimization</>,
    sm_info: "We offers a full-cycle development services that meet business",
  },
]

const FeatureAreaHomeOne = ({style, style_onpage} : any) => {
  return (
    <> 
      <section id="services-one-page" className={`feature-area pb-90 p-relative ${style ? "pt-120 feature-inner-bg" : style_onpage? "pt-140" : "pt-140 mb-160"}`}
      style={{backgroundImage: `url(${style ? "assets/img/feature/inner/feature-inner-bg-1.jpg" : null})`}}
      >
        <div className="container">
          <div className="row">
            {feature_data.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className={`tp-feature-item mb-30 wow ${item.fade}`} data-wow-duration="1s" data-wow-delay=".4s">
                  <div className="tp-feature-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-feature-content">
                    <h4 className="tp-feature-content-title">{item.title}</h4>
                    <p>{item.sm_info}</p>
                  </div>
                  <div className="tp-feature-shape-two">
                    <Image src={shape_1} alt={item.sm_info} />
                  </div>
                </div>
              </div>
            )} 
          </div>
        </div>
        <div className="tp-feature-shape">
          <div className="tp-feature-shape-one w-img">
            <Image src={features_shape} alt="image-title" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureAreaHomeOne;