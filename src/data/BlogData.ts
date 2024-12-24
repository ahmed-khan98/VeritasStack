
import { StaticImageData } from "next/image";

import blog_thumb_1_1 from "@/assets/img/blog/one/blog-thumb-1.jpg";
import blog_thumb_1_2 from "@/assets/img/blog/one/blog-thumb-2.jpg";
import blog_thumb_1_3 from "@/assets/img/blog/one/blog-thumb-3.jpg";

import blog_thumb_2_1 from "@/assets/img/blog/two/blog-2-thumb-1.jpg";
import blog_thumb_2_2 from "@/assets/img/blog/two/blog-2-thumb-2.jpg";
import blog_thumb_2_3 from "@/assets/img/blog/two/blog-2-thumb-3.jpg";
import blog_thumb_2_4 from "@/assets/img/blog/two/blog-2-thumb-4.jpg";

import blog_thumb_3_1 from "@/assets/img/blog/three/blog-3-thumb-1.jpg";
import blog_thumb_3_2 from "@/assets/img/blog/three/blog-3-thumb-2.jpg";
import blog_thumb_3_3 from "@/assets/img/blog/three/blog-3-thumb-3.jpg";

import blog_thumb_4_1 from "@/assets/img/blog/four/blog-4-thumb-1.jpg";
import blog_thumb_4_2 from "@/assets/img/blog/four/blog-4-thumb-2.jpg";
import blog_thumb_4_3 from "@/assets/img/blog/four/blog-4-thumb-3.jpg"; 

// pricing 
import blog_thumb_pricing_1 from "@/assets/img/blog/one/blog-thumb-1.jpg"; 
import blog_thumb_pricing_2 from "@/assets/img/blog/one/blog-thumb-2.jpg"; 
import blog_thumb_pricing_3 from "@/assets/img/blog/one/blog-thumb-3.jpg"; 

// blog 
import blog_thumb_blog_1 from "@/assets/img/blog/inner/inner-blog-1.jpg";
import blog_thumb_blog_2 from "@/assets/img/blog/inner/inner-blog-3.jpg";
import blog_thumb_blog_3 from "@/assets/img/blog/inner/inner-blog-4.jpg";
import blog_thumb_blog_4 from "@/assets/img/blog/inner/inner-blog-5.jpg";
import blog_thumb_blog_5 from "@/assets/img/blog/inner/inner-blog-6.jpg"; 

interface DataType {
  id: number;
  page: string;
  img?: StaticImageData | any;
  tag_1?: string;
  tag_2?: string;
  title: string;
  time?: string; 
  category?: string;
  sm_des?: string;
  post_by?: string;
  name?: string;
  comments?: number;
}[]

