'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import service_data from '@/data/ServiceData';
import provide_shape from "@/assets/img/services/four/provide-shape-1.png"



const BestServicesAreaHomeFour = ({onPageStyle} : any) => {
  const service = service_data.filter((items) => items.page === "home_4")
  return (
    <> 
      <section id="services-one-page" className={`provide-area tp-provide-bg ${onPageStyle? "" : "pb-60"}`}>
        <div className="container tp-provide-width">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section tp-section-red text-center mb-50">
                <span className="tp-section-sub-title">Whate We Povide</span>
                <h4 className="tp-section-title">Check Our Best Service</h4>
              </div>
            </div>
          </div>
          <div className="row gx-0">
            {service.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-6">
                <div className="tp-provide-wrap mb-60 tp-thumb-common fix">
                  <div className="tp-thumb-common-overlay-red wow"></div>
                  <div className="tp-provide-item-bg" style={{backgroundImage: `url(/assets/img/services/four/services-provide-thumb-1.jpg)`}}></div>
                  <div className="tp-provide-shape-1">
                    <Image src={provide_shape} alt="image-title" />
                  </div>
                  <div className="tp-provide-item">
                    <div className="tp-provide-item-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tp-provide-item-content">
                      <h4 className="tp-provide-item-title under-line-white" >
                        <Link href="/services-details"><span dangerouslySetInnerHTML={{ __html: item.title }}></span> </Link> 
                      </h4>
                      <p>{item.sm_info}</p>
                    </div>
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

export default BestServicesAreaHomeFour;