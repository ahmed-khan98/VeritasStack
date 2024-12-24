
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import shape_img_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_img_2 from "@/assets/img/breadcrumb/breadcrumb-shape-3.png";
import shape_img_3 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";

type DataType = {
  top_title: string;
  title: string;
}
const Breadcrumb = ({top_title, title} : DataType) => {
  return (
    <>
      <section className="breadcrumb-area breadcrumb-wrap">
        <div className="breadcrumb-bg" style={{backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg-1.jpg)`}}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="tpbreadcrumb">
                <div className="breadcrumb-link mb-15">
                  <span className="breadcrumb-item-active">
                    <Link href="/">Home</Link></span>
                  <span> / {top_title}</span>
                </div>
                <h2 className="breadcrumb-title">{title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-shape">
          <div className="breadcrumb-shape-1 wow fadeInRight" data-wow-duration="1.8s" data-wow-delay=".4s">
            <Image src={shape_img_1} alt="image-title" />
          </div>
          <div className="breadcrumb-shape-4 wow slideInRight" data-wow-duration="1.2s" data-wow-delay=".1s">
            <Image src={shape_img_2} alt="image-title" />
          </div>
          <div className="breadcrumb-shape-5 wow slideInRight" data-wow-duration="1.4s" data-wow-delay=".3s">
            <Image src={shape_img_3} alt="image-title" />
          </div>
        </div>

      </section>
    </>
  );
};

export default Breadcrumb;