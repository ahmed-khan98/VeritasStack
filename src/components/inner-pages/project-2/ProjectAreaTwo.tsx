'use client'
import project_data from '@/data/ProjectData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const ProjectAreaTwo = () => {

  const projects = project_data.filter(items => items.page === "project_2")
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = projects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(projects.length / itemsPerPage);
  // click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % projects.length;
    setItemOffset(newOffset);
  };


  return (
    <>
      <section className="project-area tp-project-inner-2  pb-120 pt-120">
        <div className="container">
          <div className="row">
            {currentItems.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-project-4-item mb-30">
                  <div className="tp-project-4-item-thumb tp-thumb-common">
                    <div className="tp-thumb-common-overlay wow"></div>
                    <Image src={item.img} style={{width: '100%', height: 'auto'}} alt="image-title" />
                  </div>
                  <div className="tp-project-4-item-content">
                    <span>{item.tag}</span>
                    <h4 className="tp-project-4-title under-line-white">
                      <Link href="/project-details">{item.title}</Link></h4>
                  </div>
                  <div className="tp-project-4-arrow">
                    <Link href="/project-details"><i className="fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            )}       
          </div>

          <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center mt-30">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={<i className="fa-light fa-arrow-right-long"></i>}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={9}
                  pageCount={pageCount}
                  previousLabel={<i className="fa-light fa-arrow-left-long"></i>}
                  renderOnZeroPageCount={null}
                />

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjectAreaTwo;