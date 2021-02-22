import ClassDeptSessionProvider from "contexts/ClassDeptSessionContext";
import React from "react";
import Container from "reactstrap/lib/Container";
import TeacherDashboardRouter from "routers/TeacherDashboardRouter";
import Sidebar from "components/dashboard/Sidebar";
import teacher_routes from "routes/teacher_routes";

export default function Dashboard() {
  return (
    <div>
      <Sidebar
        routes={teacher_routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: "argon/assets/img/brand/argon-react.png",
          imgAlt: "...",
        }}
      />
      <div className="main-content">
        <Container fluid>
          <ClassDeptSessionProvider>
            <TeacherDashboardRouter />
          </ClassDeptSessionProvider>
        </Container>
      </div>
    </div>
  );
}
