import React from 'react';
import Image, { StaticImageData } from 'next/image';

import brand_img_1 from "@/assets/img/brand/one/brand-logo-1.png";
import brand_img_2 from "@/assets/img/brand/one/brand-logo-2.png";
import brand_img_3 from "@/assets/img/brand/one/brand-logo-3.png";
import brand_img_4 from "@/assets/img/brand/one/brand-logo-4.png";
import brand_img_5 from "@/assets/img/brand/one/brand-logo-5.png";
import brand_img_6 from "@/assets/img/brand/one/brand-logo-6.png";
import brand_img_7 from "@/assets/img/brand/one/brand-logo-7.png";


type DataType = {
  sm_info: React.JSX.Element;
  brand_data: StaticImageData[];
}

const brand_content: DataType = {
  sm_info: <>1K+ Software <br /> Business Company <br /> Growing with <br /> Our <span>Tecz</span> Solution</>,
  brand_data: [
    brand_img_1,
    brand_img_2,
    brand_img_3,
    brand_img_4,
    brand_img_5,
    brand_img_6,
    brand_img_7,
  ]

}
const { sm_info, brand_data } = brand_content
const BrandAreaHomeArea = () => {
  return (
    <>
      <section className="brand-area pb-120">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-3 col-md-6">
              <div className="tp-brand-wrapper mb-40">
                <h4 className="tp-brand-title">{sm_info}</h4>
              </div>
            </div>
            {brand_data.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-6">
                <div className="tp-brand-item">
                  <Image src={item} alt="image-title" />
                </div>
              </div>
            )} 
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandAreaHomeArea;