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
        </CardBody>
      </Card>
    </div>
  );
}
