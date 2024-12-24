'use client'
import { SocialLinksTwo } from '@/components/common/SocialLinks';
import Link from 'next/link';

type DataType = {
  title_1: string;
  title_2: string;
  title_3: string;
  info: React.JSX.Element;
  phone: string;
  email: string;
}

const hero_content: DataType = {
  title_1: "TECZ IT",
  title_2: "& CREATIVE",
  title_3: "SOLUTION",
  info: <>Web designing in a powerful way of just not an only <br /> professions, however, in a passion.</>,
  phone: "+2700 231 798 78",
  email: "teczhelp@gmail.com",
}
const { title_1, title_2, title_3, info, phone, email } = hero_content

const HeroAreaHomeOne = () => {
  return (
    <>
      <section id="video-bg" className="banner-area tp-banner-two-wrapper tp-banner-two-overlay p-relative test-xy">

        <div id="youtube-player" className="player">

        </div>


        <div className="tp-banner-two-bg" style={{ backgroundImage: `url(/assets/img/banner/two/banner-2-bg-1.jpg)` }}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-banner-two">
                <h2 className="tp-banner-two-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                  <span className="title-two-right-1">{title_1}</span> <br /> {title_2} <br />
                  <span className="title-two-right-2">{title_3}</span></h2>
                <div className="tp-banner-two-content d-flex align-items-center wow fadeInUp" data-wow-duration="1s"
                  data-wow-delay=".7s">
                  <p>{info}</p>
                  <div className="tp-banner-btn">
                    <Link className="tp-btn" href="/about">Discover More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-banner-social d-none d-lg-block">
          <a href={`tel:${phone}`}>{phone}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="tp-banner-two-social d-none d-md-block">
          <SocialLinksTwo />
        </div>

      </section>
    </>
  );
};

export default HeroAreaHomeOne;