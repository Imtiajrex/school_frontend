import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";
import MarkAssignModal from "./MarkAssignModal";

export default function MarkList(props) {
  const { list, list_head, loading, indexed = true, query_tags } = props;
  const [open, setopen] = useState(false);
  const [data, setdata] = useState({});
  const [tags, settags] = useState({});

  return (
    <>
      <Table className="align-items-center table-dark table-flush" responsive>
        <thead className="thead-dark">
          <tr>
            {indexed ? <th scope="col">#</th> : null}
            {list_head.map((item, index) => (
              <th key={uuid()}>{item.title}</th>
            ))}
            <th>Assign Mark</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={list_head.length + 3} className="text-center">
                <Spinner color="primary" />
              </td>
            </tr>
          ) : typeof list == "object" && list.length > 0 ? (
            list.map((element, index) => (
              <tr key={uuid()}>
                {indexed ? (
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                ) : null}
                {list_head.map((item, index) => (
                  <th key={uuid()} style={{ whiteSpace: "pre" }}>
                    {element[item.identifier]}
                  </th>
                ))}
                <th>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => {
                      setdata({
                        session_id: element.session_id,
                        class_id: element.class_id,
                        exam_id: element.exam_id,
                        department_id: element.department_id,
                        subject_id: element.subject_id,
                      });
                      settags([
                        { title: "Class", value: element.class },
                        { title: "Department", value: element.department },
                        { title: "Session", value: element.session },
                        { title: "Exam", value: element.exam },
                        { title: "Subject", value: element.subject },
                      ]);
                      setopen(true);
                    }}
                  >
                    Assign Marks
                  </Button>
                </th>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={list_head.length + 3} className="text-center">
                Found Nothing
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <MarkAssignModal open={open} setopen={setopen} data={data} tags={tags} />
    </>
  );
}
