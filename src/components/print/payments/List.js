import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Call } from "services/API/Call";
import PrintOptions from "../PrintOptions";
import SchoolInfo from "../SchoolInfo";
import ListTable from "./ListTable";
import { Input, Table } from "reactstrap";

export default function List(props) {
  const {
    url,
    title,
    head,
    val,
    indexed = true,
    student_id,
    receipt_id,
  } = props;
  const [list, setList] = useState([]);
  const [logo_dir, setLogoDir] = useState({ left: "0%" });
  const [logo_size, setLogoSize] = useState(100);
  const [school_name_size, setSchoolNameSize] = useState(25);
  const [other_size, setOtherSize] = useState(12);
  const [school_name_color, setSchoolNameColor] = useState("#525f7f");
  const [other_color, setOtherColor] = useState("#8898aa");
  const [school_name, setSchoolName] = useState(true);
  const [other_info, setOtherInfo] = useState(true);
  const [logo, setLogo] = useState(true);
  const [line, setLine] = useState(true);

  const [head_color, setHeadColor] = useState("#525f7f");
  const [data_color, setDataColor] = useState("#3D4956");
  const [border_color, setBorderColor] = useState("#e9ecef");
  const [head_size, setHeadSize] = useState(12);
  const [data_size, setDataSize] = useState(11);
  const [student_info, setStudentInfo] = useState({});
  const th_style = {
    color: head_color,
    fontSize: head_size + "px",
  };
  const td_style = {
    color: data_color,
    fontSize: data_size + "px",
  };
  React.useEffect(() => {
    Call({ method: "get", url })
      .then((res) => {
        setList(res);
      })
      .catch((err) => console.log(err));
    Call({
      method: "get",
      url: "students/student?student_id=" + student_id,
    })
      .then((res) => {
        setStudentInfo(res);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="bg-dark noprint printoptions" left={{ right: "0%" }}>
        <div className="mb-1 mt-1">Table Options</div>
        <small>Head Size</small>
        <Input
          type="number"
          placeholder="Head Size"
          value={head_size}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setHeadSize(e.target.value)}
        />
        <small>Data Size</small>
        <Input
          type="number"
          placeholder="Data Size"
          value={data_size}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setDataSize(e.target.value)}
        />
        <small>Head Color</small>
        <Input
          type="color"
          placeholder="Address,Number Color"
          value={head_color}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setHeadColor(e.target.value)}
        />
        <small>Data Color</small>
        <Input
          type="color"
          placeholder="Data Color"
          value={data_color}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setDataColor(e.target.value)}
        />
        <small>Border Color</small>
        <Input
          type="color"
          placeholder="Border Color"
          value={border_color}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setBorderColor(e.target.value)}
        />
      </div>
      <PrintOptions
        val={{
          logo_dir,
          setLogoDir,
          logo_size,
          setLogoSize,
          school_name_size,
          setSchoolNameSize,
          other_size,
          setOtherSize,
          school_name_color,
          setSchoolNameColor,
          other_color,
          setOtherColor,
          school_name,
          setSchoolName,
          other_info,
          setOtherInfo,
          logo,
          setLogo,
          line,
          setLine,
        }}
      />
      <div style={{ height: "100%" }}>
        <SchoolInfo
          val={{
            logo_dir,
            logo_size,
            school_name_size,
            other_size,
            school_name_color,
            other_color,
            school_name,
            other_info,
            logo,
            line,
          }}
        />
        <div className="text-center">
          <p style={{ color: head_color, margin: 0 }}>Payment Receipt</p>
          <small style={{ color: data_color }}>(Student's Copy)</small>
        </div>
        <div style={{ maxWidth: "300px", margin: "auto" }}>
          <Table>
            <tbody>
              <tr>
                <th style={th_style}>Student ID:</th>
                <td style={td_style}>
                  {student_info.length > 0
                    ? student_info[0].student_identifier
                    : null}
                </td>
              </tr>
              <tr>
                <th style={th_style}>Student Name:</th>
                <td style={td_style}>
                  {student_info.length > 0
                    ? student_info[0].student_name
                    : null}
                </td>
              </tr>
              <tr>
                <th style={th_style}>Receipt No:</th>
                <td style={td_style}>{receipt_id}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div
          className="pl-5 pr-5"
          style={{ maxWidth: "85%", margin: "auto", textAlign: "center" }}
        >
          <ListTable
            head={head}
            data={list}
            val={val}
            colors={{ data_color, head_color, border_color }}
            size={{ data_size, head_size }}
            indexed={indexed}
          />
          <div
            style={{
              marginTop: "5rem",
              display: "flex",
              justifyContent: "space-between",
              fontSize: head_size + "px",
            }}
          >
            <div
              style={{
                marginTop: "0.4rem",
                borderTop: `1px solid ${border_color}`,
                color: head_color,
              }}
            >
              Student Signature
            </div>
            <div
              style={{
                marginTop: "0.4rem",
                borderTop: `1px solid ${border_color}`,
                color: head_color,
              }}
            >
              Receipt Issuer Signature
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ height: "100%" }}>
        <SchoolInfo
          val={{
            logo_dir,
            logo_size,
            school_name_size,
            other_size,
            school_name_color,
            other_color,
            school_name,
            other_info,
            logo,
            line,
          }}
        />
        <div className="text-center">
          <p style={{ color: head_color, margin: 0 }}>Payment Receipt</p>
          <small style={{ color: data_color }}>(Office Copy)</small>
        </div>
        <div style={{ maxWidth: "300px", margin: "auto" }}>
          <Table>
            <tbody>
              <tr>
                <th style={th_style}>Student ID:</th>
                <td style={td_style}>
                  {student_info.length > 0
                    ? student_info[0].student_identifier
                    : null}
                </td>
              </tr>
              <tr>
                <th style={th_style}>Student Name:</th>
                <td style={td_style}>
                  {student_info.length > 0
                    ? student_info[0].student_name
                    : null}
                </td>
              </tr>
              <tr>
                <th style={th_style}>Receipt No:</th>
                <td style={td_style}>{receipt_id}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div
          className="pl-5 pr-5"
          style={{ maxWidth: "85%", margin: "auto", textAlign: "center" }}
        >
          <ListTable
            head={head}
            data={list}
            val={val}
            colors={{ data_color, head_color, border_color }}
            size={{ data_size, head_size }}
            indexed={indexed}
          />
          <div
            style={{
              marginTop: "5rem",
              display: "flex",
              justifyContent: "space-between",
              fontSize: head_size + "px",
            }}
          >
            <div
              style={{
                marginTop: "0.4rem",
                borderTop: `1px solid ${border_color}`,
                color: head_color,
              }}
            >
              Student Signature
            </div>
            <div
              style={{
                marginTop: "0.4rem",
                borderTop: `1px solid ${border_color}`,
                color: head_color,
              }}
            >
              Receipt Issuer Signature
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
