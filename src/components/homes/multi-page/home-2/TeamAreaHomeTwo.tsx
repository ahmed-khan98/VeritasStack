
import React from 'react';
import Image from 'next/image';

import team_thumb_1 from "@/assets/img/team/four/team-4-thumb-2.jpg";
import team_thumb_2 from "@/assets/img/team/four/team-4-thumb-1.jpg";
import team_thumb_3 from "@/assets/img/team/four/team-4-thumb-3.jpg";
import team_thumb_4 from "@/assets/img/team/four/team-4-thumb-4.jpg";
import team_data from '@/data/TeamData';
import Link from 'next/link';
import { TeamSocialLinks } from '@/components/common/SocialLinks';


const team_content = {
  sub_title: "Meet With Our Specialist",
  title: <>Team that Builds Ideas Driven <br /> by the Future</>,
}
const { sub_title, title } = team_content

const TeamAreaHomeTwo = ({ onPageStyle }: any) => {
  return (
    <>
      <section id="team-one-page" className={`team-area tp-team-two-wrap pb-80 ${onPageStyle ? "pt-55" : ""}`}>
        <div className="container tp-team-two-width">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section tp-section-two text-center mb-55">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {team_data.map((item, i) =>
              <>
                {item.page === "home_2" &&
                  <div key={i} className="col-lg-3 col-md-6">
                    <div className="tp-team-two-item mb-40 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">
                      <div className="tp-team-two-thumb tp-thumb-common fix">
                        <div className="tp-thumb-common-overlay wow"></div>
                        <Image src={item.img} alt="image-title" />
                      </div>
                      <div className="tp-team-two-content">
                        <h4 className="tp-team-two-title"><Link href="/team-details">{item.name}</Link></h4>
                        <span>{item.job_title}</span>
                        <div className="tp-team-two-social">
                          <TeamSocialLinks />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamAreaHomeTwo;