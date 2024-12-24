'use client'
import payment from "@/assets/img/shop/payment-option.png";
import UseCartInfo from "@/hooks/UseCartInfo";

import NiceSelect from '@/ui/NiceSelect';
import Image from 'next/image';
import Link from "next/link";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

const CheckoutArea = () => {
  const selectHandler = (e: any) => { };
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [coupon, setCoupon] = useState<boolean>(false)
  const [bankOpen, setBankOpen] = useState<boolean>(false)
  const [chequeOpen, setChequeOpen] = useState<boolean>(false)
  const [cashOpen, setCashOpen] = useState<boolean>(false)


  const productItem = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const { total } = UseCartInfo();

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

  let content = null;
  if (productItem.length === 0) content = <div>
    <div className="empty_bag text-center"> 
      <p className="py-3">Your Bag is Empty</p>
      <Link href={"/shop"}>
        <button className="btn-cart tp-btn">Go To Shop</button>
      </Link>
    </div>
  </div>

  return (
    <>
      <section className="tp-checkout-area pt-120 pb-120" style={{ backgroundColor: "#EFF1F5" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-checkout-verify">
                <div className="tp-checkout-verify-item">
                  <p className="tp-checkout-verify-reveal">Returning customer ?{' '}
                    <button type="button" className="tp-checkout-login-form-reveal-btn" onClick={() => setIsLogin(!isLogin)}>Click here to login</button></p>

                  <div id="tpReturnCustomerLoginForm" className={`tp-return-customer ${isLogin ? "d-block" : ""}`}>
                    <form onSubmit={e => e.preventDefault()}>

                      <div className="tp-return-customer-input">
                        <label>Email</label>
                        <input type="text" placeholder="Your Email" />
                      </div>
                      <div className="tp-return-customer-input">
                        <label>Password</label>
                        <input type="password" placeholder="Password" />
                      </div>

                      <div className="tp-return-customer-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                        <div className="tp-return-customer-remeber">
                          <input id="remeber" type="checkbox" />
                          <label htmlFor="remeber">Remember me</label>
                        </div>
                        <div className="tp-return-customer-forgot">
                          <a href="#">Forgot Password?</a>
                        </div>
                      </div>
                      <button type="submit" className="tp-return-customer-btn tp-checkout-btn">Login</button>
                    </form>
                  </div>

                </div>
                <div className="tp-checkout-verify-item">
                  <p className="tp-checkout-verify-reveal">Have a coupon ?{' '}
                    <button type="button" className="tp-checkout-coupon-form-reveal-btn" onClick={() => setCoupon(!coupon)}>Click here to enter your code</button></p>

                  <div id="tpCheckoutCouponForm" className={`tp-return-customer ${coupon ? "d-block" : ""}`}>
                    <form onSubmit={e => e.preventDefault()}>
                      <div className="tp-return-customer-input">
                        <label>Coupon Code :</label>
                        <input type="text" placeholder="Coupon" />
                      </div>
                      <button type="submit" className="tp-return-customer-btn tp-checkout-btn">Apply</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="tp-checkout-bill-area">
                <h3 className="tp-checkout-bill-title">Billing Details</h3>

                <div className="tp-checkout-bill-form">
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="tp-checkout-bill-inner">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>First Name <span>*</span></label>
                            <input type="text" placeholder="First Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>Last Name <span>*</span></label>
                            <input type="text" placeholder="Last Name" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Company name (optional)</label>
                            <input type="text" placeholder="Example LTD." />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Country / Region </label>
                            <input type="text" placeholder="United States (US)" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Street address</label>
                            <input type="text" placeholder="House number and street name" />
                          </div>

                          <div className="tp-checkout-input">
                            <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Town / City</label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input tp-header-search-category">
                            <label>State / County</label>
                            <NiceSelect
                              className="postform"
                              options={[
                                { value: "01", text: "New York US" },
                                { value: "02", text: "Berlin Germany" },
                                { value: "03", text: "Paris France" },
                                { value: "04", text: "Tokiyo Japan" },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name=""
                              placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>Postcode ZIP</label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Phone <span>*</span></label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Email address <span>*</span></label>
                            <input type="email" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Order notes (optional)</label>
                            <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {/* <!-- checkout place order --> */}
              <div className="tp-checkout-place white-bg">
                <h3 className="tp-checkout-place-title">Your Order</h3>

                <div className="tp-order-info-list">
                  <ul>

                    {/* <!-- header --> */}
                    <li className="tp-order-info-list-header">
                      <h4>Product</h4>
                      <h4>Total</h4>
                    </li>

                    {/* <!-- item list --> */}
                    {productItem.map((add_item: any, add_index: any) =>
                      <li key={add_index} className="tp-order-info-list-desc">
                        <p>{add_item.title} <span> {add_item.new_price} x {add_item.quantity}</span></p>
                        <span>${add_item.quantity * add_item.new_price}:00</span>
                      </li>
                    )}

                    {/* <!-- subtotal --> */}
                    <li className="tp-order-info-list-subtotal">
                      <span>Subtotal</span>
                      <span>${total}.00</span>
                    </li>

                    {/* <!-- shipping --> */}
                    <li className="tp-order-info-list-shipping">
                      <span>Shipping</span>
                      <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                        <span>
                          <input id="flat_rate" type="radio" name="shipping" />
                          <label htmlFor="flat_rate" onClick={()=> handleShippingCost(20)}>Flat rate: <span>$20.00</span></label>
                        </span>
                        <span>
                          <input id="local_pickup" type="radio" name="shipping" />
                          <label htmlFor="local_pickup" onClick={()=> handleShippingCost(25)}>Local pickup: <span>$25.00</span></label>
                        </span>
                        <span>
                          <input id="free_shipping" type="radio" name="shipping" />
                          <label htmlFor="free_shipping" onClick={()=> handleShippingCost('free')}>Free shipping</label>
                        </span>
                      </div>
                    </li>

                    {/* <!-- total --> */}
                    <li className="tp-order-info-list-total">
                      <span>Total</span>
                      <span>${total + shipCost}.00</span>
                    </li>
                  </ul>
                </div>
                <div className="tp-checkout-payment">
                  <div className="tp-checkout-payment-item">
                    <input type="radio" id="back_transfer" name="payment" />
                    <label htmlFor="back_transfer" data-bs-toggle="direct-bank-transfer" onClick={() => setBankOpen(!bankOpen)}>Direct Bank Transfer</label>
                    <div className={`tp-checkout-payment-desc direct-bank-transfer ${bankOpen ? "d-block" : ""}`}>
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                  </div>
                  <div className="tp-checkout-payment-item">
                    <input type="radio" id="cheque_payment" name="payment" />
                    <label htmlFor="cheque_payment" onClick={() => setChequeOpen(!chequeOpen)}>Cheque Payment</label>
                    <div className={`tp-checkout-payment-desc cheque-payment ${chequeOpen ? "d-block" : ""}`}>
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                  </div>
                  <div className="tp-checkout-payment-item">
                    <input type="radio" id="cod" name="payment" />
                    <label htmlFor="cod" onClick={() => setCashOpen(!cashOpen)}>Cash on Delivery</label>
                    <div className={`tp-checkout-payment-desc cash-on-delivery ${cashOpen ? "d-block" : ""}`}>
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                  </div>
                  <div className="tp-checkout-payment-item paypal-payment">
                    <input type="radio" id="paypal" name="payment" />
                    <label htmlFor="paypal">PayPal <Image src={payment} alt="image" /> <a href="#">What is PayPal?</a></label>
                  </div>
                </div>
                <div className="tp-checkout-agree">
                  <div className="tp-checkout-option">
                    <input id="read_all" type="checkbox" />
                    <label htmlFor="read_all">I have read and agree to the website.</label>
                  </div>
                </div>
                <div className="tp-checkout-btn-wrapper">
                  <a href="#" className="tp-checkout-btn w-100">Place Order</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutArea;