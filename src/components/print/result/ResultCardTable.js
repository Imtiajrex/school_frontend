import React, { useState } from "react";
import Button from "reactstrap/lib/Button";
import Spinner from "reactstrap/lib/Spinner";
import Table from "reactstrap/lib/Table";

import uuid from "react-uuid";
import { Call } from "services/API/Call";
import TableRow from "./ExamRow";
import ExamRow from "./ExamRow";
import TotalRow from "./TotalRow";

export default function TabulationList(props) {
	const {
		list = [],
		loading = false,
		gpa_list,
		grade_list,
		logo_size,
		all_mark,
	} = props;
	const [exams, setExams] = useState([]);
	const [subjects, setSubjects] = useState([]);
	const [student_marks, setStudentMarks] = useState([]);
	const { data_color, head_color, border_color } = props.colors;
	const { data_size, head_size } = props.size;
	const td_style = {
		whiteSpace: "pre-wrap",
		fontSize: data_size + "px",
		color: head_color,
		borderBottom: `1px solid ${border_color}`,
		padding: "0.4rem",
	};
	const th_style = {
		whiteSpace: "pre-wrap",
		fontSize: data_size + "px",
		color: data_color,
		borderBottom: `1px solid ${border_color}`,
		padding: "0.4rem",
	};
	React.useEffect(() => {
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
	}, []);
	return (
		<>
			<div
				className="d-flex w-100"
				style={{
					justifyContent: "center",
					position: "relative",
					minHeight: "175px",
				}}
			>
				<Table
					className="align-items-center"
					style={{
						maxWidth: "300px",
						position: "absolute",
						top: "0%",
						left: "0%",
					}}
				>
					<tbody>
						<tr>
							<th style={th_style}>ID</th>
							<td style={td_style}>{list.student_identifier}</td>
						</tr>
						<tr>
							<th style={th_style}>Name</th>
							<td style={td_style}>{list.student_name}</td>
						</tr>
						<tr>
							<th style={th_style}>Class</th>
							<td style={td_style}>{list.class}</td>
						</tr>
						<tr>
							<th style={th_style}>Department</th>
							<td style={td_style}>{list.department}</td>
						</tr>
						<tr>
							<th style={th_style}>Role</th>
							<td style={td_style}>{list.role}</td>
						</tr>
					</tbody>
				</Table>
				<div style={{ maxWidth: "300px" }}>
					<b
						style={{
							textAlign: "center",
							color: head_color,
							fontSize: head_size + "px",
						}}
					>
						{list.result_name}
					</b>
					<p
						style={{
							textAlign: "center",
							color: data_color,
							fontSize: data_size + "px",
						}}
					>
						Result Card
					</p>
				</div>
				<div
					style={{
						maxWidth: "300px",
						position: "absolute",
						top: "0%",
						right: "0%",
					}}
				>
					<img
						src={process.env.REACT_APP_IMAGE_PATH + "/" + list.student_image}
						alt="Student"
						style={{ width: logo_size + "px", objectFit: "cover" }}
					/>
				</div>
			</div>
			<Table className="align-items-center" responsive border={1}>
				<thead>
					<tr>
						<th
							rowSpan="2"
							style={{
								fontSize: head_size + "px",
								color: head_color,
								borderBottom: `1px solid ${border_color}`,
							}}
						>
							Subjects
						</th>
						<th
							rowSpan="2"
							style={{
								fontSize: head_size + "px",
								color: head_color,
								borderBottom: `1px solid ${border_color}`,
							}}
						>
							Full Marks
						</th>
						<th
							colSpan={exams.length}
							style={{
								fontSize: head_size + "px",
								color: head_color,
								borderBottom: `1px solid ${border_color}`,
								textAlign: "center",
							}}
						>
							Exams
						</th>
						<th
							rowSpan="2"
							style={{
								fontSize: head_size + "px",
								color: head_color,
								borderBottom: `1px solid ${border_color}`,
								textAlign: "center",
							}}
						>
							Total Marks
						</th>
						<th
							rowSpan="2"
							style={{
								fontSize: head_size + "px",
								color: head_color,
								borderBottom: `1px solid ${border_color}`,
								textAlign: "center",
							}}
						>
							GPA
						</th>
						<th
							rowSpan="2"
							style={{
								fontSize: head_size + "px",
								color: head_color,
								borderBottom: `1px solid ${border_color}`,
								textAlign: "center",
							}}
						>
							Grade
						</th>
					</tr>
					<tr>
						{exams.length > 0
							? exams.map((el, idx) => (
									<th
										key={idx}
										style={{
											fontSize: head_size + "px",
											color: head_color,
											borderBottom: `1px solid ${border_color}`,
											textAlign: "center",
											width: "120px",
											whiteSpace: "normal",
										}}
									>
										{el.exam_name} ({el.exam_percentage}%)
									</th>
							  ))
							: null}
					</tr>
				</thead>
				<tbody>
					{loading ? (
						<tr>
							<td colSpan={6} className="text-center">
								<Spinner color="primary" />
							</td>
						</tr>
					) : subjects.length > 0 &&
					  gpa_list.length > 0 &&
					  grade_list.length > 0 ? (
						subjects.map((el, idx) => (
							<ExamRow
								key={idx}
								styles={{ data_size, data_color, border_color }}
								subject={el}
								exams={exams}
								student_marks={student_marks}
								gpa_list={gpa_list}
								grade_list={grade_list}
								subjects={subjects.length}
							/>
						))
					) : (
						<tr>
							<td colSpan={6} className="text-center">
								Found Nothing
							</td>
						</tr>
					)}
					{subjects.length > 0 && grade_list.length > 0 ? (
						<TotalRow
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
			</Table>
			<div
				style={{ display: "flex", justifyContent: "space-between" }}
				className="mt-5"
			>
				<div
					style={{
						borderBottom: "1px dotted " + head_color,
						padding: "0.2rem",
					}}
				>
					Exam Controller
				</div>
				<div
					style={{
						borderBottom: "1px dotted " + head_color,
						padding: "0.2rem",
					}}
				>
					Principal
				</div>
			</div>
		</>
	);
}
