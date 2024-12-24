'use client'
import React from 'react';
import Image from 'next/image';
import service_data from '@/data/ServiceData';
import shape_1 from '@/assets/img/services/one/shape/shape-01.png';


const ServicesAreaHomeOne = () => {
  const services = service_data.filter((items) => items.page === 'home_1')
  return (
    <>
      <section className="services-area tp-services-plr pb-90">
        <div className="container-fluid tp-services-width">
          <div className="row">
            {services.map((item, i) =>
              <div key={i} className="col-xl-4 col-lg-6">
                <div className="tp-services-item d-flex mb-30 wow fadeInRight" data-wow-duration="1s"
                  data-wow-delay=".4s">
                  <div className="tp-services-item-head">
                    <span>{item.alphabet}</span>
                  </div>
                  <div className="tp-services-item-thumb">
                    <Image src={item.img} alt="image-title" />
                  </div>
                  <div className="tp-services-item-content">
                    <h4 className="tp-services-item-title" dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                    <p>{item.sm_info}</p>
                  </div>
                  <div className="tp-services-item-shape">
                    <Image src={shape_1} alt="image-title" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAreaHomeOne;