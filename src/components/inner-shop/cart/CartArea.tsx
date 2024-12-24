'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import UseCartInfo from '@/hooks/UseCartInfo';
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import MinusIcon from '@/svg/OuthersIcons/MinusIcon';
import PlusIcon from '@/svg/OuthersIcons/PlusIcon';
import RemoveIcon from '@/svg/OuthersIcons/RemoveIcon';
import { addToCart, clear_cart, decrease_quantity, remove_cart_product } from '@/redux/features/cartSlice';


const CartArea = () => {

  const productItem = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const { total } = UseCartInfo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission here
  };

  // handle shipping cost 
  const [shipCost, setShipCost] = useState<number>(0);
  const handleShippingCost = (value: any) => {
    if (value === 'free') {
      setShipCost(0)
    }
    else {
      setShipCost(value)
    }
  }


  return (
    <>
      <section className="tp-cart-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="tp-cart-list mb-25 mr-30">

                <table>
                  <thead>
                    <tr>
                      <th colSpan={2} className="tp-cart-header-product">Product</th>
                      <th className="tp-cart-header-price">Price</th>
                      <th className="tp-cart-header-quantity">Quantity</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {productItem.map((item: any, i: any) =>
                      <tr key={i}>
                        <td className="tp-cart-img">
                          <Link href="/shop-details">
                            <Image src={item.img} alt="image" /></Link></td>
                        <td className="tp-cart-title">
                          <Link href="/shop-details">{item.title}</Link></td>

                        <td className="tp-cart-price"><span>${item.new_price}.00</span></td>

                        <td className="tp-cart-quantity">
                          <div className="tp-product-quantity p-relative mt-10 mb-10">
                            <span className="tp-cart-minus" onClick={() => dispatch(decrease_quantity(item))}>
                              <MinusIcon />
                            </span>
                            <input className="tp-cart-input" type="text" onChange={handleSubmit} value={item.quantity} readOnly />
                            <span className="tp-cart-plus" onClick={() => dispatch(addToCart(item))}>
                              <PlusIcon />
                            </span>
                          </div>
                        </td>
                        <td className="tp-cart-action">
                          <button className="tp-cart-action-btn" onClick={() => dispatch(remove_cart_product(item))}>
                            <RemoveIcon /> <span>Remove</span>
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="tp-cart-bottom mr-30">
                <div className="row align-items-end">
                  <div className="col-xl-6 col-md-8">
                    <div className="tp-cart-coupon">
                      <form onClick={e => e.preventDefault()}>
                        <div className="tp-cart-coupon-input-box">
                          <label>Coupon Code:</label>
                          <div className="tp-cart-coupon-input d-flex align-items-center">
                            <input type="text" placeholder="Enter Coupon Code" />
                            <button type="submit">Apply</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-4">
                    <div className="tp-cart-update text-md-end">
                      <button type="button" className="tp-cart-update-btn" onClick={() => dispatch(clear_cart())}>Clear Cart</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-cart-checkout-wrapper">
                <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                  <span className="tp-cart-checkout-top-title">Subtotal</span>
                  <span className="tp-cart-checkout-top-price">${total}</span>
                </div>


                <div className="tp-cart-checkout-shipping">
                  <h4 className="tp-cart-checkout-shipping-title">Shipping</h4>

                  <div className="tp-cart-checkout-shipping-option-wrapper">
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="flat_rate" type="radio" name="shipping" />
                      <label htmlFor="flat_rate" onClick={() => handleShippingCost(20)}>Flat rate: <span>$20.00</span></label>
                    </div>
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="local_pickup" type="radio" name="shipping" />
                      <label htmlFor="local_pickup" onClick={() => handleShippingCost(25)}>Local pickup: <span> $25.00</span></label>
                    </div>
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="free_shipping" type="radio" name="shipping" />
                      <label htmlFor="free_shipping" onClick={() => handleShippingCost('free')}>Free shipping</label>
                    </div>
                  </div>

                </div>
                <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                  <span>Total</span>
                  <span>${total + shipCost}</span>
                </div>


                <div className="tp-cart-checkout-proceed">
                  <Link href="/checkout" className="tp-cart-checkout-btn w-100">Proceed to Checkout</Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default CartArea;