
import project_data from '@/data/ProjectData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RelatedProject = () => {
  const related_items = project_data.filter(items => items.page === 'project_2')
  return (
    <>
      <section className="project-area tp-project-inner-2 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section mb-60">
                <h4 className="tp-section-title">Related Project</h4>
              </div>
            </div>
            {related_items.slice(0, 3).map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-project-4-item mb-30">
                  <div className="tp-project-4-item-thumb tp-thumb-common">
                    <div className="tp-thumb-common-overlay wow"></div>
                    <Image src={item.img} style={{width: '100%', height: 'auto'}} alt="image" />
                  </div>
                  <div className="tp-project-4-item-content">
                    <span>{item.tag}</span>
                    <h4 className="tp-project-4-title under-line-white">
                      <Link href="/project-details">{item.title}</Link>
                    </h4>
                  </div>
                  <div className="tp-project-4-arrow">
                    <Link href="/project-details"><i className="fa-regular fa-arrow-right"></i></Link>
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

export default RelatedProject;