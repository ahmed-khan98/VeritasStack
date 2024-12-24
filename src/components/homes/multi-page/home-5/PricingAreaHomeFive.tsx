
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import line_shape from "@/assets/img/shape/line-5-shape-2.png";
import pricing_img_1 from "@/assets/img/pricing/pricing-thumb-1.jpg";
import pricing_img_2 from "@/assets/img/pricing/pricing-thumb-2.jpg";
import pricing_img_3 from "@/assets/img/pricing/pricing-thumb-3.jpg";

interface DataType {
  id: number;
  img: StaticImageData;
  icon: string;
  title: string;
  price: number;
  pricing_list: {
      title: string;
      status: string;
  }[];
}[]
const priceing_data: DataType[] = [
  {
    id: 1,
    img: pricing_img_1,
    icon: 'flaticon-airplane',
    title: "Basic Plan",
    price: 49,
    pricing_list: [
      { title: "24/7 System monitoring", status: "" },
      { title: "Security managment", status: "tp-price-inactive" },
      { title: "Unlimited Download", status: "tp-price-inactive" },
      { title: "Remote support", status: "" },
    ],
  },
  {
    id: 2,
    img: pricing_img_2,
    icon: 'flaticon-rocket',
    title: "Standard Plan",
    price: 59,
    pricing_list: [
      { title: "24/7 System monitoring", status: "" },
      { title: "Security managment", status: "tp-price-inactive" },
      { title: "Unlimited Download", status: "" },
      { title: "Remote support", status: "tp-price-inactive" },
    ],
  },
  {
    id: 3,
    img: pricing_img_3,
    icon: 'flaticon-speed',
    title: "Premium plan",
    price: 89,
    pricing_list: [
      { title: "24/7 System monitoring", status: "" },
      { title: "Security managment", status: "" },
      { title: "Unlimited Download", status: "" },
      { title: "Remote support", status: "" },
    ],
  },
]

type PriceType = {
  sub_title: string;
  title: React.JSX.Element;
}
const price_content: PriceType = {
  sub_title: "Our pricing plans",
  title: <>Choose Your Optimal <br /> Pricing Plans</>,
}
const {sub_title, title} = price_content

const PricingAreaHomeFive = ({style, onPageStyle} : any) => {
  return (
    <> 
      <section id="price-one-page" className={`pricing-area tp-price-wrap ${onPageStyle? "pt-65" : ""} ${style ? "tp-price-blue pt-115 pb-95" : "pb-80"} `}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12"> 
              <div className={`tp-section ${style? "tp-section-two" : "tp-section-red"} mb-65 text-center`}>
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {priceing_data.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className={`tp-price ${i === 1 ? 'active' : ''} mb-40 wow fadeInUp`} data-wow-duration="1s" data-wow-delay=".6s">
                  <div className="tp-price-thumb">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="tp-price-icon mb-20">
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-price-badge mb-20">
                    <span>{item.title}</span>
                  </div>
                  <div className="tp-price-heading mb-40">
                    <div className="tp-price-content">
                      <h4 className="tp-price-value">${item.price}<span>/monthly</span></h4>
                    </div>
                  </div>
                  <div className="tp-price-features mb-45">
                    <ul>
                      {item.pricing_list.map((list, index) => <li className={list.status} key={index}>{list.title}</li>)}
                    </ul>
                  </div>
                  <div className="tp-price-btn">
                    <Link href="/contact">Start Free Trial</Link>
                  </div>
                </div>
              </div>

            )}
          </div>
        </div>
        <div className="tp-price-shape-1">
          <Image src={line_shape} alt="theme-pure" />
        </div>
      </section>
    </>
  );
};

export default PricingAreaHomeFive;