'use client'
import React, { useState } from 'react';

const HeaderSearch = ({searchOpen, setSearchOpen} :any) => {
  const [searchText, setSearchText] = useState('')

  const searchHanle = (e: any) => {
    e.preventDefault()
    setSearchOpen(false)
    console.log(searchText)
    setSearchText('') 
  }

  return (
    <>
      <div className={`tpsearchbar tp-sidebar-area tp-search-area ${searchOpen ? "opened" : ""}`} >
        <button className="tpsearchbar__close" onClick={() => setSearchOpen(false)}>
          <i className="fa-sharp fa-regular fa-xmark"></i>
        </button>
        <div className="search-wrap text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10 pt-100 pb-100">
                <h2 className="tpsearchbar__title">What Are You Looking For?</h2>
                <div className="tpsearchbar__form">
                  <form onSubmit={searchHanle}>
                    <input type="text" name="search" placeholder="Search Product..." defaultValue={searchText} onChange={e => setSearchText(e.target.value)} />
                    <button className="tpsearchbar__search-btn" type='submit'><i className="fa-regular fa-magnifying-glass"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${searchOpen ? "opened" : ""}`} onClick={() => setSearchOpen(false)}></div>
    </>
  );
};

export default HeaderSearch;