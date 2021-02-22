/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import Footer from "./home/Footer";
import TopBar from "./home/TopBar";
import NavBar from "./home/NavBar";

import "./css/custom.css";
import { useParams } from "react-router-dom";
import Api from "services/API/Api";
import { Helmet } from "react-helmet";
import { Spinner } from "reactstrap";
export default function Employees({ data }) {
  const { pages, sub_pages, about_school, school_info } = data;
  let { employee_type } = useParams();
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true);
  const [fail, setFail] = useState(false);
  React.useEffect(() => {
    setLoading(true);
    Api({
      method: "get",
      url: "homepage/employee?home=true&employee_type=" + employee_type,
    })
      .then((res) => {
        setPage(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setFail(true);
        console.log(err);
      });
  }, [employee_type]);
  React.useEffect(() => {
    setLoading(true);
    Api({
      method: "get",
      url: "homepage/employee?home=true&employee_type=" + employee_type,
    })
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
        <title>{employee_type}</title>
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
            <h1 className="text-white">{employee_type}</h1>
          )}
          {fail ? (
            <h1 className="text-danger">Something Went Wrong! No Content!</h1>
          ) : null}
        </div>
      </div>
      {!loading ? (
        <div className="container-fluid">
          <div className="container pt-4 pb-4">
            <div className="row justify-center">
              {page.map((el, idx) => (
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
