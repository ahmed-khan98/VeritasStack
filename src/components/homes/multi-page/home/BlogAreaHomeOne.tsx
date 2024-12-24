
import blog_data from '@/data/BlogData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const blog_content = {
  sub_title: "Our Latest Update",
  title: "Read Our Latest News",
}
const {sub_title, title}  = blog_content
const BlogAreaHomeOne = ({style} : any) => {
  return (
    <>
      <section id="blog-one-page" className={`blog-area pb-90 ${style? "pt-50" : "pt-110"}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section text-center mb-60">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <div className="tp-blog-wrapper">
            <div className="row gx-0">
              {blog_data.map((item, i) =>
                <>
                  {item.page === "home_1" &&
                    <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                      <div className="tp-blog-item text-center">
                        <div className="tp-blog-item-thumb tp-thumb-common fix overlay-anim mb-20">
                          <div className="tp-thumb-common-overlay wow"></div>
                          <Link href="/blog-details">
                            <Image src={item.img} alt="image-title" />
                          </Link>
                        </div>
                        <div className="tp-blog-item-content">
                          <div className="tp-blog-item-tag mb-20">
                            <Link href="/blog-details">{item.tag_1}</Link>
                            <Link href="/blog-details">{item.tag_2}</Link>
                          </div>
                          <h4 className="tp-blog-item-title mb-30">
                            <Link href="/blog-details" dangerouslySetInnerHTML={{ __html: item.title }}></Link>
                          </h4>
                          <div className="tp-blog-item-btn">
                            <Link href="/blog-details">Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogAreaHomeOne;