
import React from 'react';
import services_shape from "@/assets/img/shape/services-4-shape-1.png";
import Image from 'next/image';
import Link from 'next/link';

type DataType = {
  title: React.JSX.Element;
  service_title: React.JSX.Element;
}

const service_content: DataType = {
  title: <>High Quality IT Solutions <br /> for Startup</>,
  service_title: <>We believe that success is achieved through a highly collaborative interaction, so that we can work. Keep in touch with Tecz for <span>brands, services and high  solution</span></>,
}
const { title, service_title } = service_content

const ServicesAreaHomeFour = () => {
  return (
    <>
      <section className="services-area tp-services-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-5">
              <div className="tp-services-4-info wow fadeInLeft" data-wow-duration=".6s" data-wow-delay=".6s">
                <div className="tp-services-4-info-wrap d-flex align-items-center">
                  <div className="tp-services-4-info-icon">
                    <i className="flaticon-manufacturing"></i>
                  </div>
                  <div className="tp-services-4-info-content">
                    <h4 className="tp-services-4-info-title">{title}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="tp-services-4-wrapper wow fadeInRight" data-wow-duration=".6s" data-wow-delay=".6s">
                <h4 className="tp-services-4-title">{service_title}</h4>
                <div className="tp-services-4-details">
                  <Link href="/services">Our Services <span><i className="fa-regular fa-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-services-4-shape-1">
          <Image src={services_shape} alt="" />
        </div>
      </section>
    </>
  );
};

export default ServicesAreaHomeFour;