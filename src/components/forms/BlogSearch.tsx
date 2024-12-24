'use client'
import React from 'react';

const BlogSearch = () => {
  return (
    <>
      <form  onSubmit={e => e.preventDefault()}>
        <div className="sidebar-search-input">
          <input type="text" placeholder="Search here" />
        </div>
        <div className="sidebar-search-btn">
          <button type="submit"><i className="far fa-search"></i></button>
        </div>
      </form>
    </>
  );
};

export default BlogSearch;