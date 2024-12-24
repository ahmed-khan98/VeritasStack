
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import brand_img_1 from "@/assets/img/brand/one/brand-logo-1.png";
import brand_img_2 from "@/assets/img/brand/one/brand-logo-5.png";
import brand_img_3 from "@/assets/img/brand/one/brand-logo-6.png";
import brand_img_4 from "@/assets/img/brand/one/brand-logo-7.png";


interface DataType {
  id: number;
  img: StaticImageData;
  duration: string;
  delay: string;
}[]

const brand_data: DataType[] = [
  {
    id: 1,
    img: brand_img_1,
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 2,
    img: brand_img_2,
    duration: "1s",
    delay: ".4s",
  },
  {
    id: 3,
    img: brand_img_3,
    duration: "1s",
    delay: ".4s",
  },
  {
    id: 4,
    img: brand_img_4,
    duration: "1.2s",
    delay: ".6s",
  },
]
const BrandAreaHomeArea = () => {
  return (
    <>
      <div className="brand-area pb-120 ">
        <div className="container">
          <div className="row gx-0">
            {brand_data.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-6">
                <div className="tp-brand-two-item wow fadeInRight" data-wow-duration={item.duration} data-wow-delay={item.delay}>
                  <Image src={item.img} alt="image-title" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAreaHomeArea;