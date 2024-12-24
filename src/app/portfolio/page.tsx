import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import Error from "@/components/error";
import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderTwo from "@/layout/headers/HeaderTwo";
import Link from "next/link";
import ProjectArea from "@/components/inner-pages/project/ProjectArea";

 
export const metadata = {
  title: "Portfolio - Veritas Stack LLC",
};
const index = () => {
  return (
    <Wrapper>
        <HeaderTwo />
      <Breadcrumb top_title='Projects' title='Our Project'/>
      <ProjectArea/>
      <FooterOne />
    </Wrapper>
  );
};

export default index;