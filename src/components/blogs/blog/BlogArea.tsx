'use client'
import blog_data from '@/data/BlogData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const BlogArea = () => {
  const blogs = blog_data.filter(items => items.page === "blog") 

  const itemsPerPage = 6;
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
      <section className="blog-area tp-blog-inner pt-120 pb-120">
        <div className="container">
          <div className="row">
            {currentItems.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-blog-two mb-30">
                  <div className="tp-blog-two-item">
                    <div className="tp-blog-two-thumb overlay-anim tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <Link href={`/blog-details/${item.id}`}>
                        <Image src={item.img} alt="image" />
                        <div className="tp-blog-two-thumb-plus">
                          <i className="fa-regular fa-plus"></i>
                        </div>
                      </Link>
                    </div>
                    <div className="tp-blog-two-content">
                      <span>{item.time} _ {item.category}</span>
                      <h4 className="tp-blog-two-title">
                        <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                      </h4>
                      <div className="tp-blog-two-btn">
                      <Link href={`/blog-details/${item.id}`}>Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center mt-20">
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

export default BlogArea;