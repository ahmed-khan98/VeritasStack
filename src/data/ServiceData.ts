import { StaticImageData } from "next/image";

import service_img_1 from "@/assets/img/services/one/services-avater-1.png";
import service_img_2 from "@/assets/img/services/one/services-avater-2.png";
import service_img_3 from "@/assets/img/services/one/services-avater-3.png"; 

interface  DataType{
  id: number;
  alphabet?: string;
  page: string;
  img?: StaticImageData | any ;
  icon?: string | any;
  title: string;
  sm_info: string;
}[]

const service_data: DataType[] = [
  {
    id: 1,
    alphabet: "G",
    page: "home_1",
    img: service_img_1,
    title: "Gaming and <br /> Entertainment",
    sm_info:  "Sed et aliquam lectus. Etiam augulectus Suspendisse eget orci conv dignissim nibh eget, blandit lacus",
  },
  {
    id: 2,
    alphabet: "B",
    page: "home_1",
    img: service_img_2,
    title: "Business and <br />Finance",
    sm_info:  "Sed et aliquam lectus. Etiam augulectus Suspendisse eget orci conv dignissim nibh eget, blandit lacus",
  },
  {
    id: 3,
    alphabet: "R",
    page: "home_1",
    img: service_img_3,
    title: "Retails and <br /> Distribution",
    sm_info:  "Sed et aliquam lectus. Etiam augulectus Suspendisse eget orci conv dignissim nibh eget, blandit lacus",
  },
  // for home 04 
  {
    id: 1, 
    page: "home_4",
    icon: "flaticon-ux-design",
    title: "Ui/Ux <br /> Designing",
    sm_info:  "We use the mobile apps feature of azure App service to rapidly build engaging cross-platforms and native apps for iOS, android",
  },
  {
    id: 2, 
    page: "home_4",
    icon: "flaticon-data-visualization",
    title: "Data <br /> Visualizaion",
    sm_info:  "We use the mobile apps feature of azure App service to rapidly build engaging cross-platforms and native apps for iOS, android",
  },
  {
    id: 3, 
    page: "home_4",
    icon: "flaticon-search-engine",
    title: "Marketing <br /> Strategy",
    sm_info:  "We use the mobile apps feature of azure App service to rapidly build engaging cross-platforms and native apps for iOS, android",
  },
  {
    id: 4, 
    page: "home_4",
    icon: "flaticon-project-management",
    title: "Business <br /> Strategy",
    sm_info:  "We use the mobile apps feature of azure App service to rapidly build engaging cross-platforms and native apps for iOS, android",
  },

]
export default service_data