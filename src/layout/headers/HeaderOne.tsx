'use client'
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './Menu/NavMenu';
import Offcanvas from './Menu/Offcanvas';
import React, { useState } from 'react';
import UseSticky from '@/hooks/UseSticky';
import { useSelector } from "react-redux";
import OnPageMenu from './Menu/OnPageMenu';
import LogoHomeOne from "@/assets/img/logo/logo.png";
import OnePageOffcanvas from './Menu/OnePageOffcanvas';
import HeaderCart from '@/components/common/HeaderCart';
import HeaderSearch from '@/components/common/HeaderSearch';


type styleType = {
  style?: any;
  onePageHomeOne?: any;
  onePageHomeTwo?: any;
}

const HeaderOne = ({ style, onePageHomeOne, onePageHomeTwo }: styleType) => {
  const { sticky } = UseSticky()
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  const [openCanvas, setOpenCanvas] = useState<boolean>(false)
  const productItem = useSelector((state: any) => state.cart.cart);


  return (
    <>
      <header>
        <div id="header-sticky" className={`tp-header-area tp-header-transparent tp-header-height theme-bg ${sticky ? "header-sticky" : ""}`}>
          <div className="container">
            <div className="tp-header-box">
              <div className="row align-items-center">
                <div className={`${style ? "col-xl-3" : "col-xl-2"} col-lg-6 col-md-6 col-6`}>
                  <div className="logo">
                    <Link href="/">
                      <Image data-width="115" style={{ width: '115px', height: 'auto' }} src={LogoHomeOne} alt="image-title" />
                    </Link>
                  </div>
                </div>
                <div className={`${style ? "col-xl-7" : "col-xl-8"} d-none d-xl-block`}>
                  <div className="main-menu">
                    <nav id="mobile-menu" className="tp-main-menu-content">
                      {!onePageHomeOne && !onePageHomeTwo && <NavMenu />} 
                      {onePageHomeOne && <OnPageMenu onePageHomeOne={onePageHomeOne} />} 
                      {onePageHomeTwo && <OnPageMenu onePageHomeTwo={onePageHomeTwo}/>} 
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                  <div className="tp-header-right d-flex align-items-center justify-content-end">
                    <div className="tp-header-search">
                      <button className="tp-header-search-btn tp-search-open-btn" onClick={() => setSearchOpen(true)}>
                        <i className="fa-light fa-magnifying-glass"></i>
                      </button>
                    </div>
                    <div className="tp-header-cart ml-30">
                      <button className="tp-header-cart-btn cartmini-open-btn p-relative" onClick={() => setCartOpen(true)} type="button">
                        <i className="flaticon-shopping-cart"></i>
                        <span>{productItem.length}</span>
                      </button>
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
        </div>
      </header>
      <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      {!onePageHomeOne && <Offcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />} 
      {!onePageHomeTwo && <Offcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />} 
      
      {onePageHomeOne && <OnePageOffcanvas  openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} onePageHomeOne={onePageHomeOne}  />} 
      {onePageHomeTwo &&  <OnePageOffcanvas openCanvas={openCanvas}  setOpenCanvas={setOpenCanvas}  onePageHomeTwo={onePageHomeTwo} />} 
    </>
  );
};

export default HeaderOne; 