import React, { useState } from "react";

import Footer from "./home/Footer";
import TopBar from "./home/TopBar";
import NavBar from "./home/NavBar";

import "./css/custom.css";
import { useParams } from "react-router-dom";
import Api from "services/API/Api";
import { Helmet } from "react-helmet";
import { Spinner } from "reactstrap";
import ReactOwlCarousel from "react-owl-carousel";
export default function Pages({ data }) {
  const { pages, sub_pages, about_school, school_info, albums = [] } = data;
  let { id } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fail, setFail] = useState(false);
  const [album_name, setAlbumName] = useState("");

  React.useEffect(() => {
    setLoading(true);
    Api({ method: "get", url: "homepage/gallery?album_id=" + id })
      .then((res) => {
        setImages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setFail(true);
        console.log(err);
      });
    let album_arr = albums.filter((el) => el.id == id);
    setAlbumName(album_arr.length > 0 ? album_arr[0].album_name : "");
  }, [id]);
  React.useEffect(() => {
    setLoading(true);
    Api({ method: "get", url: "homepage/gallery?album_id=" + id })
      .then((res) => {
        setImages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setFail(true);
        console.log(err);
      });
    let album_arr = albums.filter((el) => el.id == id);
    setAlbumName(album_arr.length > 0 ? album_arr[0].album_name : "");
  }, []);
  return (
    <div class="probootstrap-page-wrapper">
      <Helmet>
        <title>{album_name}</title>
      </Helmet>
      <TopBar institute_info={school_info} />
      <NavBar
        pages={pages}
        sub_pages={sub_pages}
        institute_info={school_info}
      />
      <div className="container-fluid bg-primary">
        <div className="container text-left  pt-5 pb-5">
          {loading ? (
            <Spinner size="lg" color="white" />
          ) : (
            <h1 className="text-white">{album_name}</h1>
          )}
          {fail ? (
            <h1 className="text-danger">Something Went Wrong! No Content!</h1>
          ) : null}
        </div>
      </div>
      {!loading ? (
        <div className="container-fluid">
          <div className="container pt-4 pb-4">
            <ReactOwlCarousel items={1} loop nav lazyLoad={true} dots>
              {images.map((el, idx) => (
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
          </div>
        </div>
      ) : null}
      <Footer
        institute_info={school_info}
        about_school={about_school}
        pages={pages}
      />
    </div>
  );
}
