
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menu_data from './MenuData';

type DataType = {
  style_2?: any,
}
const NavMenu = ({ style_2 }: DataType) => {
  return (
    <>
      <ul>
        {menu_data.map((item, i) =>
          <li key={i} className={`${item.has_dropdown ? "has-dropdown" : ""} ${item.img_dropdown ? `${style_2 ? 'has-dropdown' : 'has-dropdown tp-static'}` : ""}`}>
            <Link href={item.link}>{item.title}</Link>
            {item.img_dropdown &&
              <div className={`tp-submenu has-homemenu ${style_2 ? "menu-fix-width" : ""}`}>
                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">
                  {item.sub_menus?.map((sub_menu, sub_i) =>
                    <div key={sub_i} className={`col homemenu ${sub_i === 0 ? "active" : ""}`}>
                      <div className="homemenu-thumb">
                        <Image src={sub_menu.demo_img} style={{ width: '100%', height: 'auto' }} alt="image-title" />
                      </div>
                      <div className="homemenu-btn">
                        <Link className="tp-btn menu-btn mb-1" href={sub_menu.link}>Multi Page</Link>
                        <Link className="tp-btn menu-btn" href={sub_menu.one_page_link}>One Page</Link>
                      </div>
                      <div className="demo-name">
                        <span>{sub_menu.title}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            }
            {item.has_dropdown &&
              <ul className="tp-submenu">
                {item.sub_menus?.map((sub_item, sub_index) =>
                  <li key={sub_index}><Link href={sub_item.link}>{sub_item.title}</Link></li>
                )}
              </ul>
            }
          </li>
        )}
      </ul>
    </>
  );
};

export default NavMenu;