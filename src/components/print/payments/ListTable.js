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
          {data.length > 0
            ? data.map((e, idx) => (
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
            : null}
          <tr>
            <th
              colSpan={4}
              style={{
                fontSize: head_size + "px",
                color: data_color,
                borderTop: `1px solid ${border_color}`,
                whiteSpace: "pre",
                textAlign: "right",
              }}
            >
              Total
            </th>
            <th
              style={{
                fontSize: head_size + "px",
                color: data_color,
                borderTop: `1px solid ${border_color}`,
                whiteSpace: "pre",
              }}
            >
              {data.reduce(
                (cb, val) => (cb = parseInt(cb) + parseInt(val.payment_amount)),
                0
              )}
            </th>
            <th
              style={{
                fontSize: head_size + "px",
                color: data_color,
                borderTop: `1px solid ${border_color}`,
                whiteSpace: "pre",
              }}
            >
              {data.reduce(
                (cb, val) => (cb = parseInt(cb) + parseInt(val.paid_amount)),
                0
              )}
            </th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
