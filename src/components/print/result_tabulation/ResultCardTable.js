import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";
import { Call } from "services/API/Call";
import TableRow from "./ExamRow";
import ExamRow from "./ExamRow";
import TotalCols from "./TotalCols";

export default function ResultTable(props) {
	const {
		list = [],
		loading = false,
		gpa_list,
		grade_list,
		logo_size,
		all_mark,
		td_style,
	} = props;
	const { data_color, head_color, border_color } = props.colors;
	const { data_size, head_size } = props.size;

	const [exams, setExams] = useState([]);
	const [subjects, setSubjects] = useState([]);
	const [student_marks, setStudentMarks] = useState([]);

	const getData = () => {
		if (list.result_name != undefined) {
			setExams(list.exams);
			setStudentMarks(list.student_marks);
			let subs = [];
			list.exams.map((e) =>
				e.subjects.map((el) => {
					let sub = subs.filter((element) => element.id == el.id);
					if (sub.length == 0)
						subs.push({
							...el,
							full_mark:
								el.marks_structure != null
									? el.marks_structure.total_exam_mark
									: 0,
							percentaged_full_mark:
								el.marks_structure != null
									? (el.marks_structure.total_exam_mark * e.exam_percentage) /
									  100
									: 0,
						});
					else {
						let s = subs.filter((element) => element.id != el.id);
						subs = [
							...s,
							{
								...el,
								full_mark: el.marks_structure != null ? sub[0].full_mark : 0,
								percentaged_full_mark:
									el.marks_structure != null
										? sub[0].percentaged_full_mark +
										  (el.marks_structure.total_exam_mark * e.exam_percentage) /
												100
										: 0,
							},
						];
					}
				})
			);
			setSubjects(subs);
		}
	};
	React.useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<tbody>
				<td style={td_style}>{list.role}</td>
				<td style={td_style}>{list.student_name}</td>
				{subjects.length > 0 && grade_list.length > 0 ? (
					<TotalCols
						grade_list={grade_list}
						gpa_list={gpa_list}
						subjects={subjects}
						exams={exams}
						student_id={list.student_id}
						student_marks={student_marks}
						styles={{ head_size, head_color, border_color }}
						all_std_mark={all_mark}
					/>
				) : null}
			</tbody>
		</>
	);
}
