import Link from "next/link";
import React from "react";

interface DataType {
  id: number;
  capital: string;
  icon: string;
  title: string;
  duration: string;
  info : string;
}
[];

const feature_data: DataType[] = [
  {
    id: 1,
    capital: "G",
    icon: "flaticon-ux-design",
    title: `UI / UX & Logo  Design`,
    duration: ".6s",
    info: "Veritas Stack LLC understands the needs of enhancing growth your business ideas by delivering the most amazing web designing services.",
  },
  {
    id: 2,
    capital: "B",
    icon: "flaticon-consultant",
    title: "Web Development",
    duration: ".5s",
    info: "Web Improvement Is The Work Engaged With Building Up A Site For The Internet (World Wide Web) Or An Intranet (A Private Network).",
  },
  {
    id: 3,
    capital: "W",
    icon: "flaticon-data-visualization",
    title: "App Development",
    duration: ".4s",
    info: "For clients that want custom mobile app development solution,Veritas Stack LLC offers unique, compatible,",
  },
  {
    id: 4,
    capital: "S",
    icon: "flaticon-technical-support",
    title: "Machine Learning",
    duration: ".6s",
    info: "Machine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage ",
  },
  {
    id: 5,
    capital: "U",
    icon: "flaticon-search-engine",
    title: "Accounting & Bookkeeping",
    duration: ".5s",
    info: "we specialize in simplifying bookkeeping for businesses of all sizes. Our expert team ensures your financial records are accurate, organized, and up-to-date, giving you the confidence to focus on growing your business.",
  },
];
const FeatureAreaHomeThree = () => {
  return (
    <>
      <div className="Our" style={{ textAlign: "center", paddingTop: "40px" }}>
        <h3
          style={{
            padding: "2px",
            color: "blue",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          ~ Our Awesome Services ~
        </h3>
        <h1
          style={{
            padding: "2px",
            color: "black",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          We Are <span style={{ color: "blue" }}>Dedicated </span>To <br />
          Serve You All Time.
        </h1>
      </div>
      <section
        className="feature-area tp-feature-3-bg"
        style={{
          backgroundImage: `url(/assets/img/feature/three/feature-3-bg-1.jpg) `,
          marginTop: "150px",
          height: "200px",
        }}
      >
        <div
          className="container"
          style={{ position: "relative", bottom: "220px" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-feature-3-wrapper d-flex align-items-center justify-content-between">
                {feature_data.map((item, i) => (
                  <div
                    key={i}
                    className="tp-feature-3-item text-center mb-60 wow bounceIn cursor-pointer"
                    data-wow-duration={item.duration}
                    data-wow-delay={item.duration}
                  >
                    <Link href="/services-details">
                      <div className="tp-feature-3-item-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tp-feature-3-item-content">
                        <h4 className="tp-feature-3-item-title">
                          {item.title}
                        </h4>
                        <span>{item.capital}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-feature-3-details text-center">
                <span>
                  IT Technology services built specifically for your business.
                  <Link href="/services-details">Find your solution</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureAreaHomeThree;
