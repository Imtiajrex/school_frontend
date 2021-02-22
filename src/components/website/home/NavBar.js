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

export default function NavBar({ pages, sub_pages, institute_info }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdown] = useState();

  const toggleDropdown = () => setDropdown(!dropdownOpen);
  return (
    <Navbar
      light
      expand="md"
      className="probootstrap-navbar p-lg-0 p-md-3"
      style={{ maxHeight: "100px" }}
    >
      <div className="container" style={{ alignItems: "normal" }}>
        <div
          style={{
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RNavLink to="/" style={{ display: "flex", alignItems: "center" }}>
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
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <i
            className="fas fa-times text-danger d-md-none"
            style={{ cursor: "pointer" }}
            onClick={toggle}
          />
          <Nav
            className="ml-auto"
            navbar
            style={{
              marginBottom: "0px",
            }}
          >
            {pages.map((el, idx) =>
              sub_pages.filter((elem) => elem.page_parent == el.id).length >
              0 ? (
                <Dropdown
                  nav
                  inNavbar
                  isOpen={dropdownOpen == idx}
                  toggle={toggleDropdown}
                  onMouseEnter={() => setDropdown(idx)}
                  onMouseLeave={() => setDropdown()}
                  key={idx}
                >
                  <RNavLink to={"/pages/" + el.id} className="nav-link">
                    {el.page_title}
                  </RNavLink>
                  <DropdownMenu>
                    {sub_pages.map((elem, index) =>
                      elem.page_parent == el.id ? (
                        <DropdownItem key={index}>
                          <RNavLink
                            to={"/sub_pages/" + elem.id}
                            className="nav-link"
                          >
                            {elem.page_title}
                          </RNavLink>
                        </DropdownItem>
                      ) : null
                    )}
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NavItem key={idx}>
                  <RNavLink className="nav-link" to={"/pages/" + el.id}>
                    {el.page_title}
                  </RNavLink>
                </NavItem>
              )
            )}
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}
