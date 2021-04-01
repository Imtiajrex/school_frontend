import React, { useState } from "react";
import {
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink as RNavLink } from "react-router-dom";

export default function MenuBar({ pages, sub_pages }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdown] = useState();

  const toggleDropdown = () => setDropdown(!dropdownOpen);
  return (
    <Collapse isOpen={isOpen} navbar>
      <i
        className="fas fa-times text-danger d-md-none"
        style={{ cursor: "pointer" }}
        onClick={toggle}
      />
      <Nav
        className="mr-auto"
        navbar
        style={{
          marginBottom: "0px",
        }}
      >
        {pages.map((el, idx) =>
          sub_pages.filter((elem) => elem.page_parent == el.id).length > 0 ? (
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

        <NavItem className="d-md-none d-block">
          <RNavLink className="nav-link" to={"/login"}>
            Login
          </RNavLink>
        </NavItem>
      </Nav>
    </Collapse>
  );
}
