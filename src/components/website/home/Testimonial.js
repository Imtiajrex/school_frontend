import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ReactOwlCarousel from "react-owl-carousel";

export default function Testimonial({ testimonial }) {
  return (
    <section
      className="probootstrap-section probootstrap-bg probootstrap-section-colored probootstrap-testimonial"
      style={{ backgroundImage: "url(img/slider_4.jpg)" }}
    >
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-6 col-md-offset-3 text-center section-heading ">
            <h2>Alumni Testimonial</h2>
            <p className="lead">What Alumnis Say About Us!</p>
          </div>
        </div>
        {/* END row */}

        <ScrollAnimation animateIn="fadeInDown">
          <div className="row">
            <div className="col-md-12 ">
              <ReactOwlCarousel items={1} loop nav>
                {testimonial.map((el, idx) => (
                  <div className="item" key={idx}>
                    <div className="probootstrap-testimony-wrap text-center">
                      <figure>
                        <img
                          src={
                            process.env.REACT_APP_IMAGE_PATH + "/" + el.image
                          }
                          alt="Testimonial User"
                        />
                      </figure>
                      <blockquote className="quote">
                        {el.content}
                        <cite className="author">
                          {" "}
                          — <span>{el.name}</span>
                        </cite>
                      </blockquote>
                    </div>
                  </div>
                ))}
              </ReactOwlCarousel>
            </div>
          </div>
        </ScrollAnimation>
        {/* END row */}
      </div>
    </section>
  );
}
