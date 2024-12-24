
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import brand_img_1 from "@/assets/img/brand/one/brand-logo-1.png";
import brand_img_2 from "@/assets/img/brand/one/brand-logo-5.png";
import brand_img_3 from "@/assets/img/brand/one/brand-logo-6.png";
import brand_img_4 from "@/assets/img/brand/one/brand-logo-7.png";

type DataType = StaticImageData[]
const brand_data: DataType = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
]
const BrandAreaHomeFour = ({onPageStyle} : any) => {
  return (
    <>
      <div className={`brand-area ${onPageStyle? "" : "pb-70"} `}>
        <div className="container">
          <div className="row">
            {brand_data.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <div className="tp-brand-4-item mb-40 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">
                  <Image src={item} alt="image-title" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAreaHomeFour;