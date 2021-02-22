import ClassDeptSessionProvider from "contexts/ClassDeptSessionContext";
import React from "react";
import Container from "reactstrap/lib/Container";
import AdminRouter from "routers/AdminRouter";
import routes from "routes/routes.js";
import Sidebar from "components/dashboard/Sidebar";
import TopBar from "./TopBar";

export default function Dashboard() {
  return (
    <div>
      <Container fluid>
        <TopBar />
      </Container>
      <Container fluid>
        <Sidebar
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: "argon/assets/img/brand/argon-react.png",
            imgAlt: "...",
          }}
        />
        <div className="main-content" style={{ marginTop: "5rem" }}>
          <Container fluid>
            <ClassDeptSessionProvider>
              <AdminRouter />
            </ClassDeptSessionProvider>
          </Container>
        </div>
      </Container>
    </div>
  );
}
