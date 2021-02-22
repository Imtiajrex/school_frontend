import ClassDeptSessionProvider from "contexts/ClassDeptSessionContext";
import React from "react";
import Container from "reactstrap/lib/Container";
import StudentDashboardRouter from "routers/StudentDashboardRouter";
import Sidebar from "components/dashboard/Sidebar";
import student_routes from "routes/student_routes";

export default function Dashboard() {
  return (
    <div>
      <Sidebar
        routes={student_routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: "argon/assets/img/brand/argon-react.png",
          imgAlt: "...",
        }}
      />
      <div className="main-content">
        <Container fluid>
          <ClassDeptSessionProvider>
            <StudentDashboardRouter />
          </ClassDeptSessionProvider>
        </Container>
      </div>
    </div>
  );
}
