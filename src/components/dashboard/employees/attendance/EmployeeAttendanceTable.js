import React, { useState } from "react";
import Table from "reactstrap/lib/Table";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import "./style.css";
import uuid from "react-uuid";
import Api from "services/API/Api";
export default function EmployeeAttendanceTable(props) {
  const { list, loading, top, indexed = true, year, month } = props;
  const [days, setDays] = useState([]);
  const [weekdays, setWeekDays] = useState(0);
  const [week_day_active, setWeekdayActive] = useState([]);
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
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
  function isWeekday(year, month, day) {
    var day = new Date(year, month, day).getDay();

    return week_day_active.indexOf(day) == -1;
  }

  function getWeekdaysInMonth(month, year) {
    var days = daysInMonth(month, year);
    var weekdays = 0;
    for (var i = 0; i < days; i++) {
      if (isWeekday(year, month, i + 1)) weekdays++;
    }
    return days - weekdays;
  }
  React.useEffect(() => {
    setDays(getDaysInMonth(month, year));
    setWeekDays(getWeekdaysInMonth(month, year));
    Api({ method: "get", url: "settings/weekdays?attendance=true" })
      .then((res) => setWeekdayActive(res.data))
      .catch((err) => console.log(err));
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

              <small>
                Present:{" "}
                {
                  Object.values(list[item]).filter((el) =>
                    el.includes("Present")
                  ).length
                }
              </small>
              <br />
              <small>
                Late:{" "}
                {
                  Object.values(list[item]).filter((el) => el.includes("Late"))
                    .length
                }
              </small>
              <br />
              <small>
                Absent:{" "}
                {days.length - Object.keys(list[item]).length - weekdays}
              </small>
              <br />
              <small>Weekdays: {weekdays}</small>
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
                <td style={{ whiteSpace: "pre" }}>
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
                  ) : list[element][item] != undefined &&
                    list[element][item].includes("Present") ? (
                    <>
                      Present{" "}
                      <i
                        className="text-success fas fa-circle"
                        style={{ fontSize: "8px" }}
                      />
                      <small className="text-muted">
                        {list[element][item].replace("Present", "")}
                      </small>{" "}
                    </>
                  ) : list[element][item] != undefined &&
                    list[element][item].includes("Late") ? (
                    <>
                      Late{" "}
                      <i
                        className="text-warning fas fa-circle"
                        style={{ fontSize: "8px" }}
                      />
                      <small className="text-muted">
                        {list[element][item].replace("Late", "")}
                      </small>{" "}
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
