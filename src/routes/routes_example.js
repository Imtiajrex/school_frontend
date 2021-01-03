import React from "react";
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Tables from "views/examples/Tables.js";
import CRUD from "components/crud/Index";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: CRUD,
    path: "/icons",
    layout: "/admin",
    children: [
      {
        path: "/mapsss",
        name: "Maps",
        icon: "ni ni-pin-3 text-orange",
        component: Maps,
        layout: "/admin/icons",
      },
      {
        path: "/user-profilesss",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        layout: "/admin/icons",
      },
    ],
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <CRUD />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
];
export default routes;
