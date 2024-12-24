import { StaticImageData } from "next/image";
import shop_img_1 from "@/assets/img/shop/product-1.jpg";
import shop_img_2 from "@/assets/img/shop/product-2.jpg";
import shop_img_3 from "@/assets/img/shop/product-3.jpg";
import shop_img_4 from "@/assets/img/shop/product-4.jpg";
import shop_img_5 from "@/assets/img/shop/product-5.jpg";
import shop_img_6 from "@/assets/img/shop/product-6.jpg";
import shop_img_7 from "@/assets/img/shop/product-7.jpg";
import shop_img_8 from "@/assets/img/shop/product-9.jpg";

interface DataType {
  id: number;
  img: StaticImageData;
  tag: string;
  category: string;
  title: string;
  old_price?: number;
  new_price: number;
  ratting: number;
  total_items: number,
}   

const shop_data: DataType[] = [
  {
    id: 1,
    img: shop_img_1,
    tag: "Content",
    category: "Product Designing",
    title: "Running Trainers",
    old_price: 400,
    new_price: 350,
    ratting: 5,
    total_items: 15,
  },
  {
    id: 2,
    img: shop_img_2,
    tag: "Design",
    category: "Software",
    title: "Classic Chair",
    new_price: 245,
    ratting: 5,
    total_items: 15,
  },

  {
    id: 3,
    img: shop_img_3,
    tag: "Development",
    category: "Product Designing",
    title: "Skull Print T-Shirt",
    new_price: 115,
    ratting: 4,
    total_items: 15,
  },

  {
    id: 4,
    img: shop_img_4,
    tag: "Ui/Ux",
    category: "Development",
    title: "Bomber Jacket", 
    new_price: 80,
    ratting: 5,
    total_items: 15,
  },
  {
    id: 5,
    img: shop_img_5,
    tag: "Tech",
    category: "Development",
    title: "Mute Lodger",
    old_price: 48,
    new_price: 38,
    ratting: 3,
    total_items: 15,
  },
  {
    id: 6,
    img: shop_img_6,
    tag: "Innovation",
    category: "Technology",
    title: "Coffee Mug",
    old_price: 10,
    new_price: 8,
    ratting: 5,
    total_items: 15,
  },
  {
    id: 7,
    img: shop_img_7,
    tag: "Content",
    category: "Development",
    title: "Yellow Bag",
    old_price: 30,
    new_price: 20,
    ratting: 4,
    total_items: 15,
  },
  {
    id: 8,
    img: shop_img_1,
    tag: "Innovation",
    category: "Technology",
    title: "Awesome Cap", 
    new_price: 14,
    ratting: 5,
    total_items: 15,
  },
  {
    id: 9,
    img: shop_img_8,
    tag: "Design",
    category: "Development",
    title: "Alarm clock Ringtones", 
    new_price: 22,
    ratting: 5,
    total_items: 15,
  },
  // projeects for pagination 
  {
    id: 10,
    img: shop_img_7,
    tag: "Content",
    category: "Innovations",
    title: "Running Trainers",
    old_price: 400,
    new_price: 350,
    ratting: 4,
    total_items: 15,
  },
  {
    id: 11,
    img: shop_img_4,
    tag: "Content",
    category: "Development",
    title: "Classic Chair",
    new_price: 45,
    ratting: 5,
    total_items: 15,
  },

  {
    id: 12,
    img: shop_img_1,
    tag: "Design",
    category: "Software",
    title: "Skull Print T-Shirt",
    new_price: 115,
    ratting: 4,
    total_items: 15,
  },

  {
    id: 13,
    img: shop_img_6,
    tag: "Development",
    category: "Innovations",
    title: "Bomber Jacket", 
    new_price: 80,
    ratting: 5,
    total_items: 15,
  },
  {
    id: 14,
    img: shop_img_7,
    tag: "Ui/Ux",
    category: "Development",
    title: "Mute Lodger",
    old_price: 700,
    new_price: 500,
    ratting: 3,
    total_items: 15,
  },
  {
    id: 15,
    img: shop_img_8,
    tag: "Development",
    category: "Product Designing",
    title: "Coffee Mug",
    old_price: 10,
    new_price: 8,
    ratting: 5,
    total_items: 15,
  },
  {
    id: 16,
    img: shop_img_2,
    tag: "Innovation",
    category: "Web Design",
    title: "Yellow Bag",
    old_price: 8,
    new_price: 5,
    ratting: 5,
    total_items: 15,
  },
  {
    id: 17,
    img: shop_img_3,
    tag: "Tech",
    category: "Innovations",
    title: "Awesome Cap", 
    new_price: 14,
    ratting: 3,
    total_items: 15,
  },
  {
    id: 18,
    img: shop_img_1,
    tag: "Ui/Ux",
    category: "Web Design",
    title: "Alarm clock Ringtones", 
    new_price: 20,
    ratting: 4,
    total_items: 15,
  },
]
export default shop_data