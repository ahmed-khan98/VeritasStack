
import Link from 'next/link';
import React from 'react';

type DataType = string[]
const tags_data: DataType = [
  "Consulting",
  "Web",
  "Technology",
  "Development",
  "Cyber",
  "Digital",
  "Video",
]
const Tags = () => {
  return (
    <>
      {tags_data.map((item, i) => <Link href="/blog-details" key={i}>{item}</Link>)}
    </>
  );
};

export default Tags;