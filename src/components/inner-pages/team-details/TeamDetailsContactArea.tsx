import TeamContactForm from '@/components/forms/TeamContactForm';
import React from 'react';

const team_content  = {
  sub_title: "Let's Get in Touch",
  title: "Your email address will not be published. Required fields are marked *",
}
const {sub_title, title} = team_content

const TeamDetailsContactArea = () => {
  return (
    <>
      <section className="contact-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-details-form">
                <h4 className="tp-team-details-info-title">{sub_title}</h4>
                <p>{title}</p>
                <div className="tp-team-details-form-wrap">
                  <TeamContactForm /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsContactArea;