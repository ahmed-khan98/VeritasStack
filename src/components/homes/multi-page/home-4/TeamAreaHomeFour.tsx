import { TeamSocialLinks } from '@/components/common/SocialLinks';
import team_data from '@/data/TeamData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const team_content = {
  sub_title: "Meet With Our Specialist",
  title: <>Team that Builds Ideas Driven <br /> by the Future</>,
}
const { sub_title, title } = team_content

const TeamAreaHomeFour = ({onPageStyle}: any) => {
  const team_members = team_data.filter(menubar => menubar.page === "home_4")
  return (
    <> 
      <section className={`team-area tp-team-4-bg pt-115 ${onPageStyle? "" : "pb-55"}`}>
        <div className="container tp-team-4-width">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section tp-section-red text-center mb-50">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {team_members.map((item, i) =>
              <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="tp-team-4-item mb-40">
                  <div className="tp-team-4-thumb tp-thumb-common">
                    <div className="tp-thumb-common-overlay-red wow"></div>
                    <a href="#">
                      <Image src={item.img} style={{width: '100%', height: 'auto'}} alt="image-title" /></a>
                    <div className="tp-team-4-social">
                      <TeamSocialLinks />
                    </div>
                  </div>
                  <div className="tp-team-4-content d-flex align-items-center">
                    <div className="tp-team-4-icon-main">
                      <i className="flaticon-share"></i>
                    </div>
                    <div className="tp-team-4-content-text">
                      <h5 className="tp-team-4-title"><Link href="/team-details">{item.name}</Link></h5>
                      <p>{item.job_title}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamAreaHomeFour;