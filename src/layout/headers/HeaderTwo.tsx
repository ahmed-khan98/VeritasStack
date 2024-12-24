"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavMenu from "./Menu/NavMenu";
import { TeamSocialLinks } from "@/components/common/SocialLinks";
import LogoTwo from "@/assets/img/logo/veritasLogo.jpeg";
import PhoneIcon from "@/assets/img/icon/header-cta-icon.svg";
import UseSticky from "@/hooks/UseSticky";
import HeaderSearch from "@/components/common/HeaderSearch";
import HeaderCart from "@/components/common/HeaderCart";
import Offcanvas from "./Menu/Offcanvas";
import OnePageOffcanvas from "./Menu/OnePageOffcanvas";
import "@/assets/css/Custom.css";
import OnPageMenu from "./Menu/OnPageMenu";
import { useSelector } from "react-redux";

type DataType = {
  address: string;
  email: string;
  top_info: string[];
  btn_text: string;
  help_text: string;
  // phone_number: string;
  phone_number1: string;
};
const header_two_content: DataType = {
  address: "your_address",
  email: "info@veritasstack.com",
  top_info: ["Help", "Support", "Contact"],
  btn_text: "Get Solution",
  help_text: "Need help? Talk to an expert",
  // phone_number: "US +1 (205) 588-4732",
  phone_number1: "UK +44 7706 980268",
};

const { email, top_info, btn_text, help_text, phone_number1 } =
  header_two_content;

const HeaderTwo = ({ onePageHomeThree }: any) => {
  const { sticky } = UseSticky();
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [openCanvas, setOpenCanvas] = useState<boolean>(false);
  const productItem = useSelector((state: any) => state.cart.cart);

  return (
    <>
      <header>
        <div className="tp-header-area tp-header-3 tp-header-height">
          <div className="tp-header-3-top d-none d-lg-block">
            <div
              className="tp-header-3-top-wrap d-flex align-items-center justify-content-center"
              style={{ height: "70px", borderBottom: "2px solid #D3D3D3" }}
            >
              {" "}
              {/* Centering the content */}
              <div className="tp-header-3-top-left d-flex align-items-center">
                {/* <div className="tp-header-3-top-left-item">
                  <span>
                    <i className="fas fa-phone " style={{ color: "blue" }}></i>
                  </span>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=${phone_number}&text=hellow+world&app_absent=0`}
                  >
                    {phone_number}
                  </a>
                </div> */}
                <div className="tp-header-3-top-left-item">
                  <span>
                    <i className="fa-brands fa-whatsapp" style={{ color: "#25d366" }}></i>
                  </span>
                  <a
                     href="https://wa.me/447706980268"
    target="_blank"
    rel="noopener noreferrer"
                  >
                    {phone_number1}
                  </a>
                </div>
                <div
                  style={{
                    height: "20px",
                    width: "1px",
                    background: "gray",
                    margin: "0px 10px",
                  }}
                ></div>
                <div className="tp-header-3-top-left-item">
                  <span>
                    <i
                      className="fa-solid fa-envelope"
                      style={{ color: "blue" }}
                    ></i>
                  </span>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
              <div
                style={{
                  height: "20px",
                  width: "1px",
                  background: "gray",
                  margin: "0px 10px",
                }}
              ></div>
              <div className="tp-header-3-top-right d-flex align-items-center">
                <div className="tp-header-3-top-info">
                  {top_info.map((info, i) => (
                    <a href="/contact" key={i}>
                      {info}
                    </a>
                  ))}
                </div>
                <div
                  style={{
                    height: "20px",
                    width: "0.1px",
                    background: "gray",
                    margin: "0px 10px",
                  }}
                ></div>
                <div className="tp-header-3-top-social">
                  <TeamSocialLinks />
                </div>
              </div>
            </div>
          </div>

          <div
            id="header-sticky"
            className={`tp-header-3-wrap white-bg d-flex justify-content-between ${
              sticky ? "header-sticky" : ""
            }`}
          >
            <div className="tp-header-3-main d-flex">
              <div className="logo" style={{ borderRight: "none" }}>
                <Link href="/">
                  <Image
                    width="330"
                    height="100"
                    src={LogoTwo}
                    alt="image-title"
                  />
                </Link>
              </div>
              <div className="main-menu tp-header-3-menu d-none d-xl-block">
                <nav id="mobile-menu" className="tp-main-menu-content">
                  {!onePageHomeThree && <NavMenu style_2={true} />}
                  {onePageHomeThree && (
                    <OnPageMenu
                      style_2={true}
                      onePageHomeThree={onePageHomeThree}
                    />
                  )}
                </nav>
              </div>
            </div>
            <div className="tp-header-right d-flex align-items-center">
              {/* <div className="tp-header-search">
                <button className="tp-header-search-btn tp-search-open-btn" onClick={() => setSearchOpen(true)} type="submit">
                  <i className="fa-light fa-magnifying-glass"></i>
                </button>
              </div>
              <div className="tp-header-cart ml-30">
                <button className="tp-header-cart-btn cartmini-open-btn p-relative" onClick={() => setCartOpen(true)} type="button">
                  <i className="flaticon-shopping-cart"></i>
                  <span>{productItem.length}</span>
                </button>
              </div> */}
              {/* <div className="tp-header-btn ml-35 mr-30 d-none d-lg-block">
                <a className="tp-btn" href="#">{btn_text}</a>
              </div> */}
              {/* <div className="d-none d-xxl-block">
                <div className="tp-header-cta d-flex align-items-center">
                  <div className="tp-header-cta-icon d-none d-lg-block">
                    <Image src={PhoneIcon} alt="image-title" />
                  </div>
                  <div className="tp-header-cta-content d-none d-lg-block">
                    <p>{help_text}</p>
                    <a href={`tel:${phone_number}`}>Free {phone_number}</a>
                  </div>
                </div>
              </div> */}
              <div className="offcanvas-btn d-xl-none ml-30">
                <button
                  className="offcanvas-open-btn"
                  onClick={() => setOpenCanvas(true)}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      {!onePageHomeThree && (
        <Offcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
      )}

      {onePageHomeThree && (
        <OnePageOffcanvas
          openCanvas={openCanvas}
          setOpenCanvas={setOpenCanvas}
          onePageHomeThree={onePageHomeThree}
        />
      )}
    </>
  );
};

export default HeaderTwo;
