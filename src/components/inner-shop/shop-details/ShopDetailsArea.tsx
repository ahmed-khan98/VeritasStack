/* eslint-disable jsx-a11y/aria-proptypes */
'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Rating } from 'react-simple-star-rating';

import tab_thumb_1 from "@/assets/img/shop/details/product-details-bg.jpg";
import tab_thumb_2 from "@/assets/img/shop/details/product-details-bg-2.jpg";
import tab_thumb_3 from "@/assets/img/shop/details/product-details-bg-3.jpg";

import tab_btn_img_1 from "@/assets/img/shop/details/product-details-sm-1.jpg";
import tab_btn_img_2 from "@/assets/img/shop/details/product-details-sm-2.jpg";
import tab_btn_img_3 from "@/assets/img/shop/details/product-details-sm-3.jpg";
import SocialLinks from '@/components/common/SocialLinks';
import MinusIcon from '@/svg/OuthersIcons/MinusIcon';
import PlusIcon from '@/svg/OuthersIcons/PlusIcon';
import { addToCart, decrease_quantity } from '@/redux/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

interface DataType {
  id: number;
  tab_id: string;
  img_thumb: StaticImageData;
  hot_badge: string;
  discount_badge: string;
  btn_img: StaticImageData;
}[]

const shop_details_data: DataType[] = [
  {
    id: 1,
    tab_id: "home",
    img_thumb: tab_thumb_1,
    hot_badge: "HOT",
    discount_badge: "",
    btn_img: tab_btn_img_1,
  },
  {
    id: 2,
    tab_id: "profile",
    img_thumb: tab_thumb_2,
    hot_badge: "HOT",
    discount_badge: "90",
    btn_img: tab_btn_img_2,
  },
  {
    id: 3,
    tab_id: "contact",
    img_thumb: tab_thumb_3,
    hot_badge: "HOT",
    discount_badge: "",
    btn_img: tab_btn_img_3,
  },
]

type ShopDataType = {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
}
const shop_content: ShopDataType = {
  title: "Our Description",
  sm_des_1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  sm_des_2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga similique sunt in culpa qui officia deserunt",

}
const { title, sm_des_1, sm_des_2 } = shop_content

const ShopDetailsArea = ({ single_blog }: any) => {

  const productItem = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission here
  };
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };
  const totalItems = productItem.find((d_item: any) => d_item?.id === single_blog?.id)


  return (
    <>
      <section className="shop-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-product-details-nab mb-50">
                <div className="tab-content" id="nav-tabContents">
                  {shop_details_data.map((item, i) =>
                    <div key={i} className={`tab-pane fade w-img ${i === 0 ? "show active" : ""}`} id={`nav-${item.tab_id}`} role="tabpanel" aria-labelledby={`nav-${item.tab_id}-tab`} tabIndex={0}>
                      <Image src={item.img_thumb} alt="image" />
                      <div className="tp-product-info badge">
                        {item.discount_badge && <span className="tp-product-info-discount badge-discount"> -{item.discount_badge}% </span>}
                        {item.hot_badge && <span className="tp-product-info-hot badge-hot">{item.hot_badge}</span>}
                      </div>
                    </div>
                  )}
                </div>
                <nav>
                  <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    {shop_details_data.map((tab_item, index) =>
                      <button key={index} className={`nav-link ${index === 0 ? "active" : ""}`} id={`nav-${tab_item.tab_id}-tab`} data-bs-toggle="tab" data-bs-target={`#nav-${tab_item.tab_id}`} type="button" role="tab" aria-controls={`nav-${tab_item.tab_id}`} aria-selected={`${index === 0 ? "true" : "false"}`}>
                        <Image src={tab_item.img_thumb} style={{ width: '100%' }} alt="image" />
                      </button>
                    )}
                  </div>
                </nav>
              </div>
            </div>

            <div className="offset-xl-1 col-xl-5 col-lg-6">
              <div className="tp-product-details-wrapper mb-50">
                <div className="tp-product-details-category">
                  <span>Jacket</span>
                </div>
                <h4 className="tp-product-details-title">{single_blog?.title ? single_blog.title : "Contrast Jacket"}</h4>
                <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                  <div className="tp-product-details-stock mb-10">
                    <span>In Stock</span>
                  </div>
                  <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                    <div className="tp-product-details-rating">
                      <Rating initialValue={5} size={20} readonly={true} />
                    </div>
                    <div className="tp-product-details-reviews">
                      <span>(36 Reviews)</span>
                    </div>
                  </div>
                </div>
                <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... <span style={{ cursor: "pointer" }}>See more</span></p>
                <div className="tp-product-details-price-wrapper mb-30">
                  {single_blog?.old_price ? <span className="tp-product-details-price old-price">$ {single_blog.old_price}.00{" "}</span> : ""}

                  <span className="tp-product-details-price new-price">$ {single_blog?.new_price ? single_blog.new_price : "236"}.00</span>
                </div>
                <div className="tp-product-details-action-wrapper">
                  <h3 className="tp-product-details-action-title">Quantity</h3>
                  <div className="tp-product-details-action-item-wrapper d-flex align-items-center mb-20">

                    <div className="tp-product-details-quantity">
                      <div className="tp-product-quantity mb-15 mr-20">
                        <span className="tp-cart-minus" onClick={() => single_blog ? dispatch(decrease_quantity(single_blog)) : ""}>
                          <MinusIcon />
                        </span>
                        <input className="tp-cart-input" type="text"
                          onChange={handleSubmit}
                          value={totalItems?.quantity} defaultValue={1} readOnly />
                        <span className="tp-cart-plus" onClick={() => single_blog ? dispatch(addToCart(single_blog)) : ""}>
                          <PlusIcon />
                        </span>
                      </div>
                    </div>

                    <div className="tp-product-details-add-to-cart mb-15 w-100">
                      <button className="tp-product-details-add-to-cart-btn tp-btn" onClick={() => single_blog ? handleAddToCart(single_blog) : ""}>Add To Cart</button>
                    </div>
                  </div>
                </div>

                <div className="tp-product-details-query mb-45">
                  <div className="tp-product-details-query-item d-flex align-items-center">
                    <span>SKU:  </span>
                    <p>NTB7SDVX44</p>
                  </div>
                  <div className="tp-product-details-query-item d-flex align-items-center">
                    <span>Category:  </span>
                    <p>Jacket</p>
                  </div>
                  <div className="tp-product-details-query-item d-flex align-items-center">
                    <span>Tag: </span>
                    <p>Content, Development, Tech</p>
                  </div>
                </div>
                <div className="tp-product-details-social">
                  <span>Share: </span>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="tp-product-details-description mt-60">
                <h4 className="tp-product-details-description-title">{title}</h4>
                <p>{sm_des_1}</p>
                <p>{sm_des_2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetailsArea;