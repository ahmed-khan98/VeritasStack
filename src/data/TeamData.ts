

import { StaticImageData } from "next/image";
import team_avatar_1 from "@/assets/img/team/four/team-4-thumb-2.jpg";
import team_avatar_2 from "@/assets/img/team/team-2-thumb-1.jpg";
import team_avatar_3 from "@/assets/img/team/team-2-thumb-3.jpg";
import team_avatar_4 from "@/assets/img/team/team-2-thumb-4.jpg";

import team_avatar_3_1 from "@/assets/img/team/team-3-thumb-1.jpg";
import team_avatar_3_2 from "@/assets/img/team/team-3-thumb-2.jpg";
import team_avatar_3_3 from "@/assets/img/team/team-3-thumb-3.jpg";
import team_avatar_3_4 from "@/assets/img/team/team-3-thumb-4.jpg";
import team_avatar_3_5 from "@/assets/img/team/four/team-4-thumb-3.jpg";
import team_avatar_3_6 from "@/assets/img/team/team-2-thumb-3.jpg";

import team_avatar_4_1 from "@/assets/img/team/four/team-4-thumb-1.jpg";
import team_avatar_4_2 from "@/assets/img/team/four/team-4-thumb-2.jpg";
import team_avatar_4_3 from "@/assets/img/team/four/team-4-thumb-3.jpg";
import team_avatar_4_4 from "@/assets/img/team/four/team-4-thumb-4.jpg";

interface DataType {
  id: number;
  img: StaticImageData;
  name: string;
  job_title: string;
  page: string;
}[]

const team_data: DataType[] = [
  {
    id: 1,
    img: team_avatar_1,
    name: "Farza Leo",
    job_title: "CEO & Fonder",
    page: 'home_2'
  },
  {
    id: 2,
    img: team_avatar_2,
    name: "David Backhum",
    job_title: "CEO & Fonder",
    page: 'home_2'
  },
  {
    id: 3,
    img: team_avatar_3,
    name: "Jessica Chueo",
    job_title: "CEO & Fonder",
    page: 'home_2'
  },
  {
    id: 4,
    img: team_avatar_4,
    name: "David Leo",
    job_title: "CEO & Fonder",
    page: 'home_2'
  },
  // for home 03
  {
    id: 1,
    img: team_avatar_3_1,
    name: "David Backhum",
    job_title: "CEO & Fonder",
    page: 'home_3'
  },
  {
    id: 2,
    img: team_avatar_3_2,
    name: "Ketty Williams",
    job_title: "Ui/Ux Designer",
    page: 'home_3'
  },
  {
    id: 3,
    img: team_avatar_3_3,
    name: "Harry Newman",
    job_title: "Frontend Developer",
    page: 'home_3'
  },
  {
    id: 4,
    img: team_avatar_3_6,
    name: "James Taylor",
    job_title: "Wordpress Developer",
    page: 'home_3'
  },
  // for swiper 
  {
    id: 5,
    img: team_avatar_3_4,
    name: "David Backhum",
    job_title: "CEO & Fonder",
    page: 'home_3'
  },
  {
    id: 6,
    img: team_avatar_3_5,
    name: "Ketty Williams",
    job_title: "Ui/Ux Designer",
    page: 'home_3'
  },
  {
    id: 7,
    img: team_avatar_3_1,
    name: "Harry Newman",
    job_title: "Frontend Developer",
    page: 'home_3'
  },
  {
    id: 8,
    img: team_avatar_3_2,
    name: "James Taylor",
    job_title: "Wordpress Developer",
    page: 'home_3'
  },
  // home 04
  {
    id: 1,
    img: team_avatar_4_1,
    name: "David Backhum",
    job_title: "CEO & Founder",
    page: 'home_4'
  },
  {
    id: 2,
    img: team_avatar_4_2,
    name: "Ileana Dcruz",
    job_title: "Developer",
    page: 'home_4'
  },
  {
    id: 3,
    img: team_avatar_4_3,
    name: "Leslie Alexander",
    job_title: "Web Developer",
    page: 'home_4'
  },
  {
    id: 4,
    img: team_avatar_4_4,
    name: "Leslie Alexander",
    job_title: "Web Developer",
    page: 'home_4'
  },





]
export default team_data