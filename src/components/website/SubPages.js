import React, { useState } from "react";

import Footer from "./home/Footer";
import TopBar from "./home/TopBar";
import NavBar from "./home/NavBar";

import "./css/custom.css";
import { useParams } from "react-router-dom";
import Api from "services/API/Api";
import { Helmet } from "react-helmet";
import draftToHtml from "draftjs-to-html";
import { Spinner } from "reactstrap";
export default function SubPages({ data }) {
  const { pages, sub_pages, about_school, school_info } = data;
  let { id } = useParams();
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true);
  const [fail, setFail] = useState(false);
  React.useEffect(() => {
    setLoading(true);
    Api({ method: "get", url: "homepage/sub_pages?id=" + id })
      .then((res) => {
        setPage(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setFail(true);
        console.log(err);
      });
  }, [id]);
  React.useEffect(() => {
    setLoading(true);
    Api({ method: "get", url: "homepage/sub_pages?id=" + id })
      .then((res) => {
        setPage(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setFail(true);
        console.log(err);
      });
  }, []);
  return (
    <div class="probootstrap-page-wrapper">
      <Helmet>
        <title>{page.page_title}</title>
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
            <h1 className="text-white">{page.page_title}</h1>
          )}
          {fail ? (
            <h1 className="text-danger">Something Went Wrong! No Content!</h1>
          ) : null}
        </div>
      </div>
      {!loading ? (
        <div className="container-fluid">
          <div
            className="container pt-4 pb-4"
            dangerouslySetInnerHTML={{ __html: draftToHtml(page.page_content) }}
          ></div>
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
