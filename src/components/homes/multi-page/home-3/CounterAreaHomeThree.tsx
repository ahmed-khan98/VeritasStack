
import Count from '@/components/common/Count';
import React from 'react';

interface DataType {
  id: number;
  icon: string;
  counter_number: number ;
  title: string;
}[]

const counter_data: DataType[] = [
  {
    id: 1,
    icon: "flaticon-project-management",
    counter_number: 1500,
    title: "Project Completed",
  },
  {
    id: 2,
    icon: "flaticon-consultant",
    counter_number: 1500,
    title: "Of customers worldwide",
  },
  {
    id: 3,
    icon: "flaticon-healthcare",
    counter_number: 6,
    title: "Countries with active client base",
  },
  {
    id: 4,
    icon: "flaticon-solution-1",
    counter_number: 4.9,
    title: "Customer rating",
  },
]
const CounterAreaHomeThree = () => {
  return (
    <>
      <section className="counter-area tp-counter-3-bg" style={{ backgroundImage: `url(/assets/img/counter/counter-3-bg-1.jpg)` }}>
        <div className="container">
          <div className="row">
            {counter_data.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-6">
                <div className="tp-counter-3-item text-center pb-50">
                  <div className="tp-counter-3-item-icon">
                    <div className="tp-counter-3-item-icon-border">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className="tp-counter-3-item-content">
                    <h3 className="tp-counter-3-item-count">
                      <span data-purecounter-duration="1" data-purecounter-end="3480" className="purecounter">
                        {item.counter_number}
                        {/* <Count number={item.counter_number} add_style={true} /> */}
                      </span>
                    </h3>
                    <p>{item.title}</p>
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

export default CounterAreaHomeThree;