'use client'
import Image from 'next/image';
import Link from 'next/link';
import shop_data from '@/data/ShopData';
import InputRange from '@/ui/InputRange';
import ReactPaginate from 'react-paginate';
import UseProducts from '@/hooks/UseProducts';
import { Rating } from 'react-simple-star-rating';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';
import { selectProducts } from '@/redux/features/productSlice';

const ShopArea = ({ onPageStyle, style_2 }: any) => {
  let all_data = shop_data
  const { products, setProducts } = UseProducts();

  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  // click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const dispatch = useDispatch()
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  // all products 
  const allProducts = useSelector(selectProducts);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchingProducts = allProducts.filter((p) =>
      p.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProducts(searchingProducts);
  };

  const productCategory = useSelector(selectProducts).map(product => product.category);
  // allCategory
  const allCategory = ['All Category', ...new Set(productCategory)];
  // select category
  const [selected, setSelected] = useState('All Category');

  //handle Category 
  const handleCategory = (category: string) => {
    setSelected(category)
    if (category === 'All Category') {
      setProducts(allProducts)
    }
    else {
      const all_course = allProducts.filter(course => course.category === category);
      setProducts(all_course)
    }
  }

  const productTag = useSelector(selectProducts).map(tag => tag.tag); 
  // all tags
  const allTags = ['All', ...new Set(productTag)];

  // handle Price
  const handleTags = (tag: string) => {
    setSelected(tag)
    if (tag === 'All') {
      setProducts(allProducts)
    }
    if (tag === 'Design') {
      setProducts(allProducts.filter(item => item.tag === 'Design'))
    }
    if (tag === 'Content') {
      setProducts(allProducts.filter(item => item.tag === 'Content'))
    }
    if (tag === 'Development') {
      setProducts(allProducts.filter(item => item.tag === 'Development'))
    }
    if (tag === 'Ui/Ux') {
      setProducts(allProducts.filter(item => item.tag === 'Ui/Ux'))
    }
    if (tag === 'Tech') {
      setProducts(allProducts.filter(item => item.tag === 'Tech'))
    }
    if (tag === 'Innovation') {
      setProducts(allProducts.filter(item => item.tag === 'Innovation'))
    }
  }

  const maxPrice = all_data.reduce((max, item) => {
    return item.new_price > max ? item.new_price : max;
  }, 0);
  const [priceValue, setPriceValue] = useState([0, maxPrice]); 

  useEffect(() => {
    let filterPrice = all_data.filter((j) => j.new_price >= priceValue[0] && j.new_price <= priceValue[1]); 
    setProducts(filterPrice)  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceValue])  

  const handleChanges = (val: number[]) => {
    setPriceValue(val)
  }



  return (
    <>
      <section id="shop-one-page" className={`shop-area ${style_2 ? "pt-55 pb-70" : onPageStyle ? "pb-70" : "pt-120 pb-120"}`}>
        <div className="container">
          <div className="row">
            <div className={`col-xl-3 col-lg-4 ${onPageStyle? "d-none" : ""}`}>
              <div className="tp-shop-sidebar mb-40">

                <div className="tp-shop-sidebar-search mb-30">
                  <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Search Products" onChange={handleSearchChange} />
                    <div className="tp-shop-sidebar-search-icon">
                      <i className="fa-regular fa-magnifying-glass" style={{ cursor: 'pointer' }}></i>
                    </div>
                  </form>
                </div>

                <div className="tp-shop-sidebar-category mb-30">
                  <h4 className="tp-shope-sidebar-title mb-25">Categories</h4>
                  <div className="tp-shop-sidebar-category-wrap">
                    {allCategory.map((cate_item, index) =>
                      <div key={index} className="tp-shop-sidebar-category-item mb-2">
                        <a onClick={() => handleCategory(cate_item)}>
                          <input className="m-check-input"
                            type="checkbox"
                            checked={cate_item === selected}
                            name={`${index}`} id={`${cate_item}`}
                            readOnly />
                          <label className="m-check-label ps-2" htmlFor={`${cate_item}`} style={{ cursor: 'pointer' }}>{cate_item}</label>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="tp-shop-sidebar-price mb-30">
                  <h4 className="tp-shope-sidebar-title mb-30">Price</h4>
                  <div className="tp-shop-sidebar-price-wrap">
                    <div className="tp-shop-sidebar-price-range">
                    </div>
                    <div className="tp-shop-sidebar-price-range-head">
                      <div id="slider-range">
                        <InputRange
                          MAX={maxPrice}
                          MIN={0}
                          STEP={1}
                          values={priceValue}
                          handleChanges={handleChanges}
                        />
                      </div>
                      <div className="price-filter mt-25 d-flex align-items-center justify-content-between">
                        <span className="input-range" onChange={() => handleChanges}>
                          ${priceValue[0]} - ${priceValue[1]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tp-shop-sidebar-tag">
                  <h4 className="tp-shope-sidebar-title mb-25">Tag</h4>
                  {allTags.map((tag_item, tag_index) =>
                    <span key={tag_index} className="tag">
                      <a style={{ cursor: 'pointer' }} onClick={() => handleTags(tag_item)}>{tag_item}</a>
                    </span>
                  )}
                </div>


                <div className="tp-shop-sidebar-sell mb-30">
                  <h4 className="tp-shope-sidebar-title mb-25">Best Seller</h4>
                  <div className="tp-shop-sidebar-sell-wrap">
                    {allProducts.slice(0, 3).map((side_item, side_index) =>

                      <div key={side_index} className="tp-shop-sidebar-sell-item d-flex mb-20">
                        <div className="tp-shop-sidebar-sell-item-thumb">
                          <Link href="/shop-details">
                            <Image src={side_item.img} alt="image" />
                          </Link>
                        </div>
                        <div className="tp-shop-sidebar-sell-item-content">
                          <div className="tp-shop-sidebar-sell-item-rating">
                            <Rating initialValue={side_item.ratting} size={20} readonly={true} />
                          </div>
                          <h5 className="tp-shop-sidebar-sell-item-title">
                            <Link href={`/shop-details/${side_item.id}`}>{side_item.title}</Link></h5>
                          <span>${side_item.new_price}.00</span>
                        </div>
                      </div>


                    )}
                  </div>
                </div>


              </div>
            </div>
            <div className={`${onPageStyle? "col-12" : "col-xl-9 col-lg-8"}`}>
              <div className="row">
                {currentItems.map((item: any, i: number) =>
                  <div key={i} className={`${onPageStyle? "col-xl-3 col-lg-6 col-sm-6" : "col-xl-4 col-lg-6 col-sm-6"}`}>
                    <div className="tp-product-item mb-40">
                      <div className="tp-product-thumb">
                        <Image src={item.img} alt="image" />
                        <div className="tp-product-thumb-cart">
                          <button onClick={() => handleAddToCart(item)} className="tp-btn">Add to Cart</button>
                        </div>
                      </div>
                      <div className="tp-product-content">
                        <div className="tp-product-rating">
                          <Rating initialValue={item.ratting} size={20} readonly={true} />
                        </div>
                        <h4 className="tp-product-title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                        {item?.old_price && <del>${item?.old_price}.00</del>} {' '}
                        <span>${item.new_price}.00</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={`row ${onPageStyle? 'd-none' : ''}`}>
                <div className="col-12">
                  <div className="basic-pagination mt-15">

                    <ReactPaginate
                      breakLabel="..."
                      nextLabel={<i className="fa-light fa-arrow-right-long"></i>}
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={9}
                      pageCount={pageCount}
                      previousLabel={<i className="fa-light fa-arrow-left-long"></i>}
                      renderOnZeroPageCount={null}
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopArea;