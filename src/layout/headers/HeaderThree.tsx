'use client'
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './Menu/NavMenu';
import React, { useState } from 'react';
import UseSticky from '@/hooks/UseSticky';
import Offcanvas from './Menu/Offcanvas';
import OnPageMenu from './Menu/OnPageMenu';
import OnePageOffcanvas from './Menu/OnePageOffcanvas';
import HeaderCart from '@/components/common/HeaderCart';
import logo_home_four from "@/assets/img/logo/logo-red.png";
import { useSelector } from "react-redux";


const HeaderThree = ({ style, onePageHomeFour, onePageHomeFive }: any) => {
  const { sticky } = UseSticky()
  const [openCanvas, setOpenCanvas] = useState<boolean>(false)
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  const productItem = useSelector((state: any) => state.cart.cart);

  return (
    <>
      <header>
        <div id="header-sticky" className={`tp-header-area tp-header-4 ${style ? "tp-header-transparent" : "tp-header-4-wrap white-bg tp-header-height"} ${sticky ? "header-sticky" : ""}`}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-4 col-md-3 col-6">
                <div className="logo">
                  <Link href="/">
                    <Image style={{ width: '115px', height: 'auto' }} src={logo_home_four} alt="image-title" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <div className="main-menu">
                  <nav id="mobile-menu" className="tp-main-menu-content">
                    {!onePageHomeFour && !onePageHomeFive && <NavMenu style_2={true} />}
                    {onePageHomeFour && <OnPageMenu style_2={true} onePageHomeFour={onePageHomeFour}  />}
                    {onePageHomeFive && <OnPageMenu style_2={true} onePageHomeFive={onePageHomeFive} />}
                  </nav>
                </div>
              </div>
              <div className="col-xl-4 col-lg-8 col-md-9 col-6">
                <div className="tp-header-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-cart ml-30">
                    <button className="tp-header-cart-btn cartmini-open-btn p-relative" onClick={() => setCartOpen(true)}>
                      <i className="flaticon-shopping-cart"></i>
                      <span>{productItem.length}</span>
                    </button>
                  </div>
                  <div className="d-none d-md-block">
                    <div className="tp-header-4-contact d-flex align-items-center">
                      <div className="tp-header-4-contact-icon">
                        <i className="fa-solid fa-phone-flip"></i>
                      </div>
                      <div className="tp-header-4-contact-content">
                        <span>Call Anytime</span>
                        <a href="tel:0123456789">+99 (786) 8765</a>
                      </div>
                    </div>
                  </div>
                  <div className="tp-header-btn ml-30 d-none d-lg-block">
                    <Link className="tp-btn-red" href="/contact">Get Solution</Link>
                  </div>
                  <div className="offcanvas-btn d-xl-none ml-20">
                    <button className="offcanvas-open-btn" onClick={() => setOpenCanvas(true)}>
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      {!onePageHomeFour && <Offcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />}
      {!onePageHomeFive && <Offcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />}

      {onePageHomeFour  &&
        <OnePageOffcanvas
          openCanvas={openCanvas}
          setOpenCanvas={setOpenCanvas}
          onePageHomeFour={onePageHomeFour} />}    

        {onePageHomeFive &&
        <OnePageOffcanvas
          openCanvas={openCanvas}
          setOpenCanvas={setOpenCanvas} 
          onePageHomeFive={onePageHomeFive} />}
    </>
  );
};

export default HeaderThree;