/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./css/styles-merged.css";
import "./css/style.css";
import Api from "services/API/Api";
import FrontEndRouter from "./FrontEndRouter";
import Loading from "./img/loading.gif";

export default function Index() {
  const [school_info, setSchoolInfo] = useState({});
  const [pages, setPages] = useState([]);
  const [sub_pages, setSubPages] = useState([]);
  const [slides, setSlides] = useState([]);
  const [notifs, setNotifs] = useState([]);
  const [content, setContent] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [specialty, setSpecialty] = useState([]);
  const [about_school, setAboutSchool] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [figure, setFigure] = useState({});
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(0);

  React.useEffect(() => {
    Api({ method: "get", url: "homepage/institute_info" })
      .then((res) => {
        setSchoolInfo(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({ method: "get", url: "homepage/pages?menu=true" })
      .then((res) => {
        setPages(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({ method: "get", url: "homepage/sub_pages?menu=true" })
      .then((res) => {
        setSubPages(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({ method: "get", url: "homepage/slideshow" })
      .then((res) => {
        setSlides(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({ method: "get", url: "homepage/notifications?home=true" })
      .then((res) => {
        setNotifs(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({ method: "get", url: "homepage/homepage?home=true" })
      .then((res) => {
        setContent(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({ method: "get", url: "homepage/testimonial" })
      .then((res) => {
        setTestimonial(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({ method: "get", url: "homepage/school_specialty" })
      .then((res) => {
        setSpecialty(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({ method: "get", url: "homepage/about_school?home=true" })
      .then((res) => {
        setAboutSchool(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({
      method: "get",
      url: "homepage/employee?employee_type=teacher&home=true&limit=true",
    })
      .then((res) => {
        setTeachers(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({
      method: "get",
      url: "homepage/figure?home=true",
    })
      .then((res) => {
        setFigure(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
    Api({
      method: "get",
      url: "homepage/albums?home=true",
    })
      .then((res) => {
        setAlbums(res.data);
        setLoading((prev_state) => prev_state + 1);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="homepage">
      {loading >= 12 ? (
        <FrontEndRouter
          data={{
            school_info,
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
            albums,
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Loading} alt="loading" />
        </div>
      )}
    </div>
  );
}
