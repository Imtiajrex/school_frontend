import React, { useState } from "react";
import Table from "reactstrap/lib/Table";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import "./style.css";
import uuid from "react-uuid";
export default function EmployeeAttendanceTable(props) {
  const { list, loading, top, indexed = true, year, month } = props;
  const [days, setDays] = useState([]);
  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 0);
    let i = 1;
    let date_length = date.getDate();
    let _days = [];
    month = month < 10 ? "0" + month : month;
    while (i <= date_length) {
      let day = i < 10 ? "0" + i : i;
      _days.push(day + "/" + month + "/" + year);
      i++;
    }
    return _days;
  }
  React.useEffect(() => {
    setDays(getDaysInMonth(month, year));
  }, [list]);
  return (
    <Table
      className="align-items-center table-light table-flush"
      style={{ marginTop: "1rem" }}
      responsive
    >
      <thead className="thead-light">
        <tr>
          <th scope="col" rowSpan="2" style={{ width: "75px" }}>
            <p style={{ fontSize: "9px", color: "black", margin: 0 }}>
              Employees
            </p>
            <hr style={{ margin: 0 }} />
            <p style={{ fontSize: "9px", color: "black", margin: 0 }}>Date</p>
          </th>
          {top.map((item, index) => (
            <th key={uuid()} rowSpan="2">
              {item}
              <br />
              <small>Total Days: {days.length}</small>
              <br />
              <small>Present: {Object.keys(list[item]).length}</small>
              <br />
              <small>
                Absent: {days.length - Object.keys(list[item]).length}
              </small>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan={top.length + 3} className="text-center">
              <Spinner color="primary" />
            </td>
          </tr>
        ) : (
          days.map((item, index) => (
            <tr>
              <td style={{ width: "75px" }}>{item}</td>
              {top.map((element, index) => (
                <td>
                  <small
                    className="text-muted"
                    style={{ fontSize: "8px", lineHeight: "0.1" }}
                  >
                    {item}
                    <br style={{ margin: 0 }} />
                    {element}
                  </small>
                  <br />
                  {list[element].length == 0 ? (
                    <>
                      Absent{" "}
                      <i
                        className="text-danger fas fa-circle"
                        style={{ fontSize: "8px" }}
                      />
                    </>
                  ) : list[element][item] == "Present" ? (
                    <>
                      Present{" "}
                      <i
                        className="text-success fas fa-circle"
                        style={{ fontSize: "8px" }}
                      />
                    </>
                  ) : (
                    <>
                      Absent{" "}
                      <i
                        className="text-danger fas fa-circle"
                        style={{ fontSize: "8px" }}
                      />
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}
