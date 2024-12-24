import { StaticImageData } from "next/image";
import project_img_1 from "@/assets/img/project/three/project-3-thumb-1.jpg";
import project_img_2 from "@/assets/img/project/three/project-3-thumb-2.jpg";
import project_img_3 from "@/assets/img/project/three/project-3-thumb-3.jpg";
import project_img_4 from "@/assets/img/project/three/project-3-thumb-4.jpg";
import project_img_5 from "@/assets/img/project/inner/project-inner-thumb-1.jpg";
import project_img_6 from "@/assets/img/project/inner/project-inner-thumb-2.jpg";
import project_img_7 from "@/assets/img/project/inner/project-inner-thumb-3.jpg";

import project_img_2_1 from "@/assets/img/project/four/project-4-thumb-1.jpg";
import project_img_2_2 from "@/assets/img/project/four/project-4-thumb-2.jpg";
import project_img_2_3 from "@/assets/img/project/four/project-4-thumb-3.jpg";
import project_img_2_4 from "@/assets/img/project/four/project-4-thumb-4.jpg";
import project_img_2_5 from "@/assets/img/project/inner/project-inner-thumb-2.jpg";
import project_img_2_6 from "@/assets/img/project/inner/project-inner-thumb-3.jpg";

interface DataType {
  id: number;
  page: string;
  img: StaticImageData;
  tag: string;
  title: string;
  duration: string;
  delay: string;
}[]

const project_data:DataType[] =  [
  {
    id: 1,
    page: "project_1",
    img: project_img_1,
    tag: "Design",
    title: "Tech Solution",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 2,
    page: "project_1",
    img: project_img_2,
    tag: "Development",
    title: "Smart Vision",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 3,
    page: "project_1",
    img: project_img_3,
    tag: "Technology",
    title: "Analytic Solution",
    duration: "1s",
    delay: ".4s",
  },
  {
    id: 4,
    page: "project_1",
    img: project_img_4,
    tag: "Marketing",
    title: "Digital Marketing",
    duration: "1s",
    delay: ".4s",
  },
  {
    id: 5,
    page: "project_1",
    img: project_img_5,
    tag: "Marketing",
    title: "Brand Design",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 6,
    page: "project_1",
    img: project_img_6,
    tag: "Technology",
    title: "Platform Integration",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 7,
    page: "project_1",
    img: project_img_7,
    tag: "Marketing",
    title: "Tech Solution",
    duration: "1.2s",
    delay: ".6s",
  },
  // for swiper update 
  {
    id: 1,
    page: "project_1",
    img: project_img_4,
    tag: "Design",
    title: "Tech Solution",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 2,
    page: "project_1",
    img: project_img_5,
    tag: "Development",
    title: "Smart Vision",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 3,
    page: "project_1",
    img: project_img_6,
    tag: "Technology",
    title: "Analytic Solution",
    duration: "1s",
    delay: ".4s",
  },
  {
    id: 4,
    page: "project_1",
    img: project_img_1,
    tag: "Marketing",
    title: "Digital Marketing",
    duration: "1s",
    delay: ".4s",
  },
  {
    id: 5,
    page: "project_1",
    img: project_img_2,
    tag: "Marketing",
    title: "Brand Design",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 6,
    page: "project_1",
    img: project_img_7,
    tag: "Technology",
    title: "Platform Integration",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 7,
    page: "project_1",
    img: project_img_3,
    tag: "Marketing",
    title: "Tech Solution",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 8,
    page: "project_1",
    img: project_img_2,
    tag: "Marketing",
    title: "Tech Solution",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 9,
    page: "project_1",
    img: project_img_5,
    tag: "Marketing",
    title: "Brand Design",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 10,
    page: "project_1",
    img: project_img_6,
    tag: "Technology",
    title: "Platform Integration",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 11,
    page: "project_1",
    img: project_img_7,
    tag: "Marketing",
    title: "Tech Solution",
    duration: "1.2s",
    delay: ".6s",
  },

  // project 02 
  {
    id: 1,
    page: "project_2",
    img: project_img_2_1,
    tag: "Idea",
    title: "Product Design",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 2,
    page: "project_2",
    img: project_img_2_2,
    tag: "Development",
    title: "Smart Vision",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 3,
    page: "project_2",
    img: project_img_2_3,
    tag: "Technology",
    title: "Web  Development",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 4,
    page: "project_2",
    img: project_img_2_4,
    tag: "Security",
    title: "Platform Integration",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 5,
    page: "project_2",
    img: project_img_2_5,
    tag: "Security",
    title: "Web Development",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 6,
    page: "project_2",
    img: project_img_2_6,
    tag: "Security",
    title: "Tech Solution",
    duration: "1.2s",
    delay: ".6s",
  },
  // repeat for pagination 
  {
    id: 1,
    page: "project_2",
    img: project_img_2_4,
    tag: "Idea",
    title: "Product Design",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 2,
    page: "project_2",
    img: project_img_2_6,
    tag: "Development",
    title: "Smart Vision",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 3,
    page: "project_2",
    img: project_img_2_5,
    tag: "Technology",
    title: "Web  Development",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 4,
    page: "project_2",
    img: project_img_2_1,
    tag: "Security",
    title: "Platform Integration",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 5,
    page: "project_2",
    img: project_img_2_3,
    tag: "Security",
    title: "Web Development",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 6,
    page: "project_2",
    img: project_img_2_2,
    tag: "Security",
    title: "Tech Solution",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 7,
    page: "project_2",
    img: project_img_2_5,
    tag: "Technology",
    title: "Web  Development",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 8,
    page: "project_2",
    img: project_img_2_6,
    tag: "Security",
    title: "Platform Integration",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 9,
    page: "project_2",
    img: project_img_2_4,
    tag: "Security",
    title: "Web Development",
    duration: "1.2s",
    delay: ".6s",
  },
  {
    id: 10,
    page: "project_2",
    img: project_img_2_3,
    tag: "Security",
    title: "Tech Solution",
    duration: "1.2s",
    delay: ".6s",
  },
  

]

export default project_data