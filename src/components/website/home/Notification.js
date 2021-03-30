import React from "react";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default function Notification({ notifs }) {
  console.log(notifs);
  return (
    <div className="notification-div">
      <div className="notification-title">Notification</div>
      <Marquee pauseOnHover={true} speed={65} className="notificaions">
        {notifs.map((e, idx) => (
          <NavLink to={"/notifications/" + e.id} className="notification">
            {e.title}
          </NavLink>
        ))}
      </Marquee>
    </div>
  );
}
