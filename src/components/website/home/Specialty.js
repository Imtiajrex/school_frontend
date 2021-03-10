/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Specialty({ specialty, institute_info }) {
  return (
    <>
      <section className="probootstrap-section">
        <div className="container">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-md-6 col-md-offset-3 text-center section-heading ">
                <h2>Why Choose {institute_info.institute_name}</h2>
                <p className="lead">
                  Reasons to choose Our School over others!
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <div className="row">
              {specialty.map((el, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="service left-icon ">
                    <div className="icon">
                      <i className="icon-checkmark" />
                    </div>
                    <div className="text">
                      <h3>{el.title}</h3>
                      <p>{el.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
          {/* END row */}
        </div>
      </section>

      <section className="probootstrap-cta">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ScrollAnimation animateIn="fadeInRight">
                <h2 className="" data-animate-effect="fadeInRight">
                  Get your admission now!
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft">
                <a
                  href="#"
                  role="button"
                  className="btn btn-primary btn-lg btn-ghost"
                >
                  Enroll
                </a>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
