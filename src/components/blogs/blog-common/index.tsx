import React from 'react';
import Tags from './Tags';
import Categories from './Categories';
import SidebarBlog from './SidebarBlog';
import BlogSearch from '@/components/forms/BlogSearch';

const BlogSideBar = () => {
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-5">
        <div className="sidebar-wrapper mb-60">

          <div className="sidebar-widget mb-30">
            <div className="sidebar-widget-content">
              <div className="sidebar-search">
                <BlogSearch />
              </div>
            </div>
          </div>

          <div className="sidebar-widget sidebar-widget-2 mb-30">
            <h3 className="sidebar-widget-title">Our Latest Post</h3>
            <div className="sidebar-widget-content">
              <div className="sidebar-post rc-post">
                <SidebarBlog />
              </div>
            </div>
          </div>

          <div className="sidebar-widget sidebar-widget-2 mb-30">
            <h3 className="sidebar-widget-title">Categories</h3>
            <div className="sidebar-widget-Catagory">
              <Categories />
            </div>
          </div>

          <div className="sidebar-widget sidebar-widget-2 mb-30">
            <h3 className="sidebar-widget-title">Our Tag</h3>
            <div className="sidebar-widget-content">
              <div className="tagcloud">
                <Tags /> 
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BlogSideBar;