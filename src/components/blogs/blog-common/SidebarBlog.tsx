import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import blog_img_1 from "@/assets/img/blog/sidebar/blog-sm-1.jpg";
import blog_img_2 from "@/assets/img/blog/sidebar/blog-sm-2.jpg";
import blog_img_3 from "@/assets/img/blog/sidebar/blog-sm-3.jpg";

interface DataType {
  id: number;
  img: StaticImageData;
  comments: number;
  title: string;
}[]

const sidebar_blog_data: DataType[] = [
  {
    id: 1,
    img: blog_img_1,
    comments: 5,
    title: "A Simple Social Media Marketing List",
  },
  {
    id: 2,
    img: blog_img_2,
    comments: 7,
    title: "Does My Website Need Any Blog?",
  },
  {
    id: 3,
    img: blog_img_3,
    comments: 13,
    title: "A Simple Social Media Marketing List",
  },
]

const SidebarBlog = () => {
  return (
    <>
      {sidebar_blog_data.map((item, i) =>
        <div key={i} className="rc-post mb-20 d-flex align-items-center">
          <div className="rc-post-thumb">
            <Link href={`/blog-details/${item.id}`}><Image src={item.img} style={{height: 'auto'}} alt="image" /></Link>
          </div>
          <div className="rc-post-content">
            <div className="rc-meta">
              <span><i className="fa-light fa-comments"></i> {item.comments} Comments</span>
            </div>
            <h3 className="rc-post-title">
              <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarBlog;