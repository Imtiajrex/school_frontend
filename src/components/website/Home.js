import React from "react";

import Teachers from "./home/Teachers";
import Testimonial from "./home/Testimonial";
import Specialty from "./home/Specialty";
import Footer from "./home/Footer";
import TopBar from "./home/TopBar";
import NavBar from "./home/NavBar";
import Slideshow from "./home/Slideshow";
import Welcome from "./home/Welcome";
import Figures from "./home/Figures";
import HighLights from "./home/HighLights";
import Albums from "./home/Albums";

import "./css/custom.css";
export default function Home({ data }) {
  const {
    pages,
    sub_pages,
    slides,
    about_school,
    figure,
    notifs,
    teachers,
    content,
    testimonial,
    specialty,
    school_info,
    albums,
  } = data;
  return (
    <div class="probootstrap-page-wrapper">
      <TopBar institute_info={school_info} />
      <NavBar
        pages={pages}
        sub_pages={sub_pages}
        institute_info={school_info}
      />
      <Slideshow slides={slides} />
      <Welcome about_school={about_school} institute_info={school_info} />
      <Figures figure={figure} />
      <HighLights notifs={notifs} articles={content} />
      <Albums albums={albums} />
      <Teachers teachers={teachers} />
      <Testimonial testimonial={testimonial} />
      <Specialty specialty={specialty} institute_info={school_info} />
      <Footer
        institute_info={school_info}
        about_school={about_school}
        pages={pages}
      />
    </div>
  );
}
