
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import check_icon from "@/assets/img/icon/check-icon.svg";
import avatar_img from "@/assets/img/about/one/avatar-1.png";
import about_thumb_1 from "@/assets/img/about/two/about-2-thumb-1.jpg";
import about_thumb_2 from "@/assets/img/about/two/about-2-thumb-2.jpg";
import about_shape_1 from "@/assets/img/about/two/about-2-shape-3.png";
import about_shape_2 from "@/assets/img/about/two/about-2-shape-1.png";
import about_shape_3 from "@/assets/img/about/two/about-2-shape-2.png";


interface DataType {
  sub_title: string;
  title: React.JSX.Element;
  info: React.JSX.Element;
  features_data: string[];
  avatar_name: string;
  job_title: string;
}

const about_content: DataType = {
  sub_title: "Know About Our Tecz",
  title: <>We Always Try to Give <br /> Smart Solution For Business</>,
  info: <>System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis <br /> omnis natus error voupems accusa</>,
  features_data: [
    "Perspiciatis omnis natus error",
    "Aliquam ut metus at orci",
    "Donec gravida imperdiet metus",
    "Cras orci risus scelerisque id",
    "Maecenas sit amet felis ipsum",
    "Nam malesuada orci vitae",
  ],
  avatar_name: "Harry Newman",
  job_title: "Co Founder",
}
const { sub_title, title, info, features_data, avatar_name, job_title } = about_content

const AboutAreaHomeTwo = () => {
  return (
    <>
      <section className="about-area tp-about-two pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-about-two-wrap mb-60 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-about-two-thumb">
                  <Image src={about_thumb_1} alt="image-title" />
                </div>
                <div className="tp-about-two-thumb-shape tp-thumb-common fix">
                  <div className="tp-thumb-common-overlay wow"></div>
                  <Image src={about_thumb_2} alt="image-title" />
                </div>
                <div className="tp-about-two-thumb-shape-two d-none d-md-block">
                  <Image src={about_shape_1} alt="image-title" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-two-wrapper mb-60 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-section tp-section-two mb-40">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{info}</p>
                  </div>
                </div>
                <div className="tp-about-two-list">
                  <ul>
                    {features_data.map((item, i) =>
                      <li key={i}><span><Image src={check_icon} alt="image-title" /></span>{item}</li>
                    )}
                  </ul>
                </div>
                <div className="tp-about-details d-flex align-items-center flex-wrap">
                  <div className="tp-about-btn mr-30">
                    <Link className="tp-btn" href="/about">Discover More</Link>
                  </div>
                  <div className="tp-about-avatar d-flex align-items-center">
                    <div className="tp-about-avatar-thumb">
                      <Image src={avatar_img} alt="image-title" />
                    </div>
                    <div className="tp-about-avatar-info">
                      <h5 className="tp-about-avatar-title">{avatar_name}</h5>
                      <span>{job_title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-about-two-shape">
          <div className="tp-about-two-shape-3 d-none d-xl-block">
            <Image src={about_shape_2}  alt="image-title" />
          </div>
          <div className="tp-about-two-shape-4">
            <Image src={about_shape_3}  alt="image-title" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeTwo;