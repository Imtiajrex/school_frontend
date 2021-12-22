import React, { useState } from "react";

export default function ExamRow(props) {
	const { subject, exams, student_marks, gpa_list, grade_list } = props;
	const { data_size, data_color, border_color } = props.styles;
	const [total_mark, setTotalMark] = useState(0);
	const [marks, setMarks] = useState(0);
	const [gpa, setGpa] = useState(0.0);
	const [grade, setGrade] = useState("F");
	React.useEffect(() => {
		let total =
			exams.length > 0
				? exams.reduce(
						(ecb, evalue) =>
							(ecb =
								parseInt(ecb) +
								parseInt(
									student_marks.reduce((cb, val) => {
										if (
											val.subject_id == subject.id &&
											val.exam_id == evalue.id
										)
											cb =
												parseInt(cb) +
												parseInt(
													(val.total_mark * evalue.exam_percentage) / 100
												);
										return cb;
									}, 0)
								)),
						0
				  )
				: 0;
		setTotalMark(total);
		setMarks(
			exams.length > 0
				? exams.map((e, idx) =>
						student_marks.filter(
							(el) => el.subject_id == subject.id && el.exam_id == e.id
						).length > 0
							? student_marks.filter(
									(el) => el.subject_id == subject.id && el.exam_id == e.id
							  )[0].total_mark
							: 0
				  )
				: null
		);
		let g = gpa_list.filter((el) => {
			const tot = Math.round((total * 100) / subject.percentaged_full_mark);
			return tot >= el.starting_number && tot <= el.ending_number;
		})[0]?.gpa;
		console.log(g);

		console.log("====================================");
		let grade = grade_list.filter(
			(el) => g >= el.starting_gpa && g < el.ending_gpa
		)[0]?.grade;
		setGrade(grade);
		setGpa(g?.toFixed(2));
	}, [student_marks]);
	return (
		<tr>
			<td
				style={{
					fontSize: data_size + "px",
					color: data_color,
					borderTop: `1px solid ${border_color}`,
				}}
			>
				{subject.subject_name}
			</td>
			<td
				style={{
					fontSize: data_size + "px",
					color: data_color,
					borderTop: `1px solid ${border_color}`,
				}}
			>
				{subject.percentaged_full_mark}
			</td>
			{exams.length > 0
				? exams.map((e, idx) => (
						<td
							key={idx}
							style={{
								fontSize: data_size + "px",
								color: data_color,
								borderTop: `1px solid ${border_color}`,
								textAlign: "center",
							}}
						>
							{(marks != null && marks[idx] != null) || marks[idx] != null ? (
								<>{parseInt((marks[idx] * e.exam_percentage) / 100)}</>
							) : (
								"A"
							)}
						</td>
				  ))
				: null}
			<td
				style={{
					fontSize: data_size + "px",
					color: data_color,
					borderTop: `1px solid ${border_color}`,
					textAlign: "center",
				}}
			>
				{total_mark}
			</td>
			<td
				style={{
					fontSize: data_size + "px",
					color: data_color,
					borderTop: `1px solid ${border_color}`,
					textAlign: "center",
				}}
			>
				{gpa}
			</td>
			<td
				style={{
					fontSize: data_size + "px",
					color: data_color,
					borderTop: `1px solid ${border_color}`,
					textAlign: "center",
				}}
			>
				{grade}
			</td>
		</tr>
	);
}
