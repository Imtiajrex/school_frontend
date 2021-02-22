/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import PrintOptions from "components/print/PrintOptions";
import { useQuery } from "components/print/Querytags";
import SchoolInfo from "components/print/SchoolInfo";
import { ClassDeptSessionContext } from "contexts/ClassDeptSessionContext";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Input } from "reactstrap";
import { Call } from "services/API/Call";
import TabulationList from "./TabulationList";

export default function Tabulation() {
  const { class_list, department_list, session_list } = useContext(
    ClassDeptSessionContext
  );
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
  let query = useQuery();
  const [list, setList] = useState([]);
  const [query_info, setQueryInfo] = useState([]);
  React.useEffect(() => {
    let u = "exams/marks?exam=true";
    if (query.get("exam_id") != null) {
      u += "&exam_id=" + query.get("exam_id");
    }
    if (query.get("session_id") != null) {
      u += "&session_id=" + query.get("session_id");
    }
    if (query.get("class_id") != null) {
      u += "&class_id=" + query.get("class_id");
    }
    if (query.get("department_id") != null) {
      u += "&department_id=" + query.get("department_id");
    }
    Call({ method: "get", url: u })
      .then((res) => setList(res))
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    if (
      class_list.length > 0 &&
      department_list.length > 0 &&
      session_list.length > 0
    ) {
      const cls_list = class_list.filter(
        (el) => el.value == query.get("class_id")
      );
      const dept_list = department_list.filter(
        (el) => el.value == query.get("department_id")
      );
      const year_list = session_list.filter(
        (el) => el.value == query.get("session_id")
      );
      const cls = cls_list.length > 0 ? cls_list[0].text : null;
      const dept = dept_list.length > 0 ? dept_list[0].text : null;
      const year = year_list.length > 0 ? year_list[0].text : null;
      Call({ method: "get", url: "exams/exam?exam_id=" + query.get("exam_id") })
        .then((res) =>
          setQueryInfo([
            { title: "Class : ", value: cls },
            { title: "Department : ", value: dept },
            { title: "Session : ", value: year },
            { title: "Exam : ", value: res.exam_name },
          ])
        )
        .catch((err) => console.log(err));
    }
  }, [class_list, department_list, session_list]);
  return (
    <>
      <Helmet>
        <title>Mark Tabulation</title>
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        {query_info.length > 0
          ? query_info.map((el, idx) =>
              el.value != undefined && el.value.length > 0 ? (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    color: head_color,
                    fontSize: head_size,
                    margin: "0rem 1rem",
                  }}
                >
                  <div>
                    <b>{el.title}</b>
                  </div>
                  <div>{el.value}</div>
                </div>
              ) : null
            )
          : null}
      </div>
      <div style={{ width: "85%", margin: "auto" }}>
        <TabulationList
          list={list}
          exam_id={query.get("exam_id")}
          colors={{ data_color, head_color, border_color }}
          size={{ data_size, head_size }}
        />
      </div>
    </>
  );
}
