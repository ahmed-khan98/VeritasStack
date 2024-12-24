
import React from 'react';
import Image from 'next/image';
import check_icon from "@/assets/img/icon/check-icon-2.svg";
import solution_shape from "@/assets/img/shape/solution-shape-1.png";


interface DataType {
  sub_title: string;
  title: string;
  info: string;
  solution_info: {
      id: number;
      icon: string;
      text: React.JSX.Element;
  }[];
  solution_list: string[];
}

const solution_content: DataType = {
  sub_title: "Technology Solution",
  title: "For Your Specific Industry We Have Smart Idea",
  info: "Sed et aliquam lectus. Etiam id augue lectus. Suspendisse eget orci convallis, dignissim nibh eget, blandit lacus. Cras suscipit negestas consequat, augue leo porttitor est placerat dui eros non",
  solution_info: [
    {
      id: 1,
      icon: "flaticon-technical-support",
      text: <>Moneyback <br /> Gurrantee</>,
    },
    {
      id: 2,
      icon: "flaticon-optimization",
      text: <>Technical <br /> Support</>,
    },
  ],
  solution_list: [
    "Sed do eiusmod tempor incidi-dunt ut labore",
    "Donec laoreet leo a ullamcorper ornar",
  ]


}
const { sub_title, title, info, solution_info, solution_list } = solution_content

const SolutionAreaHomeThree = () => {
  return (
    <>
      <section className="solution-area tp-solution-wrapper">
        <div className="container">
          <div className="row align-items-end">
            <div className="offset-lg-6 col-lg-6">
              <div className="tp-solution-wrap ml-40 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-section tp-section-3 mb-50">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{info}</p>
                  </div>
                </div>
                <div className="tp-solution-info mb-50">
                  <ul>
                    {solution_info.map((item, i) =>
                      <li key={i}>
                        <div className="tp-solution-info-item d-flex align-items-center">
                          <div className="tp-solution-info-icon">
                            <i className={item.icon}></i>
                          </div>
                          <div className="tp-solution-info-content">
                            <h4 className="tp-solution-info-title">{item.text}</h4>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="tp-solution-list">
                  <ul>
                    {solution_list.map((list, index) => <li key={index}> <span> <Image src={check_icon} alt="image-title" /></span>{list}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-solution-bg" style={{ backgroundImage: `url(/assets/img/bg/solution-bg-1.jpg)` }}> </div>
        <div className="tp-solution-shape-1">
          <Image src={solution_shape} alt="image-title" />
        </div>
      </section>
    </>
  );
};

export default SolutionAreaHomeThree;