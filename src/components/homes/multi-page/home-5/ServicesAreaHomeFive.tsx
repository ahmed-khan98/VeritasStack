import Link from 'next/link';
import React from 'react';


interface DataType {
  sub_title: string;
  title: React.JSX.Element;
  service_data: {
      id: number;
      icon: string;
      title: string;
      sm_info: React.JSX.Element;
  }[];
}
const service_content: DataType = {
  sub_title: "What We Provide",
  title: <>We Provide our Clients <br /> Best IT Services</>,
  service_data: [
    {
      id: 1,
      icon: "flaticon-consultant",
      title: "Consultancy",
      sm_info: <>A consulting firm or consultancy <br /> is a professional service firm <br /> provides expertise</>,
    },
    {
      id: 2,
      icon: "flaticon-coding",
      title: "Development",
      sm_info: <>A consulting firm or consultancy <br /> is a professional service firm <br /> provides expertise</>,
    },
    {
      id: 3,
      icon: "flaticon-advertisig-agency",
      title: "Marketing",
      sm_info: <>A consulting firm or consultancy <br /> is a professional service firm <br /> provides expertise</>,
    },
    {
      id: 4,
      icon: "flaticon-solution",
      title: "Software",
      sm_info: <>A consulting firm or consultancy <br /> is a professional service firm <br /> provides expertise</>,
    },
  ]
}
const { sub_title, title, service_data } = service_content

const ServicesAreaHomeFive = () => {
  return (
    <>
      <section className="services-area tp-services-5-bg pt-115 pb-70" style={{ backgroundImage: `url(/assets/img/services/five/services-5-bg.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section tp-section-red-white text-center mb-50">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-6">
                <div className="tp-services-5 mb-40">
                  <div className="tp-services-5-icon mb-25">
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-services-5-content">
                    <h5 className="tp-services-5-title under-line-white mb-25">
                      <Link href="/services-details">{item.title}</Link></h5>
                    <p>{item.sm_info}</p>
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

export default ServicesAreaHomeFive;