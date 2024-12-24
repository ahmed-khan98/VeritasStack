
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import step_img_1 from "@/assets/img/thumbs/step/step-thumb-1.png";
import step_img_2 from "@/assets/img/thumbs/step/step-thumb-2.png";
import step_img_3 from "@/assets/img/thumbs/step/step-thumb-3.png";
import step_img_4 from "@/assets/img/thumbs/step/step-thumb-4.png";
import step_line_shape from "@/assets/img/thumbs/step/step-line-shape-1.svg";

interface DataType {
  id: number;
  img: StaticImageData;
  cls: string;
  title: string;
  info: React.JSX.Element;
  duration: string;
  delay: string;
}[]

const step_data: DataType[] = [
  {
    id: 1,
    img: step_img_1,
    cls: "text-center mb-30 wow bounceIn",
    title: "Research",
    info: <>Occact dolorbib umbrel <br /> magna conse</>,
    duration: ".6s",
    delay: ".6s",
  },
  {
    id: 2,
    img: step_img_2,
    cls: "tp-step-item-even text-center mb-30 wow bounceIn",
    title: "Design",
    info: <>Occact dolorbib umbrel <br /> magna conse</>,
    duration: ".5s",
    delay: ".5s",
  },
  {
    id: 3,
    img: step_img_3,
    cls: "text-center mb-30 wow bounceIn",
    title: "Development",
    info: <>Occact dolorbib umbrel <br /> magna conse</>,
    duration: ".4s",
    delay: ".4s",
  },
  {
    id: 4,
    img: step_img_4,
    cls: "tp-step-item-even text-center mb-30 wow bounceIn",
    title: "Production",
    info: <>Occact dolorbib umbrel <br /> magna conse</>,
    duration: ".5s",
    delay: ".5s",
  },
]
const StepAreaHomeTwo = () => {
  return (
    <>
      <section className="step-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-step-wrapper d-flex justify-content-between">
                {step_data.map((item, i) =>
                  <div key={i} className={`tp-step-item ${item.cls}`} data-wow-duration={item.duration}
                    data-wow-delay={item.delay}>
                    <div className="tp-step-item-count">
                      <span>{item.id}</span>
                    </div>
                    <div className="tp-step-item-overlay p-relative mb-30">
                      <div className="tp-step-item-thumb">
                        <Image src={item.img} alt="image-title" />
                      </div>
                      <div className="tp-step-item-thumb-icon">
                        <i className="flaticon-design"></i>
                      </div>
                    </div>
                    <div className="tp-step-item-content">
                      <h4 className="tp-step-item-title">{item.title}</h4>
                      <p>{item.info}</p>
                    </div>
                  </div>
                )}
                <div className="tp-step-line-shape d-none d-xxl-block">
                  <Image src={step_line_shape} style={{ marginLeft: "130px" }} alt="image-title" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StepAreaHomeTwo;