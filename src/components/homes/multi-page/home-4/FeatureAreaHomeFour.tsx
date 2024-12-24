import React from 'react'; 

interface DataType {
  id: number;
  icon: string;
  title: string;
  sm_des: string;
}[]
const feature_data: DataType[] = [
  {
    id: 1,
    icon: "flaticon-product-design",
    title: "Product <br /> Designing",
    sm_des: "Donec felis sapien, lacinia at pulvinar quis, interdum ut purus. Phafringilla dolor sit amet liscelerisque",
  },
  {
    id: 2,
    icon: "flaticon-solution",
    title: "Custom <br /> Solution",
    sm_des: "Donec felis sapien, lacinia at pulvinar quis, interdum ut purus. Phafringilla dolor sit amet liscelerisque",
  },
  {
    id: 3,
    icon: "flaticon-technology",
    title: "Tech <br /> Outsource",
    sm_des: "Donec felis sapien, lacinia at pulvinar quis, interdum ut purus. Phafringilla dolor sit amet liscelerisque",
  },
]

const FeatureAreaHomeFour = () => {
  return (
    <>
      <section className="feature-area pb-40">
        <div className="container">
          <div className="row">
            {feature_data.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-feature-4-item mb-80">
                  <div className="tp-feature-4-thumb" style={{ backgroundImage: `url(/assets/img/feature/four/feature-4-thumb-1.jpg)` }}>
                  </div>
                  <div className="tp-feature-4-item-wrapper">
                    <div className="tp-feature-4-item-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tp-feature-4-item-content">
                      <h4 className="tp-feature-4-item-title" dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                      <p>{item.sm_des}</p>
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

export default FeatureAreaHomeFour;