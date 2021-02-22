/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";

export default function Figures({ figure }) {
  return figure.students != undefined ? (
    <ScrollAnimation animateIn="fadeIn">
      <section className="probootstrap-section" id="probootstrap-counter">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 ">
              <div
                className="probootstrap-counter-wrap"
                style={{ display: "flex" }}
              >
                <div className="probootstrap-icon">
                  <i className="icon-users2" />
                </div>
                <div className="probootstrap-text">
                  <span className="probootstrap-counter">
                    <CountUp end={figure.students} delay={3} />
                  </span>
                  <span className="probootstrap-counter-label">
                    Students Enrolled
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 ">
              <div className="probootstrap-counter-wrap">
                <div className="probootstrap-icon">
                  <i className="icon-user-tie" />
                </div>
                <div className="probootstrap-text">
                  <span className="probootstrap-counter">
                    <CountUp end={figure.teachers} delay={3} />
                  </span>
                  <span className="probootstrap-counter-label">
                    Certified Teachers
                  </span>
                </div>
              </div>
            </div>
            <div className="clearfix visible-sm-block visible-xs-block" />
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 ">
              <div className="probootstrap-counter-wrap">
                <div className="probootstrap-icon">
                  <i className="icon-library" />
                </div>
                <div className="probootstrap-text">
                  <span className="probootstrap-counter">
                    <CountUp end={figure.result} delay={3} />%
                  </span>
                  <span className="probootstrap-counter-label">Result</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 ">
              <div className="probootstrap-counter-wrap">
                <div className="probootstrap-icon">
                  <i className="icon-smile2" />
                </div>
                <div className="probootstrap-text">
                  <span className="probootstrap-counter">
                    <CountUp end={figure.parent_satisfaction} delay={3} />%
                  </span>
                  <span className="probootstrap-counter-label">
                    Parents Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  ) : null;
}
