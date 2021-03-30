/* eslint-disable jsx-a11y/anchor-is-valid */
import draftToHtml from "draftjs-to-html";
import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function HighLights({ notifs, articles }) {
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

        <div className="articles-div">
          {articles.map((el, idx) => (
            <div className="article" key={idx}>
              <div className="article-title">{el.title}</div>
              <div
                className="article-content"
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(el.content),
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
