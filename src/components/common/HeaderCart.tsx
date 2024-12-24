
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";
import { remove_cart_product } from '@/redux/features/cartSlice';
import UseCartInfo from '@/hooks/UseCartInfo'; 
import empty_bag from "@/assets/img/shape/empty-cart.webp";


const HeaderCart = ({ cartOpen, setCartOpen }: any) => {
  const productItem = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const { total } = UseCartInfo();

  let content = null;
  if (productItem.length === 0) content = <div>
    <div className="empty_bag text-center">
      <Image src={empty_bag} style={{width: "150px", height: "auto"}} alt="empty-bag" />
      <p className="py-3">Your Bag is Empty</p>
      <Link href={"/shop"}>
        <button className="btn-cart tp-btn">Go To Shop</button>
      </Link>
    </div>
  </div>


  return (
    <>
      <div className={`tpcartinfo cartmini__area p-relative ${cartOpen ? "cartmini-opened" : ""}`}>
        <button className="cartmini-close-btn" onClick={() => setCartOpen(false)}>
          <i className="fa-sharp fa-light fa-xmark"></i>
        </button>
        <div className="tpcart">
          <h4 className="tpcart__title">Your Cart</h4>
          <div className="tpcart__product">
            <div className="tpcart__product-list">
              {content}
              <ul>
                {productItem.map((item: any, i: any) =>
                  <li key={i}>
                    <div className="tpcart__item">
                      <div className="tpcart__img">
                        <Link href={`/shop-details/${item.id}`}><Image src={item.img} alt="theme-pure" /></Link>
                        <div className="tpcart__del">
                          <a style={{ cursor: 'pointer' }}>
                            <i className="fa-sharp fa-light fa-circle-xmark" onClick={() => dispatch(remove_cart_product(item))}></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpcart__content">
                        <span className="tpcart__content-title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link>
                        </span>
                        <div className="tpcart__cart-price">
                          <span className="quantity">{item.quantity} x </span>
                          <span className="new-price">${item.new_price}</span>
                        </div>
                      </div>
                    </div>
                  </li>

                )}
              </ul>
            </div>
            <div className="tpcart__checkout">
              <div className="tpcart__total-price d-flex justify-content-between align-items-center">
                <span> Subtotal:</span>
                <span className="heilight-price"> ${total}.00</span>
              </div>
              <div className="tpcart__checkout-btn">
                <Link className="tp-btn mb-10" href="/cart">View Cart</Link>
                <Link className="tp-btn tp-btn-2" href="/checkout">Checkout</Link>
              </div>
            </div>
          </div>
          <div className="tpcart__free-shipping text-center">
            <span>Free shipping for orders <b>under 10km</b></span>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${cartOpen ? "opened" : ""}`} onClick={() => setCartOpen(false)}></div>
    </>
  );
};

export default HeaderCart;