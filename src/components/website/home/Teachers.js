/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
export default function Teachers({ teachers }) {
  return (
    <div>
      <section className="probootstrap-section">
        <div className="container">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-md-6 col-md-offset-3 text-center section-heading ">
                <h2>Meet Our Qualified Teachers</h2>
                <p className="lead">
                  The teachers that shape your child are these.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          {/* END row */}
          <ScrollAnimation animateIn="fadeInDown">
            <div className="row" style={{ justifyContent: "center" }}>
              {teachers.map((el, idx) => (
                <div className="col-md-3 col-sm-6" key={idx}>
                  <div className="probootstrap-teacher text-center ">
                    <figure className="media">
                      <img
                        src={
                          process.env.REACT_APP_IMAGE_PATH +
                          "/" +
                          el.employee_image
                        }
                        alt="Teacher"
                        className="img-responsive"
                      />
                    </figure>
                    <div className="text">
                      <h3>{el.employee_name}</h3>
                      <p>{el.employee_post}</p>
                      <ul className="probootstrap-footer-social">
                        <a>{el.employee_primary_phone}</a>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <NavLink className="btn btn-success" to="/employees/Teacher">
                View All Teachers
              </NavLink>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
