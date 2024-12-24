"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import project_img_1 from "@/assets/img/project/project-thumb-4.jpg";
import project_img_2 from "@/assets/img/project/project-thumb-2.jpg";
import project_img_3 from "@/assets/img/project/project-thumb-3.jpg";
import project_img_4 from "@/assets/img/project/project-thumb-1.jpg";

import shape from "@/assets/img/project/project-shape-1.png";
import arrow from "@/assets/img/project/project-arrow.png";

interface DataType {
  sub_title: string;
  title: string;
  project_data: {
      id: number;
      img: StaticImageData;
      title: string;
      meta_tag: string;
  }[];
}

const project_content: DataType = {
  sub_title: 'Recently completed work',
  title: 'Check Our latest projects ',
  project_data: [
    {
      id: 1,
      img: project_img_1,
      title: "Business Growth Planning",
      meta_tag: "Brain",
    },
    {
      id: 2,
      img: project_img_2,
      title: "Digital Soloution",
      meta_tag: "Software",
    },
    {
      id: 3,
      img: project_img_3,
      title: "Search Engine Optimization",
      meta_tag: "SEO",
    },
    {
      id: 4,
      img: project_img_4,
      title: "Best Business Solution",
      meta_tag: "Data Analysis",
    },
  ]
}
const { sub_title, title, project_data } = project_content

const ProjectAreaHomeOne = ({style_home_one}: any) => {

  const [active, setActive] = useState<number>(2);
  const handleToggle = (id: number): void => {
    setActive(id);
  };

  return (
    <> 
      <section id={`${style_home_one? "project-id" :  "project-one-page"}`} className="project-area tp-project-width pt-150 mb-120 pl-15 pr-15 fix">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="tp-section text-center mb-50">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <div className="row-custom">
            {project_data.map((item, i) =>
              <div key={i} className={`col-custom ${active === item.id ? "active" : ""}`} onClick={() => handleToggle(item.id)}>
                <div className="tp-project-item p-relative">
                  <div className="tp-project-thumb">
                    <Image src={item.img} alt="image-title" />
                  </div>
                  <div className="tp-project-content">
                    <div className="tp-project-text">
                      <h4 className="tp-project-title mb-15">
                        <Link href="/project-details">{item.title}</Link></h4>
                      <ul className="tp-project-meta">
                        <li>{item.meta_tag}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="tp-project-shape">
                    <Image src={shape} alt="image-title" />  
                  </div>
                  <div className="tp-project-arrow">
                    <Link href="#">
                      <span>
                        <Image src={arrow} alt="image-title" />
                      </span>
                    </Link>
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

export default ProjectAreaHomeOne;