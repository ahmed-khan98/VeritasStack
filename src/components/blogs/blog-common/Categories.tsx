
import Link from 'next/link';
import React from 'react';

type Datatype = string[]
const category_data:Datatype = [
  "Cloud Solution",
  "Artificial Inteligence",
  "Cyber Data",
  "IT Service",
  "Business",
  "Web Development",
]
const Categories = () => {
  return (
    <>
      {category_data.map((item, i) => <Link href="/blog-details" key={i}>{item} <i className="fa-sharp fa-regular fa-arrow-right"></i></Link>)}
    </>
  );
};

export default Categories;