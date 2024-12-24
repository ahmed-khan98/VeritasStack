import Error from "@/components/error";
import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderTwo from "@/layout/headers/HeaderTwo";
import Link from "next/link";

 
export const metadata = {
  title: "Coming Soon -  Veritas Stack LLC",
};
const index = () => {
  return (
    <Wrapper>
        <HeaderTwo />
      <main>
        <section className="error-area tp-erorr-wrap">
          <div className="tp-erorr-bg" style={{backgroundImage: `url(/assets/img/thumbs/error-bg-1.jpg)`}}></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-erorr-content text-center">
                  <h4 className="tp-erorr-title">Comming <span>Soon</span></h4>
                  {/* <span>IN Progress</span> */}
                  {/* <p>IN Progress</p> */}
                  <Link className="tp-btn" href="/">Go Home <i className="fa-light fa-arrow-right ml-5"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;