const blog_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    img: blog_thumb_1_1,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "How to Create an <br /> Awesome Website",
  },
  {
    id: 2,
    page: "home_1",
    img: blog_thumb_1_2,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "What is Holding Back <br /> The IT Solution",
  },
  {
    id: 3,
    page: "home_1",
    img: blog_thumb_1_3,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "Easy to Use Software <br /> New Ennovation",
  },
  // for home 02
  {
    id: 1,
    page: "home_2",
    img: blog_thumb_2_1,
    time: "March 23, 2023",
    category: "IT Service",
    title: "A Simple Social Media Marketing List",
  },
  {
    id: 2,
    page: "home_2",
    img: blog_thumb_2_2,
    time: "March 22, 2023",
    category: "Development",
    title: "Does My Website Need Any Blog?",
  },
  {
    id: 3,
    page: "home_2",
    img: blog_thumb_2_3,
    time: "March 23, 2023",
    category: "IT Service",
    title: "A Simple Social Media Marketing List",
  },
  {
    id: 4,
    page: "home_2",
    img: blog_thumb_2_4,
    time: "March 26, 2023",
    category: "Startup Business",
    title: "What is Holding Back The IT Solution",
  },
  // for swiper 
  {
    id: 1,
    page: "home_2",
    img: blog_thumb_2_1,
    time: "March 23, 2023",
    category: "IT Service",
    title: "A Simple Social Media Marketing List",
  },
  {
    id: 2,
    page: "home_2",
    img: blog_thumb_2_2,
    time: "March 22, 2023",
    category: "Development",
    title: "Does My Website Need Any Blog?",
  },
  {
    id: 3,
    page: "home_2",
    img: blog_thumb_2_3,
    time: "March 23, 2023",
    category: "IT Service",
    title: "A Simple Social Media Marketing List",
  },
  {
    id: 4,
    page: "home_2",
    img: blog_thumb_2_4,
    time: "March 26, 2023",
    category: "Startup Business",
    title: "What is Holding Back The IT Solution",
  },
  // for home 03 
  {
    id: 1,
    page: "home_3",
    img: blog_thumb_3_1,
    time: "March 23, 2023",
    category: "IT Service",
    title: "A Simple Social Media Marketing List",
  },
  {
    id: 2,
    page: "home_3",
    img: blog_thumb_3_2,
    time: "March 23, 2023",
    category: "Development",
    title: "A Simple Social Media Marketing List",
  },
  {
    id: 3,
    page: "home_3",
    img: blog_thumb_3_3,
    time: "March 23, 2023",
    category: "Startup Business",
    title: "A Simple Social Media Marketing List",
  },
  // home 04
  {
    id: 1,
    page: "home_4",
    img: blog_thumb_4_1,
    title: "Branding, digital marketing business solutions",
    sm_des: "With over 25 years of experience, we have crafted thousands of strategic discovery process that enables",
  },
  {
    id: 2,
    page: "home_4",
    img: blog_thumb_4_2,
    title: "Web designing in powerful way of just not",
    sm_des: "With over 25 years of experience, we have crafted thousands of strategic discovery process that enables",
  },
  {
    id: 3,
    page: "home_4",
    img: blog_thumb_4_3, 
    title: "Choose our services have custom software",
    sm_des: "With over 25 years of experience, we have crafted thousands of strategic discovery process that enables",
  }, 
  // for home 5
  {
    id: 1,
    page: "home_5",
    post_by: "Tecz",
    name: "Salim Rana",
    comments: 1, 
    tag_1: "Digital",
    tag_2: "Cyber",
    title: "The highly creative UI from asilicon valley",
  },
  {
    id: 2,
    page: "home_5",
    post_by: "Tecz",
    name: "JAMIL RAYHAN",
    comments: 1, 
    tag_1: "Digital",
    tag_2: "Cyber",
    title: "The highly creative UI from asilicon valley",
  },
  {
    id: 3,
    page: "home_5",
    post_by: "Tecz",
    name: "MR Tanvir",
    comments: 1, 
    tag_1: "Digital",
    tag_2: "Cyber",
    title: "The highly creative UI from asilicon valley",
  },
  // for pricing => relative post
  {
    id: 1,
    page: "pricing",
    img: blog_thumb_pricing_1,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "How to Create an <br /> Awesome Website",
  },
  {
    id: 2,
    page: "pricing",
    img: blog_thumb_pricing_2,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "What is Holding Back <br /> The IT Solution",
  },
  {
    id: 3,
    page: "pricing",
    img: blog_thumb_pricing_3,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "Easy to Use Software <br /> New Ennovation",
  },
  // for pagination 
  {
    id: 1,
    page: "pricing",
    img: blog_thumb_pricing_3,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "How to Create an <br /> Awesome Website",
  },
  {
    id: 2,
    page: "pricing",
    img: blog_thumb_pricing_1,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "What is Holding Back <br /> The IT Solution",
  },
  {
    id: 3,
    page: "pricing",
    img: blog_thumb_pricing_2,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "Easy to Use Software <br /> New Ennovation",
  }, 
  {
    id: 1,
    page: "pricing",
    img: blog_thumb_pricing_2,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "How to Create an <br /> Awesome Website",
  },
  {
    id: 2,
    page: "pricing",
    img: blog_thumb_pricing_3,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "What is Holding Back <br /> The IT Solution",
  },
  {
    id: 3,
    page: "pricing",
    img: blog_thumb_pricing_1,
    tag_1: "BRAND",
    tag_2: "SOLUTION",
    title: "Easy to Use Software <br /> New Ennovation",
  }, 
  // for blog page 
  {
    id: 1,
    page: "blog",
    img: blog_thumb_blog_1,
    time: "March 23, 2023",
    category: "IT Service",
    title: "Does My Website Need Any Blog?",
  },
  {
    id: 2,
    page: "blog",
    img: blog_thumb_blog_2,
    time: "March 23, 2023",
    category: "IT Service",
    title: "A Simple Social Media Marketing List",
  },
  {
    id: 3,
    page: "blog",
    img: blog_thumb_blog_3,
    time: "March 23, 2023",
    category: "IT Service",
    title: "Transformation Challenges Into Opurtunities",
  },
  {
    id: 4,
    page: "blog",
    img: blog_thumb_blog_4,
    time: "March 23, 2023",
    category: "IT Service",
    title: "Does My Website Need Any Blog?",
  },
  {
    id: 5,
    page: "blog",
    img: blog_thumb_blog_5,
    time: "March 23, 2023",
    category: "IT Service",
    title: "What is Holding Back The IT Solution",
  }, 
  {
    id: 6,
    page: "blog",
    img: blog_thumb_blog_2,
    time: "March 23, 2023",
    category: "IT Service",
    title: "A Simple Social Media Marketing List",
  },
  //  for pagination 
  {
    id: 7,
    page: "blog",
    img: blog_thumb_blog_3,
    time: "March 23, 2023",
    category: "IT Service",
    title: "Does My Website Need Any Blog?",
  },
  {
    id: 8,
    page: "blog",
    img: blog_thumb_blog_4,
    time: "March 23, 2023",
    category: "IT Service",
    title: "A Simple Social Media Marketing List",
  },
  {
    id: 9,
    page: "blog",
    img: blog_thumb_blog_5,
    time: "March 23, 2023",
    category: "IT Service",
    title: "Transformation Challenges Into Opurtunities",
  },
  {
    id: 10,
    page: "blog",
    img: blog_thumb_blog_2,
    time: "March 23, 2023",
    category: "IT Service",
    title: "Does My Website Need Any Blog?",
  },
  {
    id: 11,
    page: "blog",
    img: blog_thumb_blog_3,
    time: "March 23, 2023",
    category: "IT Service",
    title: "What is Holding Back The IT Solution",
  }, 
  {
    id: 112,
    page: "blog",
    img: blog_thumb_blog_4,
    time: "March 23, 2023",
    category: "IT Service",
    title: "A Simple Social Media Marketing List",
  },

]
export default blog_data