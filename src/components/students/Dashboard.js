import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Dashboard() {
  return (
    <div>
      <Card color="primary">
        <CardBody>
          <h2 className="text-white">
            Welcome to Schoolify - School Management Dashboard!
          </h2>
          <h3 className="text-light">User Type: Student</h3>
        </CardBody>
      </Card>
    </div>
  );
}
