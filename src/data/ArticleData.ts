import { StaticImageData } from "next/image";
import artical_img_1 from "@/assets/img/blog/blog-big-1.jpg";
import artical_img_2 from "@/assets/img/blog/blog-big-2.jpg";

import artical_slider_1 from "@/assets/img/blog/blog-big-slider-1.jpg";
import artical_slider_2 from "@/assets/img/blog/blog-big-1.jpg";
import artical_slider_3 from "@/assets/img/blog/blog-big-2.jpg";

interface DataType {
  id: number;
  post_type: string;
  img?: StaticImageData | any;
  writer: string;
  category: string;
  comments: number;
  title: string;
  artical_data: string;
  thumb_img?: StaticImageData | any;
  slider_img?: StaticImageData[];
}[]

const artical_data: DataType[] = [
  {
    id: 1,
    post_type: "normal",
    img: artical_img_1,
    writer: "Tecz",
    category: "Solution",
    comments: 27,
    title: "A Quick Solution For Your Business",
    artical_data: "Curabitur luctus euismod metus, eu pellentesque mauris tempus sit amet. Proin ante odio, posuere id lacus auctor, elementum tempor tellus. Integer mattis justo eu enim tempus lacinia. Fusce vitae enim diam. Ut commodo viverra magna non egestas. Integer sodales ",
  },
  {
    id: 2,
    post_type: "video",
    thumb_img: artical_img_2,
    writer: "Jamil",
    category: "IT Solution",
    comments: 17,
    title: "In a stricter however, an IT solution",
    artical_data: "Curabitur luctus euismod metus, eu pellentesque mauris tempus sit amet. Proin ante odio, posuere id lacus auctor, elementum tempor tellus. Integer mattis justo eu enim tempus lacinia. Fusce vitae enim diam. Ut commodo viverra magna non egestas. Integer sodales ",
  },
  {
    id: 3,
    post_type: "slider",
    slider_img: [
      artical_slider_1,
      artical_slider_2,
      artical_slider_3,
    ],
    writer: "Hasan",
    category: "Solution",
    comments: 37,
    title: "Internet expands possibilities for IT",
    artical_data: "Curabitur luctus euismod metus, eu pellentesque mauris tempus sit amet. Proin ante odio, posuere id lacus auctor, elementum tempor tellus. Integer mattis justo eu enim tempus lacinia. Fusce vitae enim diam. Ut commodo viverra magna non egestas. Integer sodales ",
  },
  // for pagination 
  {
    id: 1,
    post_type: "video",
    thumb_img: artical_img_2,
    writer: "Jamil",
    category: "IT Solution",
    comments: 17,
    title: "In a stricter however, an IT solution",
    artical_data: "Curabitur luctus euismod metus, eu pellentesque mauris tempus sit amet. Proin ante odio, posuere id lacus auctor, elementum tempor tellus. Integer mattis justo eu enim tempus lacinia. Fusce vitae enim diam. Ut commodo viverra magna non egestas. Integer sodales ",
  },
  {
    id: 2,
    post_type: "slider",
    slider_img: [
      artical_slider_1,
      artical_slider_2,
      artical_slider_3,
    ],
    writer: "Hasan",
    category: "Solution",
    comments: 37,
    title: "Internet expands possibilities for IT",
    artical_data: "Curabitur luctus euismod metus, eu pellentesque mauris tempus sit amet. Proin ante odio, posuere id lacus auctor, elementum tempor tellus. Integer mattis justo eu enim tempus lacinia. Fusce vitae enim diam. Ut commodo viverra magna non egestas. Integer sodales ",
  },
  {
    id: 3,
    post_type: "normal",
    img: artical_img_1,
    writer: "Tecz",
    category: "Solution",
    comments: 27,
    title: "A Quick Solution For Your Business",
    artical_data: "Curabitur luctus euismod metus, eu pellentesque mauris tempus sit amet. Proin ante odio, posuere id lacus auctor, elementum tempor tellus. Integer mattis justo eu enim tempus lacinia. Fusce vitae enim diam. Ut commodo viverra magna non egestas. Integer sodales ",
  },
  // page 3 pagination
  {
    id: 1,
    post_type: "slider",
    slider_img: [
      artical_slider_1,
      artical_slider_2,
      artical_slider_3,
    ],
    writer: "Hasan",
    category: "Solution",
    comments: 37,
    title: "Internet expands possibilities for IT",
    artical_data: "Curabitur luctus euismod metus, eu pellentesque mauris tempus sit amet. Proin ante odio, posuere id lacus auctor, elementum tempor tellus. Integer mattis justo eu enim tempus lacinia. Fusce vitae enim diam. Ut commodo viverra magna non egestas. Integer sodales ",
  },
  {
    id: 2,
    post_type: "normal",
    img: artical_img_1,
    writer: "Tecz",
    category: "Solution",
    comments: 27,
    title: "A Quick Solution For Your Business",
    artical_data: "Curabitur luctus euismod metus, eu pellentesque mauris tempus sit amet. Proin ante odio, posuere id lacus auctor, elementum tempor tellus. Integer mattis justo eu enim tempus lacinia. Fusce vitae enim diam. Ut commodo viverra magna non egestas. Integer sodales ",
  },
  {
    id: 3,
    post_type: "video",
    thumb_img: artical_img_2,
    writer: "Jamil",
    category: "IT Solution",
    comments: 17,
    title: "In a stricter however, an IT solution",
    artical_data: "Curabitur luctus euismod metus, eu pellentesque mauris tempus sit amet. Proin ante odio, posuere id lacus auctor, elementum tempor tellus. Integer mattis justo eu enim tempus lacinia. Fusce vitae enim diam. Ut commodo viverra magna non egestas. Integer sodales ",
  },






]
export default artical_data