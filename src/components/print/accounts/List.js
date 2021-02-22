import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Call } from "services/API/Call";
import PrintOptions from "../PrintOptions";
import SchoolInfo from "../SchoolInfo";
import ListTable from "./ListTable";
import { Input, Table } from "reactstrap";

export default function List(props) {
  const { url, title, head, val, indexed = true } = props;
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
  const [balance, setBalance] = useState([]);
  React.useEffect(() => {
    Call({ method: "get", url })
      .then((res) => {
        setList(res);
      })
      .catch((err) => console.log(err));
    Call({ mehtod: "get", url: "accounts/account_balance" })
      .then((res) => setBalance(res))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
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
        <div className="p-5">
          <h2 className="text-center">Cash - Credit</h2>
          <ListTable
            head={head}
            data={list.filter(
              (el) => el.balance_form == "Cash" && el.entry_type == "Credit"
            )}
            val={val}
            colors={{ data_color, head_color, border_color }}
            size={{ data_size, head_size }}
            indexed={indexed}
          />
        </div>
        <div className="p-5">
          <h2 className="text-center">Cash - Debit</h2>
          <ListTable
            head={head}
            data={list.filter(
              (el) => el.balance_form == "Cash" && el.entry_type == "Debit"
            )}
            val={val}
            colors={{ data_color, head_color, border_color }}
            size={{ data_size, head_size }}
            indexed={indexed}
          />
        </div>
        <div className="p-5">
          <Table>
            <tbody>
              <tr>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  Total Cash Credit
                </td>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  {list
                    .filter(
                      (el) =>
                        el.balance_form == "Cash" && el.entry_type == "Credit"
                    )
                    .reduce(
                      (cb, val) => (cb = parseInt(cb) + parseInt(val.amount)),
                      0
                    )}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  Total Cash Debit
                </td>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  {list
                    .filter(
                      (el) =>
                        el.balance_form == "Cash" && el.entry_type == "Debit"
                    )
                    .reduce(
                      (cb, val) => (cb = parseInt(cb) + parseInt(val.amount)),
                      0
                    )}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  Total Cash
                </td>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  {list
                    .filter((el) => el.balance_form == "Cash")
                    .reduce(
                      (cb, val) =>
                        (cb =
                          parseInt(cb) +
                          parseInt(
                            val.entry_type == "Debit" ? -val.amount : val.amount
                          )),
                      0
                    )}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <hr />
      <div>
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
        <div className="p-5">
          <h2 className="text-center">Bank - Credit</h2>
          <ListTable
            head={head}
            data={list.filter(
              (el) => el.balance_form == "Bank" && el.entry_type == "Credit"
            )}
            val={val}
            colors={{ data_color, head_color, border_color }}
            size={{ data_size, head_size }}
            indexed={indexed}
          />
        </div>
        <div className="p-5">
          <h2 className="text-center">Bank - Debit</h2>
          <ListTable
            head={head}
            data={list.filter(
              (el) => el.balance_form == "Bank" && el.entry_type == "Debit"
            )}
            val={val}
            colors={{ data_color, head_color, border_color }}
            size={{ data_size, head_size }}
            indexed={indexed}
          />
        </div>
        <div className="p-5">
          <Table>
            <tbody>
              <tr>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  Total Bank Credit
                </td>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  {list
                    .filter(
                      (el) =>
                        el.balance_form == "Bank" && el.entry_type == "Credit"
                    )
                    .reduce(
                      (cb, val) => (cb = parseInt(cb) + parseInt(val.amount)),
                      0
                    )}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  Total Bank Debit
                </td>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  {list
                    .filter(
                      (el) =>
                        el.balance_form == "Bank" && el.entry_type == "Debit"
                    )
                    .reduce(
                      (cb, val) => (cb = parseInt(cb) + parseInt(val.amount)),
                      0
                    )}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  Total Bank
                </td>
                <td
                  style={{
                    fontSize: data_size + "px",
                    color: data_color,
                    borderTop: `1px solid ${border_color}`,
                    whiteSpace: "pre",
                  }}
                >
                  {list
                    .filter((el) => el.balance_form == "Bank")
                    .reduce(
                      (cb, val) =>
                        (cb =
                          parseInt(cb) +
                          parseInt(
                            val.entry_type == "Debit" ? -val.amount : val.amount
                          )),
                      0
                    )}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="p-5">
        <Table>
          <tbody>
            <tr>
              <td
                style={{
                  fontSize: data_size + "px",
                  color: data_color,
                  borderTop: `1px solid ${border_color}`,
                  whiteSpace: "pre",
                }}
              >
                Current Cash Balance
              </td>
              <td
                style={{
                  fontSize: data_size + "px",
                  color: data_color,
                  borderTop: `1px solid ${border_color}`,
                  whiteSpace: "pre",
                }}
              >
                {balance.length > 0 ? balance[0].cash : null}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: data_size + "px",
                  color: data_color,
                  borderTop: `1px solid ${border_color}`,
                  whiteSpace: "pre",
                }}
              >
                Current Bank Balance
              </td>
              <td
                style={{
                  fontSize: data_size + "px",
                  color: data_color,
                  borderTop: `1px solid ${border_color}`,
                  whiteSpace: "pre",
                }}
              >
                {balance.length > 0 ? balance[0].bank : null}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
