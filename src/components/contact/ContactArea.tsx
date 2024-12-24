
import React from 'react';
import Image from 'next/image';
import ContactForm from '../forms/ContactForm';
import main_bg from "@/assets/img/thumbs/contact-main-bg-1.jpg";

const contact_content = {
  sub_title: "Contact Us",
  title: "Grow Your Business With Our Expertise",
  info: "We understand the importance of approaching each work integrally and believe in the power of simple.",
  location_data: [
    {
      id: 1,
      location_title: "United Kingdom",
      // address: "122 Harold Rd, London E13 0SF, United Kingdom",
      phone: "UK +44 7706 980268", 
      email: "info@veritasstack.com",
    },
    // {
    //   id: 2,
    //   location_title: "Australia",
    //   address: "Sydne 45 Broklyn",
    //   phone: "+1-365-857-0467",
    //   email: "info@tecz.com",
    // },
  ]
}
const { sub_title, title, info, location_data } = contact_content

const ContactArea = ({style} : any) => {
  return (
    <>
      <section id="contact-one-page" className={`contact-area pt-115 ${style? "pb-25": "pb-80"}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-contact-main mb-40">
                <div className="tp-section tp-section-two mb-25">
                  <span className="tp-section-sub-title"><i className="flaticon-edit"></i>{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{info}</p>
                  </div>
                </div>
                <div className="tp-contact-main-thumb mb-40 w-img">
                  <Image src={main_bg} alt="image-title" />
                </div>
                <div className="tp-contact-location-wrap d-flex align-items-center">
                  {location_data.map((item, i) =>
                    <div key={i} className={`tp-contact-location ${i === 1 ? "ml-40" : ""}`}>
                      <span className="tp-contact-location-title">{item.location_title}</span>
                      {/* <a href="#"><i className="fa-light fa-location-dot"></i>{item.address}</a> */}
                      <a href="tel:0123456"><i className="fa-light fa-phone"></i>{item.phone}</a>
                      <a href="mailto:hello@teczinfo.com"><i className="fa-light fa-envelope"></i>{item.email}</a>
                    </div>
                  )} 
                </div>
              </div>
            </div>
            <div className="offset-xl-1 col-xl-6 col-lg-6">
              <div className="tp-contact-details-form mb-40">
                <ContactForm /> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;