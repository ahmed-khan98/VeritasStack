'use client'
import Count from '@/components/common/Count';
import React from 'react';
import { RiTeamLine } from "react-icons/ri";
import { GoTrophy } from "react-icons/go";
import { TbUserStar } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";
interface DataType {
  id: number;
  icon: string | JSX.Element;
  counter_number: number;
  title: string;
}[]

const counter_data: DataType[] = [
  {
    id: 1,
    icon: <RiTeamLine size={80} color='#fff' />,
    counter_number: 70,
    title: "Team Members",
  },
  {
    id: 2,
    icon: <GoTrophy size={80} color='#fff'/>,
    counter_number: 6,
    title: "Winning Awards",
  },
  {
    id: 3,
    icon: <GoChecklist size={80} color='#fff'/>,
    counter_number: 1500,
    title: "Complete Project",
  },
  {
    id: 4,
    icon: <TbUserStar size={80} color='#fff' />,
    counter_number: 500,
    title: "Client Reviews",
  },
]
const CounterAreaHomeOne = () => {
  return (
    <>
      <section className="counter-area tp-counter-overlay pb-140 p-relative">
        <div className="tp-counter-bg" style={{ backgroundImage: `url(/assets/img/counter/counter-bg-1.jpg)` }}></div>
        <div className="container">
          <div className="row">
            {counter_data.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-3">
                <div className="tp-counter-item text-center mb-30">
                  <div className="tp-counter-item-icon">
                    {item.icon}
                  </div>
                  <div className="tp-counter-item-content">
                    <h3 className="tp-counter-item-count">
                      <span data-purecounter-duration="1" data-purecounter-end="3480"
                        className="purecounter"><Count number={item.counter_number} add_style={true} /></span>
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

export default CounterAreaHomeOne;