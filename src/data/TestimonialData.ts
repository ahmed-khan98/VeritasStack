 

import { StaticImageData } from "next/image";
import testimonial_avatar_1 from "@/assets/img/testimonial/sm/testimonial-5-thumb-1.png";
import testimonial_avatar_2 from "@/assets/img/testimonial/sm/testimonial-inner-thumb-1.png";
import testimonial_avatar_3 from "@/assets/img/testimonial/sm/testimonial-inner-thumb-2.png";
import testimonial_avatar_4 from "@/assets/img/testimonial/sm/testimonial-5-thumb-2.png";

interface DataType {
  id: number;
  img: StaticImageData;
  name: string;
  job_title: string;
  sm_info: string;
}[]


const testimonial_data: DataType[] = [
  {
    id: 1,
    img: testimonial_avatar_1,
    name: "Harry Newman",
    job_title: "Co Founder",
    sm_info: "Sed tincidunt augue et so lobortis lacus, nec feugiat massa gravida a. Aenean risus dolor, placerat  teelementumMorbi lacus metus, pellentesque rat ornare duis diam",
  },
  {
    id: 2,
    img: testimonial_avatar_2,
    name: "MR Tanvir",
    job_title: "Co Founder",
    sm_info: "Sed tincidunt augue et so lobortis lacus, nec feugiat massa gravida a. Aenean risus dolor, placerat  teelementumMorbi lacus metus, pellentesque rat ornare duis diam",
  },
  {
    id: 3,
    img: testimonial_avatar_3,
    name: "Jamil Rayhan",
    job_title: "Co Founder",
    sm_info: "Sed tincidunt augue et so lobortis lacus, nec feugiat massa gravida a. Aenean risus dolor, placerat  teelementumMorbi lacus metus, pellentesque rat ornare duis diam",
  },
  {
    id: 4,
    img: testimonial_avatar_4,
    name: "Annette Black",
    job_title: "Head of Engineering",
    sm_info: "Sed tincidunt augue et so lobortis lacus, nec feugiat massa gravida a. Aenean risus dolor, placerat  teelementumMorbi lacus metus, pellentesque rat ornare duis diam",
  },
]
export default testimonial_data