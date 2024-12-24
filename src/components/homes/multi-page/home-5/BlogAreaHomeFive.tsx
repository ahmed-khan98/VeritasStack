
import blog_data from '@/data/BlogData';
import Link from 'next/link';
import React from 'react';
import blog_thumb from "@/assets/img/blog/five/blog-5-thumb-1.jpg";
import Image from 'next/image';

const BlogAreaHomeFive = () => {
  const blogs = blog_data.filter((blogs => blogs.page === "home_5"))
  return (
    <>
      <section id="blog-one-page" className="blog-area tp-blog-5 pb-90 pt-120">
        <div className="tp-blog-5-bg" style={{ backgroundImage: `url(/assets/img/blog/five/blog-5-bg-1.jpg)` }}> </div>
        <div className="container">
          <div className="row">
            <div className="tp-section tp-section-red text-center mb-35">
              <span className="tp-section-sub-title">Our Latest Update</span>
              <h4 className="tp-section-title">Check Our Inside Story </h4>
            </div>
          </div>
          <div className="row">
            {blogs.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-blog-5-item mb-30 tp-thumb-common fix">
                  <div className="tp-thumb-common-overlay-red wow"></div>
                  <div className="tp-blog-5-thumb">
                    <Image src={blog_thumb} alt="theme-pure" />
                  </div>
                  <div className="tp-blog-5-content">
                    <div className="tp-blog-5-content-post d-flex align-items-center">
                      <div className="tp-blog-5-content-post-icon">
                        <i className="flaticon-manufacturing"></i>
                      </div>
                      <div className="tp-blog-5-content-post-content">
                        <p>Posted by</p>
                        <span>{item.post_by}</span>
                      </div>
                    </div>
                    <div className="tp-blog-5-content-main">
                      <div className="tp-blog-5-content-info d-flex align-items-center mb-20">
                        <div className="tp-blog-5-content-info-item mr-35">
                          <span><i className="flaticon-user"></i> {item.name}</span>
                        </div>
                        <div className="tp-blog-5-content-info-item">
                          <span><i className="fa-light fa-message"></i> {item.comments}  Comment</span>
                        </div>
                      </div>
                      <h5 className="tp-blog-5-title mb-30"><Link href="/blog-details">{item.title}</Link></h5>
                      <div className="tp-blog-5-tags">
                        <Link href="/blog-details">{item.tag_1}</Link>
                        <Link href="/blog-details">{item.tag_2}</Link>
                      </div>
                    </div>
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

export default BlogAreaHomeFive;