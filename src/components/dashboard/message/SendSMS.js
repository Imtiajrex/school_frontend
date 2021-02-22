import Add from "components/crud/Add";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { CardBody, Card, CardHeader, Button } from "reactstrap";
import { Call } from "services/API/Call";

export default function SendSMS({ permission }) {
  const user_role = localStorage.getItem("role");
  const user_permissions = JSON.parse(localStorage.getItem("permissions"));
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
  const [quick, setQuick] = useState(false);

  const [update, setUpdate] = useState(false);

  const [class_id, setClass] = useState(-1);
  const [department, setDepartment] = useState(-1);
  const [session, setSession] = useState(-1);
  const [sms_account, setSMSAccount] = useState({});

  const [student_list, setStudentList] = useState([]);

  const [student, setStudent] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [employee_type, setEmployeeType] = useState(-1);
  const [employee_type_list, setEmployeeTypeList] = useState([]);
  const [employee_list, setEmployeeList] = useState([]);

  React.useEffect(() => {
    Call({
      method: "get",
      url: "employees/employee_type?options=true",
    })
      .then((res) => {
        res.map((el) => {
          el["text"] = el.employee_type;
          el["value"] = el.employee_type;
        });
        setEmployeeTypeList(res);
      })
      .catch((err) => console.log(err));
  }, []);
  React.useEffect(() => {
    Call({
      method: "get",
      url: "messages/sms_account",
    })
      .then((res) => {
        setSMSAccount(res);
      })
      .catch((err) => console.log(err));
  }, [update]);
  React.useEffect(() => {
    if (employee_type != -1) {
      Call({
        method: "get",
        url: "employees/employee?options=true&employee_type=" + employee_type,
      })
        .then((res) => setEmployeeList(res))
        .catch((err) => console.log(err));
    }
  }, [employee_type]);
  React.useEffect(() => {
    if (class_id != -1 && department != -1 && session != -1) {
      Call({
        method: "get",
        url:
          "students/student_assignment?student_options=true&class_id=" +
          class_id +
          "&department_id=" +
          department +
          "&session_id=" +
          session,
      })
        .then((res) => setStudentList(res))
        .catch((err) => console.log(err));
    }
  }, [class_id, department, session]);

  const employee_data = [
    {
      placeholder: "Employee Type",
      type: "select",
      name: "employee_type",
      options: employee_type_list,
      setState: setEmployeeType,
      required: true,
    },
    {
      placeholder: "Employees",
      type: "select",
      name: "employee_id",
      options: employee_list,
      required: false,
    },
    {
      placeholder: "Message Content",
      type: "textarea",
      name: "message",
      required: true,
    },
  ];
  const student_data = [
    {
      placeholder: "Session",
      type: "select",
      name: "session_id",
      options: session_list,
      setState: setSession,
      required: true,
    },
    {
      placeholder: "Class",
      type: "select",
      name: "class_id",
      options: class_list,
      setState: setClass,
      required: false,
    },
    {
      placeholder: "Departments",
      type: "select",
      name: "department_id",
      options: department_list,
      setState: setDepartment,
      required: false,
    },
    {
      placeholder: "Students",
      type: "select",
      name: "student_id",
      options: student_list,
      required: false,
    },
    {
      placeholder: "Message Content",
      type: "textarea",
      name: "message",
      required: true,
    },
  ];
  return (
    <div>
      <Card className="bg-default shadow mt-3 mb-3">
        <CardBody>
          <Button color="info">SMS Balance: {sms_account.balance}</Button>
          <Button color="warning">SMS Rate: {sms_account.rate}</Button>
          <Button color="success">
            Total SMS Sent: {sms_account.total_sent_sms}
          </Button>
        </CardBody>
      </Card>
      {user_role == "Super Admin" ||
      user_permissions.indexOf(permission.send) != -1 ? (
        <>
          <Card className="bg-default shadow">
            <CardHeader className="bg-transparent border-0">
              <h2 className="text-white">Send SMS</h2>
            </CardHeader>
            <CardBody>
              <Button color="primary" onClick={() => setQuick(true)}>
                Quick SMS <i className="fas fa-paper-plane" />
              </Button>
              <Button color="secondary" onClick={() => setStudent(true)}>
                Student SMS <i className="fas fa-paper-plane" />
              </Button>
              <Button color="info" onClick={() => setEmployee(true)}>
                Employee SMS <i className="fas fa-paper-plane" />
              </Button>
            </CardBody>
          </Card>
          <Add
            url="messages/quick_sms"
            open={quick}
            setOpenAdd={setQuick}
            add_data={[
              {
                placeholder: "Phonenumbers",
                type: "textarea",
                name: "phonenumbers",
                required: true,
              },
              {
                placeholder: "Message",
                type: "textarea",
                name: "message",
                required: true,
              },
            ]}
            initial_values={{
              phonenumbers: "",
              message: "",
            }}
            update={update}
            setUpdate={setUpdate}
            modal_size="md"
            title="Quick SMS"
          />
          <Add
            url="messages/student_sms"
            open={student}
            setOpenAdd={setStudent}
            add_data={student_data}
            initial_values={{
              session_id: -1,
              class_id: -1,
              department_id: -1,
              student_id: -1,
              message: "",
            }}
            update={update}
            setUpdate={setUpdate}
            modal_size="md"
            title="Student SMS"
          />
          <Add
            url="messages/employee_sms"
            open={employee}
            setOpenAdd={setEmployee}
            add_data={employee_data}
            initial_values={{
              employee_type: -1,
              employee_id: -1,
              message: "",
            }}
            update={update}
            setUpdate={setUpdate}
            modal_size="md"
            title="Employee SMS"
          />
        </>
      ) : null}
    </div>
  );
}
