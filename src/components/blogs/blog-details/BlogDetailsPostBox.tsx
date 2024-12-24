
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import BlogSideBar from '../blog-common';
import blog_thumb_1 from "@/assets/img/blog/blog-big-1.jpg";
import postbox_thumb_1 from "@/assets/img/blog/postbox-thumb-1.jpg";
import postbox_thumb_2 from "@/assets/img/blog/postbox-thumb-2.jpg";
import quote_img from "@/assets/img/blog/blockquote.png";
import avatar_img from "@/assets/img/blog/postbox-user-1.png";

import user_avatar_1 from "@/assets/img/blog/blog-details-avatar-1.png";
import user_avatar_2 from "@/assets/img/blog/blog-details-avatar-2.png";
import reply_icon from "@/assets/img/blog/arrow-left.svg";
import ReviewForm from '@/components/forms/ReviewForm';

interface DataType {
  title_1: string;
  title_2: string;
  title_3: string;
  title_4: string;
  name: string;
  sm_des_1: string;
  sm_des_2: string;
  sm_des_3: string;
  sm_des_4: React.JSX.Element;
  avater_name: string;
  conmments_data: {
    id: number;
    img: StaticImageData;
    name: string;
    comment: string;
  }[];
}

const blog_details_post_content: DataType = {
  title_1: "Let is understand different types data",
  title_2: "Our Personal Approach",
  title_3: "And the day came when the risk to remain tight in a bud was more painful than the risk.",
  title_4: "Supported substance consolidates parts of web promoting and substance showcasing. It includes making",
  name: "MR Tanvir",
  sm_des_1: "There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  sm_des_2: "Suspendisse ultricies vestibulum vehicula. Proin laoreet porttitor lacus. Duis auctor vel ex eu elementum. Fusce eu volutpat felis. Proin sed eros tincidunt, sagittis sapien eu, porta diam. Aenean finibus scelerisque nulla non facilisis. Fusce vel orci sed quam gravid",
  sm_des_3: "Aliquam condimentum, massa vel mollis volutpat, erat sem pharetra quam, ac mattis arcu elit non massa. Nam mollis nunc velit, vel varius arcu fringilla tristique. Cras elit nunc, sagittis eu bibendum eu, ultrices placerat sem. Praesent vitae metus auctor.",
  sm_des_4: <>Supported substance consolidates parts of web based promoting and substance showcasing. It includes making substance, for example, a blog entry or video and paying for its consideration on a site that routinely distributes comparative substance. A piece of supported substance will seem to be like the remainder of the substance on the site yet will <span>incorporate some sign</span> that it is supported. With execution showcasing, you would pay a pre-decided aps on your supported article navigates to your site from the article.</>,
  avater_name: "Harry Newman",
  conmments_data: [
    {
      id: 1,
      img: user_avatar_1,
      name: "Mithcel Adnan",
      comment: "Curabitur luctus nisl in justo maximus egestas. Curabitur sit amet sapien vel nunc molestie pulvinar at vitae quam. Aliquam lobortis nisi vitae congue consectetur. Aliquam  non metus",
    },
    {
      id: 1,
      img: user_avatar_2,
      name: "Liza Olivarez",
      comment: "Curabitur luctus nisl in justo maximus egestas. Curabitur sit amet sapien vel nunc molestie pulvinar at vitae quam. Aliquam lobortis nisi vitae congue consectetur. Aliquam  non metus",
    },
  ]

}
const { title_1, title_2, title_3, title_4, name, sm_des_1, sm_des_2, sm_des_3, sm_des_4, avater_name, conmments_data } = blog_details_post_content



const BlogDetailsPostBox = ({ single_blog }: any) => {
  return (
    <>
      <section className="postbox__area pt-145 pb-105">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7">
              <div className="postbox-main-wrapper mb-35 pr-30">


                <div className="postbox-meta-wrapper">
                  <article className="postbox-item format-image mb-50 transition-3">
                    <div className="postbox-thumb w-img">
                      <Link href="/blog-details">
                        {single_blog?.img ?
                          <Image src={single_blog.img} alt="image" />
                          :
                          <Image src={blog_thumb_1} alt="image" />
                        }

                      </Link>
                    </div>
                    <div className="postbox-content">
                      <div className="postbox-meta">
                        <span><a href="#"><i className="fa-light fa-user"></i>By Tecz</a></span>
                        <span><i className="fa-thin fa-tag"></i>Solution</span>
                        <span><a href="#"><i className="fa-light fa-comments"></i>02 Comments </a></span>
                      </div>
                      <h3 className="postbox-title">
                        {single_blog?.title?
                          single_blog.title
                          :
                          title_1 
                        }

                      </h3>
                      <div className="postbox-text">
                        <p>{sm_des_1}</p>
                        <p>{sm_des_2}</p>
                        <div className="postbox-thumb-sm mb-30">
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="postbox-thumb-sm-item">
                                <Image src={postbox_thumb_1} alt="image" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="postbox-thumb-sm-item">
                                <Image src={postbox_thumb_2} alt="image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="postbox-title">{title_2}</h3>
                        <p>{sm_des_3}</p>
                        <div className="postbox-blockquote">
                          <blockquote>
                            <div className="postbox-blockquote-thumb">
                              <Image src={quote_img} alt="image" />
                            </div>
                            <div className="postbox-blockquote-content">
                              <h4>{title_3}</h4>
                              <span>- {name}</span>
                            </div>
                          </blockquote>
                        </div>
                        <p>{sm_des_4}</p>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="postbox-meta-wrapper">
                  <div className="postbox-share mb-70">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="tagcloud tagcloud-sm mb-30">
                          <span>Tag:</span>
                          <a href="#">Technology</a>
                          <a href="#">IT</a>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="postbox-social text-lg-end mb-20">
                          <span>Share:</span>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a> {" "}
                          <a className="social-fb" href="#"><i className="fa-brands fa-facebook-f"></i></a> {" "}
                          <a className="social-pin" href="#"><i className="fa-brands fa-pinterest-p"></i></a> {" "}
                          <a className="social-link" href="#"><i className="fa-brands fa-linkedin-in"></i></a> {" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="postbox-details-author d-sm-flex align-items-center mb-50">
                    <div className="postbox-details-author-thumb">
                      <a href="#">
                        <Image src={avatar_img} alt="image" />
                      </a>
                    </div>
                    <div className="postbox-details-author-content">
                      <h5 className="postbox-details-author-title">
                        <a href="#">{avater_name}</a>
                      </h5>
                      <p>{title_4}</p>
                      <div className="postbox-details-author-social">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="postbox-comment mb-50">
                  <h4 className="postbox-comment-title">
                    Comments (3)
                  </h4>
                  <ul>
                    {conmments_data.map((comment, i) =>
                      <li key={i} className={i === 1 ? "children" : ""}>
                        <div className="postbox-comment-box">
                          <div className="postbox-comment-avater">
                            <Image src={comment.img} alt="image" />
                          </div>
                          <div className="postbox-comment-content">
                            <div className="postbox-comment-author">
                              <p className="postbox-comment-name">{comment.name}</p>
                            </div>
                            <p>{comment.comment}</p>
                            <div className="postbox-comment-reply">
                              <a href="#"><span><Image src={reply_icon} alt="arrow" />Reply</span></a>
                            </div>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="postbox-reviw-wrapper">
                  <div className="postbox-review-content">
                    <h4 className="postbox-review-title">Leave A Reply</h4>
                  </div>
                  <div className="postbox-review-form">
                    <ReviewForm />
                  </div>
                </div>

              </div>
            </div>


            <BlogSideBar />

          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPostBox;