import React, { useState } from "react";

import { Input } from "reactstrap";
import Button from "reactstrap/lib/Button";
import "./style.css";

export default function PrintOptions(props) {
  const {
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
  } = props.val;
  return (
    <div>
      <div className="bg-dark noprint printoptions" style={{ right: "0%" }}>
        <div className="mb-1 mt-1">Print Dialog</div>
        <Input
          type="number"
          placeholder="Logo Size"
          value={logo_size}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setLogoSize(e.target.value)}
        />
        <small>Logo Direction</small>
        <Input
          type="select"
          value={logo_dir.left == undefined ? "right" : "left"}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => {
            setLogoDir(
              e.target.value == "left" ? { left: "0%" } : { right: "0%" }
            );
          }}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
        </Input>
        <small>School Name Size</small>
        <Input
          type="number"
          placeholder="School Name Size"
          value={school_name_size}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setSchoolNameSize(e.target.value)}
        />
        <small>Address,Contact Size</small>
        <Input
          type="number"
          placeholder="Address,Number Size"
          value={other_size}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setOtherSize(e.target.value)}
        />
        <small>School Name Color</small>
        <Input
          type="color"
          placeholder="School Name Color"
          value={school_name_color}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setSchoolNameColor(e.target.value)}
        />
        <small>Address,Contact Color</small>
        <Input
          type="color"
          placeholder="Address,Number Color"
          value={other_color}
          bsSize="sm"
          className="mb-1"
          onChange={(e) => setOtherColor(e.target.value)}
        />
        <small>School Name</small>
        <input
          type="checkbox"
          checked={school_name}
          className="mb-1"
          onChange={(e) => setSchoolName(!school_name)}
        />
        <br />
        <small>Other Info</small>
        <input
          type="checkbox"
          checked={other_info}
          className="mb-1"
          onChange={(e) => setOtherInfo(!other_info)}
        />
        <br />
        <small>Logo</small>
        <input
          type="checkbox"
          checked={logo}
          className="mb-1"
          onChange={(e) => setLogo(!logo)}
        />
        <br />
        <small>Line</small>
        <input
          type="checkbox"
          checked={line}
          className="mb-1"
          onChange={(e) => setLine(!line)}
        />
        <br />
        <Button size="sm" type="button" onClick={() => window.print()}>
          Print
        </Button>
      </div>
    </div>
  );
}
