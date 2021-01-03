import React from "react";
import Container from "reactstrap/lib/Container";
import AdminRouter from "routers/AdminRouter";
import routes from "routes/routes.js";
import Sidebar from "../../../components/dashboard/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Sidebar
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: "argon/assets/img/brand/argon-react.png",
          imgAlt: "...",
        }}
      />
      <div className="main-content">
        <Container fluid>
          <AdminRouter />
        </Container>
      </div>
    </div>
  );
}
