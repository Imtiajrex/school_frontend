/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Footer({ about_school, institute_info, pages }) {
  return (
    <footer className="probootstrap-footer probootstrap-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="probootstrap-footer-widget">
              <h3>{about_school.title}</h3>
              <p>{about_school.content}</p>
              <h3>Social</h3>
              <ul className="probootstrap-footer-social">
                <li>
                  <a href={institute_info.institute_facebook}>
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a href={institute_info.institute_youtube}>
                    <i className="icon-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-md-push-1">
            <div className="probootstrap-footer-widget">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                {pages.map((el, idx) => (
                  <li key={idx}>
                    <a href={"/pages/" + el.id}>{el.page_title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="probootstrap-footer-widget">
              <h3>Contact Info</h3>
              <ul className="probootstrap-contact-info">
                <li>
                  <i className="icon-location2" />{" "}
                  <span>{institute_info.institute_address}</span>
                </li>
                <li>
                  <i className="icon-mail" />
                  <span>{institute_info.institute_email}</span>
                </li>
                <li>
                  <i className="icon-phone2" />
                  <span>{institute_info.institute_phonenumbers}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END row */}
      </div>
      <div className="probootstrap-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-left">
              <p>
                © 2021 . All Rights Reserved. Schoolify - School Management
                System
              </p>
            </div>
            <div className="col-md-4 probootstrap-back-to-top">
              <p>
                <a href="#" className="js-backtotop">
                  Back to top <i className="icon-arrow-long-up" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
