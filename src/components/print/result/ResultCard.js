/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import PrintOptions from "components/print/PrintOptions";
import { useQuery } from "components/print/Querytags";
import SchoolInfo from "components/print/SchoolInfo";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Input } from "reactstrap";
import { Call } from "services/API/Call";
import ResultCardTable from "./ResultCardTable";

export default function ResultCard() {
  const [logo_dir, setLogoDir] = useState({ left: "0%" });
  const [logo_size, setLogoSize] = useState(100);
  const [school_name_size, setSchoolNameSize] = useState(25);
  const [other_size, setOtherSize] = useState(14);
  const [school_name_color, setSchoolNameColor] = useState("#000");
  const [other_color, setOtherColor] = useState("#000");
  const [school_name, setSchoolName] = useState(true);
  const [other_info, setOtherInfo] = useState(true);
  const [logo, setLogo] = useState(true);
  const [line, setLine] = useState(true);

  const [head_color, setHeadColor] = useState("#000");
  const [data_color, setDataColor] = useState("#000");
  const [border_color, setBorderColor] = useState("#000");
  const [head_size, setHeadSize] = useState(15);
  const [data_size, setDataSize] = useState(14);
  let query = useQuery();
  const [list, setList] = useState([]);
  const [inf, setInf] = useState([]);
  const [gpa_list, setGpaList] = useState([]);
  const [grade_list, setGradeList] = useState([]);
  const [all_mark, setAllMark] = useState([]);
  React.useEffect(() => {
    let u = "results/get_result?card=true";
    if (query.get("published") != null) {
      u += "&published=" + query.get("published");
    } else if (query.get("unpublished") != null) {
      u += "&unpublished=" + query.get("unpublished");
    }
    if (query.get("result_id") != null) {
      u += "&result_id=" + query.get("result_id");
    }
    Call({ method: "get", url: u })
      .then((res) => setList(res))
      .catch((err) => console.log(err));
    Call({ method: "get", url: "settings/institute_info" })
      .then((res) => {
        setInf(res);
      })
      .catch((err) => console.log(err));
    Call({ method: "get", url: "settings/gpa" })
      .then((res) => setGpaList(res))
      .catch((err) => console.log(err));
    Call({ method: "get", url: "settings/grade" })
      .then((res) => setGradeList(res))
      .catch((err) => console.log(err));
  }, []);
  React.useEffect(() => {
    if (list.length > 0) {
      let all_std_mark = {};
      list.map(
        (element) =>
        (all_std_mark[element.student_id] = element.student_marks.reduce(
          (cb, val) => {
            if (val.student_id == element.student_id)
              cb = parseInt(cb) + parseInt(val.total_mark);
            return cb;
          },
          0
        ))
      );
      let entries = Object.entries(all_std_mark);

      let sorted = entries.sort((a, b) => a[1] - b[1]);
      setAllMark(sorted);
    }
  }, [list]);
  return (
    <div style={{ width: "100%", height: "auto", display: "block" }}>
      <Helmet>
        <title>Result Card</title>
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
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          height: "auto",
          marginBottom: "1.5rem",
        }}
      >
        {list.length > 0 &&
          gpa_list.length > 0 &&
          grade_list.length > 0 &&
          all_mark.length > 0
          ? list.map((el, idx) => (
            <div
              key={idx}
              style={{
                minHeight: "100vh",
                height: "100%",
                marginBottom: "5rem",
              }}
            >
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
                  inf,
                }}
              />
              <div style={{ width: "95%", margin: "auto" }}>
                <ResultCardTable
                  logo_size={logo_size}
                  gpa_list={gpa_list}
                  grade_list={grade_list}
                  list={el}
                  exam_id={query.get("exam_id")}
                  colors={{ data_color, head_color, border_color }}
                  size={{ data_size, head_size }}
                  all_mark={all_mark}
                />
              </div>
            </div>
          ))
          : null}
      </div>
    </div>
  );
}
