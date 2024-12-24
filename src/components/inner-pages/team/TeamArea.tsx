
import { SocialLinksTwo } from '@/components/common/SocialLinks';
import team_data from '@/data/TeamData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type DataType = {
  sub_title: string;
  title: React.JSX.Element;
}
const team_content: DataType = {
  sub_title: "Meet With Our Specialist",
  title: <>Team that Builds Ideas Driven <br /> by the Future</>,
}
const {sub_title, title} = team_content

const TeamArea = () => {
  const team_members = team_data.filter((menubar => menubar.page === 'home_3'))
  return (
    <>
      <section className="team-area pt-115 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-3-wrapper text-center">
                <div className="tp-section tp-section-3 mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {team_members.slice(0, 6).map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-team-3-item mb-15">
                  <div className="tp-team-3-thumb">
                    <div className="tp-team-3-thumb-wrap tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <Image src={item.img} alt="image" />
                    </div>
                    <div className="tp-team-3-thumb-social">
                      <SocialLinksTwo /> 
                    </div>
                  </div>
                  <div className="tp-team-3-content">
                    <h5 className="tp-team-3-title">
                      <Link href="/team-details">{item.name}</Link></h5>
                    <span>{item.job_title}</span>
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

export default TeamArea;