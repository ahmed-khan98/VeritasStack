'use client'
import React from 'react';
import { Rating } from 'react-simple-star-rating';

import Image, { StaticImageData } from 'next/image';
import user_avatar_1 from "@/assets/img/thumbs/review-avatar-1.png";
import user_avatar_2 from "@/assets/img/thumbs/review-avatar-2.png";
import ShopReviewForm from '@/components/forms/ShopReviewForm';

interface DataType {
  id: number;
  img: StaticImageData;
  name: string;
  review_text: string;
  ratting: number;
}[]


const review_data: DataType[] = [
  {
    id: 1,
    img: user_avatar_1,
    name: "Mithcel Adnan",
    review_text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti qdolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,ilaborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio",
    ratting: 5,
  },
  {
    id: 2,
    img: user_avatar_2,
    name: "Kameliya Aliz",
    review_text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti qdolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,ilaborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio",
    ratting: 5,
  },
]

const ReviewArea = () => {
  return (
    <>
      <section className="review-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="tp-product-review-wrap">
                <h3 className="tp-product-review-title">2 Reviews for Tecz</h3>
                {review_data.map((item, i) =>
                  <div key={i} className="tp-product-review-wrapper">
                    <div className="tp-product-review-item d-flex align-items-center">
                      <div className="tp-product-review-item-thumb">
                        <Image src={item.img} alt="image" />
                      </div>
                      <div className="tp-product-review-item-contact">
                        <h5 className="tp-product-review-item-title">{item.name}</h5>
                        <p>{item.review_text}</p>
                        <div className="tp-product-review-item-rating">
                          <Rating initialValue={item.ratting} size={20} readonly={true} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>


              <div className="tp-product-review-submit">
                <h3 className="tp-product-review-title">Submit Your Review</h3>
                <div className="tp-product-review-submit-form postbox-review-form">
                  <ShopReviewForm />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewArea;