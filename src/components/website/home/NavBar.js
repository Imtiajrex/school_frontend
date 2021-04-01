/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { NavLink as RNavLink } from "react-router-dom";
import MenuBar from "./MenuBar";

export default function NavBar({ pages, sub_pages, institute_info }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdown] = useState();

  const toggleDropdown = () => setDropdown(!dropdownOpen);
  return (
    <>
      <Navbar light expand="md" className="probootstrap-navbar">
        <div className="container" style={{ alignItems: "normal" }}>
          <div className="row">
            <div className="col-md-12">
              <div
                style={{
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RNavLink
                  to="/"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={
                      process.env.REACT_APP_IMAGE_PATH +
                      "/" +
                      institute_info.institute_logo
                    }
                    alt="Logo"
                    style={{ width: "80px", objectFit: "cover" }}
                  />
                  <div className="ml-3">{institute_info.institute_name}</div>
                </RNavLink>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
      <Navbar light expand="md" className="probootstrap-navbar">
        <div className="container" style={{ alignItems: "normal" }}>
          <MenuBar pages={pages} sub_pages={sub_pages} />
          <div className="col-md-12">
            <NavbarToggler onClick={toggle} />
          </div>
        </div>
      </Navbar>
    </>
  );
}
