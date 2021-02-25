import ClassDeptSessionProvider from "contexts/ClassDeptSessionContext";
import React from "react";
import Container from "reactstrap/lib/Container";
import StudentDashboardRouter from "routers/StudentDashboardRouter";
import Sidebar from "components/dashboard/Sidebar";
import student_routes from "routes/student_routes";
import TopBar from "./TopBar";

export default function Dashboard() {
  return (
    <div>
      <Container fluid>
        <TopBar />
      </Container>
      <Container fluid>
        <Sidebar
          routes={student_routes}
          logo={{
            innerLink: "/student/dashboard",
            imgSrc: "argon/assets/img/brand/argon-react.png",
            imgAlt: "...",
          }}
        />
        <div className="main-content" style={{ marginTop: "5rem" }}>
          <Container fluid>
            <ClassDeptSessionProvider>
              <StudentDashboardRouter />
            </ClassDeptSessionProvider>
          </Container>
        </div>
      </Container>
    </div>
  );
}
