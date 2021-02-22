/* eslint-disable jsx-a11y/anchor-is-valid */
import draftToHtml from "draftjs-to-html";
import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Card, CardBody, TabContent, TabPane } from "reactstrap";
export default function HighLights({ notifs, articles }) {
  const [tabs, setTabs] = useState(1);
  return (
    <div>
      <section
        className="probootstrap-section probootstrap-section-colored probootstrap-bg probootstrap-custom-heading probootstrap-tab-section text-center"
        style={{ backgroundImage: "url(img/slider_2.jpg)" }}
      >
        <ScrollAnimation animateIn="fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center section-heading ">
                <h2 className="mb0">Highlights</h2>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="probootstrap-tab-style-1">
          <ul
            className="nav nav-tabs probootstrap-center probootstrap-tabs no-border"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <li
              className={tabs == 1 ? "active" : ""}
              onClick={() => setTabs(1)}
            >
              <a data-toggle="tab" style={{ cursor: "pointer" }}>
                Latest Notifications
              </a>
            </li>
            <li
              className={tabs == 2 ? "active" : ""}
              onClick={() => setTabs(2)}
            >
              <a data-toggle="tab" style={{ cursor: "pointer" }}>
                Articles
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + tabs}>
              <TabPane tabId="tabs1">
                {" "}
                <div id="latest-notifications">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="item-div pt-3">
                        {notifs.map((el, idx) => (
                          <div
                            className="item"
                            style={{ minWidth: "250px" }}
                            key={idx}
                          >
                            <a
                              href="#"
                              style={{ width: "100%" }}
                              className="probootstrap-featured-news-box"
                            >
                              <div className="probootstrap-text">
                                <h3>{el.title}</h3>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: draftToHtml(el.content),
                                  }}
                                ></div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="tabs2">
                <div id="articles">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="item-div pt-3">
                        {articles.map((el, idx) => (
                          <div
                            className="item"
                            style={{ minWidth: "250px" }}
                            key={idx}
                          >
                            <a
                              href="#"
                              style={{ width: "100%" }}
                              className="probootstrap-featured-news-box"
                            >
                              <div className="probootstrap-text">
                                <h3>{el.title}</h3>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: draftToHtml(el.content),
                                  }}
                                ></div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>{" "}
      </section>
    </div>
  );
}
