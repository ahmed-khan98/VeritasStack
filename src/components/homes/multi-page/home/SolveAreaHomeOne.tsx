
import React from 'react';
import Image from 'next/image';
import solve_shape from "@/assets/img/shape/solve-shape-1.png";
import Link from 'next/link';


const solve_content = {
  sub_title: "What We Solve",
  title: "Help You Overcome Your Technology Challeges",
  solve_data: [
    {
      id: 1,
      icon: "flaticon-globe",
      title: "Website",
      duration: ".6s",
    },
    {
      id: 1,
      icon: "flaticon-android",
      title: "Android",
      duration: ".5s",
    },
    {
      id: 1,
      icon: "flaticon-apple",
      title: "ISO",
      duration: ".4s",
    },
    {
      id: 1,
      icon: "flaticon-internet-of-things",
      title: "ITO",
      duration: ".4s",
    },
    {
      id: 1,
      icon: "flaticon-smartwatch",
      title: "Wearalable",
      duration: ".6s",
    },
    {
      id: 1,
      icon: "flaticon-tv",
      title: "TV",
      duration: ".6s",
    },
  ]
}
const { sub_title, title, solve_data } = solve_content

const SolveAreaHomeOne = () => {
  return (
    <>
      <section className="solve-area tp-solve-overlay pt-115 pb-60">
        <div className="tp-solve-bg" style={{ backgroundImage: `url(/assets/img/bg/solve-bg-1.jpg)` }}></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="tp-section tp-section-white text-center mb-100">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {solve_data.map((item, i) =>
              <div key={i} className="col-lg-2 col-md-4 col-sm-6">
                <Link href="/services-details" className="tp-solve-item mb-60 wow bounceIn" data-wow-duration={item.duration}
                  data-wow-delay=".6s">
                  <div className="tp-solve-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-solve-content">
                    <h5 className="tp-solve-title">{item.title}</h5>
                  </div>
                  <div className="tp-solve-shape">
                    <Image src={solve_shape} alt="image-title" />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolveAreaHomeOne;