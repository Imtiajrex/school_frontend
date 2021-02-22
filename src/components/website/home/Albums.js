/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ReactOwlCarousel from "react-owl-carousel";
import { NavLink } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
export default function Albums({ albums }) {
  return (
    <div>
      <section className="probootstrap-section probootstrap-section-colored probootstrap-bg probootstrap-custom-heading probootstrap-tab-section text-center bg-danger">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center section-heading ">
                <h2 className="mb0">Albums</h2>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section>
        <Card className="shadow">
          <CardBody>
            <div id="albums">
              <div className="row">
                <div className="col-md-12">
                  <ReactOwlCarousel items={screen.width > 500 ? 3 : 1} loop nav>
                    {albums.map((el, idx) =>
                      el.image_name != null ? (
                        <NavLink to={"/albums/" + el.id} key={idx}>
                          <div className="item album">
                            <img
                              src={
                                process.env.REACT_APP_IMAGE_PATH +
                                "/" +
                                el.image_name
                              }
                              alt="Album"
                            />
                            <p className="text-center">{el.album_name}</p>
                          </div>
                        </NavLink>
                      ) : null
                    )}
                  </ReactOwlCarousel>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>{" "}
      </section>
    </div>
  );
}
