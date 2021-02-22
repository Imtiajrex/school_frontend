/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

export default function TopBar({ institute_info }) {
  return (
    <div className="probootstrap-header-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9 probootstrap-top-quick-contact-info">
            <span>
              <i className="icon-location2"></i>
              {institute_info.institute_address}
            </span>
            <span>
              <i className="icon-phone2"></i>
              {institute_info.institute_phonenumbers}
            </span>
            <span>
              <i className="icon-mail"></i>
              {institute_info.institute_email}
            </span>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 probootstrap-top-social">
            <ul>
              <li>
                <a href={institute_info.institute_facebook}>
                  <i className="icon-facebook2"></i>
                </a>
              </li>
              <li>
                <a href={institute_info.institute_youtube}>
                  <i className="icon-youtube"></i>
                </a>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
