import React, { useState } from "react";
import Table from "reactstrap/lib/Table";
import Spinner from "reactstrap/lib/Spinner";
import "../../style.css";
import uuid from "react-uuid";
import Api from "services/API/Api";
export default function ListTable(props) {
  const { list, loading, top, year, month, colors, size } = props;
  const { head_color, data_color, small_color, border_color } = colors;
  const { head_size, data_size, small_size } = size;
  const [days, setDays] = useState([]);
  const [weekdays, setWeekDays] = useState(0);
  const [week_day_active, setWeekdayActive] = useState([]);
  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 0);
    let i = 1;
    let date_length = date.getDate();
    let _days = [];
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
    Api({ method: "get", url: "settings/weekdays?attendance=true" })
      .then((res) => {
        setWeekdayActive(res.data);
      })
      .catch((err) => console.log(err));
  }, [list]);
  React.useEffect(() => {
    setWeekDays(getWeekdaysInMonth(month, year));
  }, [week_day_active]);
  return (
    <Table
      className="align-items-center attendance"
      style={{ marginTop: "1rem" }}
      responsive
    >
      <thead>
        <tr>
          <th
            scope="col"
            rowSpan="2"
            style={{
              width: "75px",
              borderTop: `1px solid ${border_color}`,
              borderBottom: `1px solid ${border_color}`,
            }}
          >
            <p style={{ fontSize: "9px", color: "black", margin: 0 }}>
              Employees
            </p>
            <hr style={{ margin: 0 }} />
            <p style={{ fontSize: "9px", color: "black", margin: 0 }}>Date</p>
          </th>
          {top.map((item, index) => (
            <th
              key={uuid()}
              rowSpan="2"
              style={{
                color: head_color,
                fontSize: head_size + "px",
                borderTop: `1px solid ${border_color}`,
                borderBottom: `1px solid ${border_color}`,
                whiteSpace: "pre",
              }}
            >
              {item}
              <br />
              <small>Total Days: {days.length}</small>
              <br />
              <small>
                Present:
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
            <tr key={index}>
              <th
                style={{
                  width: "75px",
                  color: head_color,
                  fontSize: head_size + "px",
                  borderTop: `1px solid ${border_color}`,
                }}
              >
                {item}
              </th>
              {top.map((element, index) => (
                <td
                  key={index}
                  style={{
                    whiteSpace: "pre",
                    borderTop: `1px solid ${border_color}`,
                  }}
                >
                  <small
                    style={{
                      fontSize: small_size + "px",
                      lineHeight: "0.1",
                      color: small_color,
                    }}
                  >
                    <br style={{ margin: 0 }} />
                    {element}
                  </small>
                  <br />
                  {list[element].length == 0 ? (
                    <div
                      style={{ fontSize: data_size + "px", color: data_color }}
                    >
                      Absent{" "}
                      <i
                        className="text-danger fas fa-circle"
                        style={{ fontSize: "8px" }}
                      />
                    </div>
                  ) : list[element][item] != undefined &&
                    list[element][item].includes("Present") ? (
                    <div
                      style={{ fontSize: data_size + "px", color: data_color }}
                    >
                      Present{" "}
                      <i
                        className="text-success fas fa-circle"
                        style={{ fontSize: "8px" }}
                      />
                      <small
                        style={{
                          color: small_color,
                          fontSize: small_size + "px",
                        }}
                      >
                        {list[element][item].replace("Present", "")}
                      </small>{" "}
                    </div>
                  ) : list[element][item] != undefined &&
                    list[element][item].includes("Late") ? (
                    <div
                      style={{ fontSize: data_size + "px", color: data_color }}
                    >
                      Late{" "}
                      <i
                        className="text-warning fas fa-circle"
                        style={{ fontSize: "8px" }}
                      />
                      <small className="text-muted">
                        {list[element][item].replace("Late", "")}
                      </small>{" "}
                    </div>
                  ) : (
                    <div
                      style={{ fontSize: data_size + "px", color: data_color }}
                    >
                      Absent{" "}
                      <i
                        className="text-danger fas fa-circle"
                        style={{ fontSize: "8px" }}
                      />
                    </div>
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
