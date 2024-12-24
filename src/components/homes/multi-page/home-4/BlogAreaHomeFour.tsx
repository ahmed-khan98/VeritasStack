
import blog_data from '@/data/BlogData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const blog_content = {
  sub_title: "Our Latest Update",
  title: "Read Our Latest News",
}
const { sub_title, title } = blog_content

const BlogAreaHomeFour = ({onPageStyle} : any) => {
  const blogs = blog_data.filter(item => item.page === "home_4")
  return (
    <>
      <section id="blog-one-page" className={`blog-area pb-75 ${onPageStyle? "pt-70" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section tp-section-red text-center mb-50">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-blog-4-item mb-40 fix">
                  <div className="tp-blog-4-thumb tp-thumb-common overlay-anim">
                    <div className="tp-thumb-common-overlay-red wow"></div>
                    <Link href="/blog-details">
                      <Image src={item.img} style={{width: '100%', height: 'auto'}} alt="image-title" />
                      <div className="tp-blog-4-thumb-plus">
                        <i className="fa-regular fa-plus"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="tp-blog-4-content">
                    <h4 className="tp-blog-4-title"><Link href="/blog-details">{item.title}</Link></h4>
                    <p>{item.sm_des}</p>
                    <div className="tp-blog-4-btn">
                      <Link href="/blog-details">Read More <i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
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

export default BlogAreaHomeFour;