import React from "react";
import { Table } from "reactstrap";

export default function AdCard(props) {
  const { data, colors, size, exam_data } = props;
  const { logo_size, head_size, data_size } = size;
  const { head_color, data_color, border_color } = colors;
  const th_style = {
    padding: "0.4rem",
    color: head_color,
    fontSize: head_size + "px",
    borderTop: "1px solid " + border_color,
  };
  const td_style = {
    padding: "0.4rem",
    color: data_color,
    fontSize: data_size + "px",
    borderTop: "1px solid " + border_color,
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "0%",
          right: "0%",
          margin: "1rem",
        }}
      >
        <img
          src={process.env.REACT_APP_IMAGE_PATH + "/" + data.student_image}
          alt="Student"
          style={{ width: logo_size + "px", objectFit: "cover" }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <b
          style={{
            fontSize: head_size + "px",
            textAlign: "center",
            color: head_color,
            margin: "0.3rem",
          }}
        >
          Admit Card
        </b>
      </div>
      <Table style={{ maxWidth: "65%", margin: "auto" }}>
        <tbody>
          <tr>
            <th style={th_style}>Student ID</th>
            <td style={td_style}>{data.student_identifier}</td>
          </tr>
          <tr>
            <th style={th_style}>Student Name</th>
            <td style={td_style}>{data.student_name}</td>
          </tr>
          <tr>
            <th style={th_style}>Roll</th>
            <td style={td_style}>{data.role}</td>
          </tr>
          <tr>
            <th style={th_style}>Class</th>
            <td style={td_style}>{data.class}</td>
          </tr>
          <tr>
            <th style={th_style}>Department</th>
            <td style={td_style}>{data.department}</td>
          </tr>
          <tr>
            <th style={th_style}>Session</th>
            <td style={td_style}>{data.session}</td>
          </tr>
          <tr>
            <th style={th_style}>Exam</th>
            <td style={td_style}>{exam_data.exam_name}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
