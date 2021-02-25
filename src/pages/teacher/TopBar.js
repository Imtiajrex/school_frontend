import React from "react";
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function TopBar() {
  return (
    <div className="d-none d-lg-block">
      <Nav
        className="bg-default"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <UncontrolledDropdown nav>
          <DropdownToggle nav>
            <Media className="align-items-center">
              <span className="avatar avatar-sm rounded-circle">
                <i className="fas fa-user"></i>
              </span>
            </Media>
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem className="noti-title" header tag="div">
              <h6 className="text-overflow m-0">Welcome!</h6>
            </DropdownItem>
            <DropdownItem
              href="#pablo"
              onClick={() => {
                localStorage.removeItem("user_id");
                localStorage.removeItem("user_type");
                localStorage.removeItem("role");
                localStorage.removeItem("token");
                localStorage.removeItem("permissions");
              }}
            >
              <i className="ni ni-user-run" />
              <span>Logout</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </div>
  );
}
