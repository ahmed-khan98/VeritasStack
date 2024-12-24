'use client'
import artical_data from '@/data/ArticleData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import VideoPopup from '@/modals/VideoPopup';
import ReactPaginate from 'react-paginate';
import BlogSideBar from '../blog-common';

const setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".postbox-slider-button-next",
    prevEl: ".postbox-slider-button-prev",
  },
  breakpoints: {
    '1200': {
      slidesPerView: 1,
    },
    '992': {
      slidesPerView: 1,
    },
    '768': {
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

const BlogPostboxArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = artical_data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(artical_data.length / itemsPerPage);
  // click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % artical_data.length;
    setItemOffset(newOffset);
  };


  return (
    <>
      <section className="postbox__area pt-145 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7">
              <div className="postbox-wrapper pr-30 mb-60">
                {currentItems.map((item, i) =>
                  <article key={i} className="postbox-item format-image mb-60 transition-3">

                    {item.post_type === "normal" &&
                      <div className="postbox-thumb w-img">
                        <Link href="/blog-details">
                          <Image src={item.img} alt="image" />
                        </Link>
                      </div>
                    }
                    {item.post_type === "video" &&
                      <div className="postbox-thumb postbox-video w-img p-relative">
                        <Link href="/blog-details">
                          <Image src={item.thumb_img} alt="image" />
                        </Link>
                        <a
                          onClick={() => setIsVideoOpen(true)}
                          style={{ cursor: "pointer" }}
                          className="play-btn pulse-btn popup-video"><i className="fas fa-play"></i></a>
                      </div>
                    }

                    {item.post_type === "slider" &&
                      <Swiper {...setting}
                        modules={[Navigation]}
                        className="postbox-thumb postbox-slider swiper-container w-img p-relative">
                        {item.slider_img?.map((lider_img, slider_index) =>
                          <SwiperSlide key={slider_index} className="postbox-slider-item swiper-slide">
                            <Image src={lider_img} alt="image" />
                          </SwiperSlide>
                        )}
                        <div className="postbox-nav">
                          <button className="postbox-slider-button-next">
                            <i className="fa-sharp fa-regular fa-arrow-right"></i>
                          </button>
                          <button className="postbox-slider-button-prev">
                            <i className="fa-sharp fa-regular fa-arrow-left"></i>
                          </button>
                        </div>
                      </Swiper>
                    }
                    <div className="postbox-content">
                      <div className="postbox-meta">
                        <span><a href="#"><i className="fa-light fa-user"></i>By {item.writer}</a></span>
                        <span><i className="fa-thin fa-tag"></i>{item.category}</span>
                        <span><a href="#"><i className="fa-light fa-comments"></i>{item.comments} Comments </a></span>
                      </div>
                      <h3 className="postbox-title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                      <div className="postbox-text">
                        <p>{item.artical_data}</p>
                      </div>
                      <div className="postbox-read-more">
                        <Link href="/blog-details" className="tp-btn">Read More</Link>
                      </div>
                    </div>
                  </article>
                )}
                <div className="basic-pagination">
                  <nav>
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel={<i className="fa-light fa-arrow-right-long"></i>}
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={9}
                      pageCount={pageCount}
                      previousLabel={<i className="fa-light fa-arrow-left-long"></i>}
                      renderOnZeroPageCount={null}
                    />

                  </nav>
                </div>
              </div>
            </div>

            <BlogSideBar />

          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"8Oa21aCw8nU"}
      />
      {/* video modal end */}
    </>
  );
};

export default BlogPostboxArea;