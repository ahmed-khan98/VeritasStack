'use client'
import Link from 'next/link';
import Image from 'next/image';
import blog_data from '@/data/BlogData';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const PricingBlogArea = () => {
  const blogs = blog_data.filter(blog => blog.page === 'pricing')

  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = blogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);
  // click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="blog-area pb-120">
        <div className="container">
          <div className="tp-blog-wrapper mb-60">
            <div className="row gx-0">
              {currentItems.map((item, i) =>
                <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="tp-blog-item text-center">
                    <div className="tp-blog-item-thumb tp-thumb-common fix overlay-anim mb-20">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <Link href="/blog-details">
                        <Image src={item.img} alt="image" />
                      </Link>
                    </div>
                    <div className="tp-blog-item-content">
                      <div className="tp-blog-item-tag mb-20">
                        <Link href="/blog-details">{item.tag_1}</Link>{" "}
                        <Link href="/blog-details">{item.tag_2}</Link>{" "}
                      </div>
                      <h4 className="tp-blog-item-title mb-30">
                        <Link href="/blog-details"><span dangerouslySetInnerHTML={{__html: item.title}}></span></Link>
                      </h4>
                      <div className="tp-blog-item-btn">
                        <Link href="/blog-details">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div> 
              )}

            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center">
              <ReactPaginate
                  breakLabel="..."
                  nextLabel= {<i className="fa-light fa-arrow-right-long"></i>}
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

export default PricingBlogArea;