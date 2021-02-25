import ClassDeptSessionProvider from "contexts/ClassDeptSessionContext";
import React from "react";
import Container from "reactstrap/lib/Container";
import TeacherDashboardRouter from "routers/TeacherDashboardRouter";
import Sidebar from "components/dashboard/Sidebar";
import teacher_routes from "routes/teacher_routes";
import TopBar from "./TopBar";

export default function Dashboard() {
  return (
    <div>
      <Container fluid>
        <TopBar />
      </Container>
      <Container fluid>
        <Sidebar
          routes={teacher_routes}
          logo={{
            innerLink: "/teacher/dashboard",
            imgSrc: "argon/assets/img/brand/argon-react.png",
            imgAlt: "...",
          }}
        />
        <div className="main-content" style={{ marginTop: "5rem" }}>
          <Container fluid>
            <ClassDeptSessionProvider>
              <TeacherDashboardRouter />
            </ClassDeptSessionProvider>
          </Container>
        </div>
      </Container>
    </div>
  );
}
