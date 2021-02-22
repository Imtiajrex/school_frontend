/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Welcome({ about_school, institute_info }) {
  return (
    <div>
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <ScrollAnimation animateIn="slideInLeft">
              <div className="col-md-12 text-left section-heading ">
                <h2>Welcome to {institute_info.institute_name}</h2>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="probootstrap-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ScrollAnimation animateIn="slideInUp">
                <div className="probootstrap-flex-block">
                  <div className="probootstrap-text ">
                    <h3>{about_school.title}</h3>
                    <p>{about_school.content}</p>
                  </div>
                  <div
                    className="probootstrap-image "
                    style={{
                      backgroundImage:
                        "url('" +
                        process.env.REACT_APP_IMAGE_PATH +
                        "/" +
                        about_school.image +
                        "')",
                    }}
                  ></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
