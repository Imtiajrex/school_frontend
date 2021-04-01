import React from "react";
import ReactOwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function Slideshow({ slides }) {
  return (
    <section className="flexslider">
      <ReactOwlCarousel
        className="owl-theme"
        loop
        nav
        items={1}
        autoplay={true}
        autoPlay={true}
        autoplayTimeout={1500}
        autoplayHoverPause={true}
      >
        {slides.map((el, idx) => (
          <div class="item" key={idx}>
            <img
              src={process.env.REACT_APP_IMAGE_PATH + "/" + el.image_name}
              alt="gallery"
            />
            <div className="slide-caption">
              <p className="text-white">{el.caption}</p>
            </div>
          </div>
        ))}
      </ReactOwlCarousel>
    </section>
  );
}
