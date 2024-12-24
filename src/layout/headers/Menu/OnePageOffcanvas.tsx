'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OnePageMobileMenu from './OnePageMobileMenu';
import ToggleIcon from '@/svg/HomeOneIcons/ToggleIcon'; 
import BlackLogo from "@/assets/img/logo/logo-black.png";
import SocialLinks from '@/components/common/SocialLinks';


const OnePageOffcanvas = ({ openCanvas, setOpenCanvas, onePageHomeOne, onePageHomeTwo, onePageHomeThree, onePageHomeFour, onePageHomeFive }: any) => {
  const [nevIcon, setNevIcon] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setNevIcon(windowWidth <= 1199);
    };
    // Call the function once to set the initial value based on the window width
    handleResize();
    // Add event listener for the 'resize' event
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <> 
      {nevIcon &&
        <>
          <div className={`offcanvas__area ${openCanvas ? "offcanvas-opened" : ""}`}>
            <div className="offcanvas__wrapper">
              <div className="offcanvas__close">
                <button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setOpenCanvas(false)}>
                  <ToggleIcon />
                </button>
              </div>
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo logo">
                    <Link href="/"> 
                      <Image src={BlackLogo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="tp-main-menu-mobile">
                {onePageHomeOne && <OnePageMobileMenu  onePageHomeOne={onePageHomeOne} />}   
                {onePageHomeTwo && <OnePageMobileMenu  onePageHomeTwo={onePageHomeTwo} />}   
                {onePageHomeThree && <OnePageMobileMenu  onePageHomeThree={onePageHomeThree}/>}   
                {onePageHomeFour && <OnePageMobileMenu  onePageHomeFour={onePageHomeFour} />}   
                {onePageHomeFive && <OnePageMobileMenu  onePageHomeFive={onePageHomeFive} />}                 

                </div>
                <div className="offcanvas__btn">
                  <Link href="/contact" className="tp-btn">Getting Started</Link>
                </div>
                <div className="side-info-contact">
                  <span>we are here</span>
                  <p>1489 Langley Ave <br /> Grand Forks Afb, North.</p>
                </div>
                <div className="side-info-social"> 
                  <SocialLinks /> 
                </div>
              </div>
            </div>
          </div>
          <div className={`body-overlay ${openCanvas ? "opened" : ""}`} onClick={() => setOpenCanvas(false)}></div>
        </>
      } 
    </>
  );
};

export default OnePageOffcanvas;