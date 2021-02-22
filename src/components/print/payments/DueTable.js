import React from "react";
import Table from "reactstrap/lib/Table";

export default function DueTable(props) {
  const { head, val, data, indexed } = props;
  const { data_color, head_color, border_color } = props.colors;
  const { data_size, head_size } = props.size;

  return (
    <div>
      <Table>
        <thead>
          <tr>
            {indexed ? (
              <th
                scope="col"
                style={{
                  fontSize: head_size + "px",
                  color: head_color,
                  borderTop: `1px solid ${border_color}`,
                }}
              >
                #
              </th>
            ) : null}

            {head != undefined
              ? head.map((e, idx) => (
                  <th
                    scope="col"
                    style={{
                      fontSize: head_size + "px",
                      color: head_color,
                      borderTop: `1px solid ${border_color}`,
                    }}
                    key={idx}
                  >
                    {e}
                  </th>
                ))
              : null}
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            ? data.map((e, idx) => (
                <tr key={idx}>
                  {indexed ? (
                    <td
                      style={{
                        fontSize: data_size + "px",
                        color: data_color,
                        borderTop: `1px solid ${border_color}`,
                      }}
                    >
                      {idx + 1}
                    </td>
                  ) : null}

                  {val.map((el, index) => (
                    <td
                      key={index}
                      style={{
                        fontSize: data_size + "px",
                        color: data_color,
                        borderTop: `1px solid ${border_color}`,
                        whiteSpace: "pre",
                      }}
                    >
                      {e[el]}
                    </td>
                  ))}
                </tr>
              ))
            : null}
          <tr>
            <th
              colSpan="3"
              style={{
                fontSize: data_size + "px",
                color: data_color,
                borderTop: `1px solid ${border_color}`,
                textAlign: "right",
              }}
            >
              {" "}
              Total
            </th>
            <th>
              {data.reduce(
                (cb, val) => (cb = parseInt(cb) + parseInt(val.fees)),
                0
              )}
            </th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
