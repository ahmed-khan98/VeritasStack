
import React from 'react';
import Image from 'next/image';
import avatar_img from "@/assets/img/team/details/team-details-thumb-1.jpg";
import { SocialLinksTwo } from '@/components/common/SocialLinks';

interface DataType {
  name: string;
  job_title: string;
  info: string;
  developer_info: {
      id: number;
      title: string;
      info: string;
      target: string;
  }[];
  title_1: string;
  title_2: string; 
  des_1: string; 
  des_2: string; 
  des_3: JSX.Element; 
  des_4: string; 
  des_5: string; 
  des_6: string; 
  des_7: string;
}

const team_details_content: DataType = {
  name: "Liza Olivarez",
  job_title: "Backend Developer",
  info: "This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service",
  developer_info: [
    {
      id: 1,
      title: "Responsibility",
      info: "Development",
      target: "#",
    },
    {
      id: 2,
      title: "Email Address",
      info: "teczonfo@gmail.com",
      target: "mailto:teczonfo@gmail.com",
    },
    {
      id: 3,
      title: "Phone Number",
      info: "+1 888 098-90987",
      target: "tel:01234567",
    },
    {
      id: 4,
      title: "Web Address",
      info: "www.yourdomain.com",
      target: "www.yourdomain.com",
    },
  ],
  title_1: "Personal Information",
  title_2: "Personal Experience", 
  des_1: "Since joining Tecz in 2009, Matilda has helped turn the company from a group of bright technology minds working with startups into a global Digital Product Engineering Services leader helping Fortune 500 companies on their innovation agenda. In Matilda`s time as President and CEO of company, the company has experienced explosive growth in size and revenue - all while developing a culture that fosters engaged employees around innovation.",
  des_2: "Matilda is a frequent speaker on the topics of global innovation and digital disruption. She is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels, or reading in his home library.",
  des_3: <>If you are going to use a passage of Lorem Ipsum, you need to be <br /> all while developing a culture that fosters </>,
  des_4: "He is a services industry veteran with a diversified wealth of expertise that includes worldwide operations, delivery, process improvements, mergers and acquisitions, and integration, as well as sales and business development.",
  des_5: "He is responsible for all delivery, operations, talent recruitment and management, and information technology. Matilda is a frequent speaker on the topics of global innovation and digital disruption",
  des_6: "Prior to joining company, she spent 20+ years at Inmosys, where he held a wide range of global leadership roles, from services to products, and across operations and sales. Most recently, he was SVP & Global Head of the Manufacturing business, as well as a board member of their software subsidiary. He is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels.",
  des_7: "She is responsible for all delivery, operations, talent recruitment and management, and information technology. She is responsible for the alignment and prioritization of company investments — enabling growth, consistency, efficiency.",
   

}
const { name, job_title, info, developer_info, title_1, title_2, des_1, des_2, des_3, des_4, des_5, des_6, des_7} = team_details_content

const TeamDetailsArea = () => {
  return (
    <>
      <section className="team-detals-area pt-120 pb-5">
        <div className="container">
          <div className="tp-team-details-head">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-team-details-avatar-wrap d-flex align-items-center mb-75">
                  <div className="tp-team-details-thumb">
                    <Image src={avatar_img} alt="image" />
                  </div>
                  <div className="tp-team-details-avatar">
                    <h4 className="tp-team-details-avatar-title">{name}</h4>
                    <span>{job_title}</span>
                    <p>{info}</p>
                    <div className="tp-team-details-avatar-list mb-35">
                      <ul>
                        {developer_info.map((item, i) =>
                          <li key={i}><span>{item.title}:</span>
                            {i === 0 ? item.info : <a href={item.target} target='_blank'>{item.info}</a>}
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="tp-team-details-avatar-social">
                      <SocialLinksTwo /> 
                    </div>
                  </div>
                </div>
                <div className="tp-team-details-info mb-45">
                  <h4 className="tp-team-details-info-title mb-25">{title_1}</h4>
                  <p>{des_1}</p>
                  <p>{des_2}</p>
                </div>
                <div className="tp-team-details-elaborate mb-55">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="tp-team-details-elaborate-wrap mr-70">
                        <h4 className="tp-team-details-info-title mb-30">{title_2}</h4>
                        <p>{des_3}</p>
                        <div className="tp-team-details-progress-wrap mt-40">
                          <div className="tp-team-details-progress-item">
                            <p>Development</p>
                            <div className="progress" role="progressbar" aria-label="Example with label"
                              aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                              <div className="progress-bar" style={{ width: "90%" }}><span>90%</span></div>
                            </div>
                          </div>
                          <div className="tp-team-details-progress-item">
                            <p>Software</p>
                            <div className="progress" role="progressbar" aria-label="Example with label"
                              aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                              <div className="progress-bar" style={{ width: "50%" }}><span>50%</span></div>
                            </div>
                          </div>
                          <div className="tp-team-details-progress-item">
                            <p>Technology</p>
                            <div className="progress" role="progressbar" aria-label="Example with label"
                              aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                              <div className="progress-bar" style={{ width: "80%" }}><span>80%</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tp-team-details-elaborate-wrap">
                        <h4 className="tp-team-details-info-title mb-30">Early Years</h4>
                        <p>{des_4}</p>
                        <p>{des_5}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-team-details-info mb-45">
                  <h4 className="tp-team-details-info-title mb-25">Future Solution</h4>
                  <p>{des_6}</p>
                  <p>{des_7}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsArea;