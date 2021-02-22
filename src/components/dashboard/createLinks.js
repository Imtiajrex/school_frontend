import React, { useState } from "react";
import { NavLink as NavLinkRRD, useLocation } from "react-router-dom";
import { NavLink, NavItem, Collapse } from "reactstrap";

const user_role = localStorage.getItem("role");
const permissions = JSON.parse(localStorage.getItem("permissions"));
const createLinks = (routes, child = false) =>
  routes.map((prop, key) =>
    checkPermission(prop.permission) ? (
      prop.children === undefined ? (
        <MenuLink
          layout={prop.layout}
          path={prop.path}
          icon={prop.icon}
          name={prop.name}
          key={key}
          child={child}
        />
      ) : (
        <CollapseLink
          icon={prop.icon}
          name={prop.name}
          children={prop.children}
          key={key}
          path={prop.layout + prop.path}
        />
      )
    ) : null
  );

const checkPermission = (route_permission) => {
  if (permissions != null) {
    if (route_permission == undefined) return true;
    else if (user_role == "Super Admin") return true;
    else if (route_permission.length != undefined) {
      const found = route_permission.some(
        (element) => permissions.indexOf(element) != -1
      );
      return found;
    } else {
      const found = Object.values(route_permission).some(
        (element) => permissions.indexOf(element) != -1
      );
      return found;
    }
  } else return false;
};
export default createLinks;
function MenuLink({ layout, path, icon, name, child }) {
  return (
    <NavItem>
      <NavLink
        to={layout + path}
        tag={NavLinkRRD}
        activeClassName="active"
        className={child ? `text-white` : null}
      >
        <i className={icon} />
        {name}
      </NavLink>
    </NavItem>
  );
}
function CollapseLink(props) {
  const { path, icon, name, children } = props;
  const location = useLocation();
  const [open, setopen] = useState(location.pathname.startsWith(path));
  const handleOpen = () => setopen(!open);
  const routes = children;
  const child = true;

  return (
    <NavItem>
      <NavLink
        onClick={handleOpen}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <i
            className={icon}
            style={{
              minWidth: "2.25rem",
              fontSize: ".9375rem",
              lineHeight: "1.5rem",
            }}
          />
          {name}
        </div>
        <i
          className="ni ni-bold-down"
          style={{
            transition: "0.3s",
            transform: `rotateX(${open ? `180deg` : `0deg`})`,
          }}
        />
      </NavLink>
      <Collapse isOpen={open}>
        <div className="bg-dark">
          <ul style={{ listStyle: "none" }}>{createLinks(routes, child)}</ul>
        </div>
      </Collapse>
    </NavItem>
  );
}
