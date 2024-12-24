
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import brand_thumb from "@/assets/img/brand/five/brand-5-thumb-1.jpg";

import brand_img_1 from "@/assets/img/brand/five/brand-5-logo-2.png";
import brand_img_2 from "@/assets/img/brand/five/brand-5-logo-1.png";
import brand_img_3 from "@/assets/img/brand/five/brand-5-logo-3.png";
import brand_img_4 from "@/assets/img/brand/five/brand-5-logo-4.png";

interface DataType{
  img: StaticImageData;
  delay: string;
  fede: string;
}

const brand_images: DataType[] = [
  {img: brand_img_1, delay: ".7s", fede: "fadeInRight"}, 
  {img: brand_img_2, delay: ".4s", fede: "fadeInRight"}, 
  {img: brand_img_3, delay: ".4s", fede: "fadeInLeft"}, 
  {img: brand_img_4, delay: ".7s", fede: "fadeInLeft"},
]

const BrandAreaHomeFive = () => {
  return (
    <>
      <section className="brand-area mb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-brand-5-wrap text-center mb-95">
                <h5 className="tp-brand-5-wrap-title">Who Trust Us</h5>
              </div>
            </div>
          </div>
          <div className="row gx-0">
            {brand_images.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <div className={`tp-brand-5-item mb-40 wow ${item.fede}`} data-wow-duration="1s" data-wow-delay={item.delay}>
                  <div className="tp-brand-5-thumb">
                    <Image src={brand_thumb} alt="theme-pure" />
                  </div>
                  <div className="tp-brand-5-item-logo text-center">
                    <Image src={item.img} alt="theme-pure" />
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

export default BrandAreaHomeFive;