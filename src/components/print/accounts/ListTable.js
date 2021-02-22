import React from "react";
import Table from "reactstrap/lib/Table";

export default function ListTable(props) {
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
              ? head.map((e) => (
                  <th
                    scope="col"
                    style={{
                      fontSize: head_size + "px",
                      color: head_color,
                      borderTop: `1px solid ${border_color}`,
                    }}
                  >
                    {e}
                  </th>
                ))
              : null}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((e, idx) => (
              <tr>
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

                {val.map((el) => (
                  <td
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
          ) : (
            <tr>
              <td
                colSpan={val.length + 1}
                style={{
                  fontSize: data_size + "px",
                  color: data_color,
                  borderTop: `1px solid ${border_color}`,
                  whiteSpace: "pre",
                }}
                className="text-center"
              >
                Found Nothing!
              </td>
            </tr>
          )}
          {data.length > 0 ? (
            <tr>
              <td
                style={{
                  fontSize: data_size + "px",
                  color: data_color,
                  borderTop: `1px solid ${border_color}`,
                  whiteSpace: "pre",
                  textAlign: "right",
                }}
                colSpan="3"
              >
                Total Credit
              </td>
              <td
                colSpan="2"
                style={{
                  fontSize: data_size + "px",
                  color: data_color,
                  borderTop: `1px solid ${border_color}`,
                  whiteSpace: "pre",
                  textAlign: "left",
                }}
              >
                {data.reduce(
                  (cb, val) => (cb = parseInt(cb) + parseInt(val.amount)),
                  0
                )}
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>
    </div>
  );
}
