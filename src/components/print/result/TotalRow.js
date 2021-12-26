import React, { useState } from "react";

export default function TotalRow(props) {
	const {
		student_id,
		exams,
		student_marks,
		gpa_list,
		grade_list,
		subjects,
		all_std_mark,
	} = props;
	const { head_size, head_color, border_color } = props.styles;
	const [gpa, setGpa] = useState(0);
	const [total_mark, setTotalMark] = useState(0);
	const [grade, setGrade] = useState("F");
	const [rank, setRank] = useState("");
	React.useEffect(() => {
		let all_mark = 0;
		let total = subjects.map((el) => {
			return exams.reduce((ecb, evalue) => {
				return (ecb =
					parseInt(ecb) +
					parseInt(
						student_marks.reduce((cb, val) => {
							if (val.subject_id == el.id && val.exam_id == evalue.id) {
								cb =
									parseInt(cb) +
									parseInt((val.total_mark * evalue.exam_percentage) / 100);
								all_mark += cb;
							}
							return cb;
						}, 0)
					));
			}, 0);
		});

		let totalForGPA = subjects.map((el) =>
			exams.reduce(
				(ecb, evalue) =>
					(ecb =
						parseInt(ecb) +
						parseInt(
							student_marks.reduce((cb, val) => {
								if (val.subject_id == el.id && val.exam_id == evalue.id) {
									cb =
										parseInt(cb) +
										parseInt(
											(val.total_mark * evalue.exam_percentage) /
												el.percentaged_full_mark
										);
								}
								return cb;
							}, 0)
						)),
				0
			)
		);
		setTotalMark(all_mark);
		let g = 0;
		g =
			totalForGPA.reduce(
				(cb, val) =>
					(cb =
						cb +
						gpa_list.filter(
							(el) => val >= el.starting_number && val <= el.ending_number
						)[0]?.gpa),
				0
			) / subjects.length;
		g = totalForGPA.every(
			(e) =>
				e != 0 ||
				gpa_list.filter(
					(el) => e >= el.starting_number && e <= el.ending_number
				)[0]?.gpa != 0
		)
			? g
			: 0;
		let gr = grade_list.filter(
			(el) => g >= el.starting_gpa && g < el.ending_gpa
		)[0]?.grade;
		setGpa(g.toFixed(2));
		setGrade(gr);
		let r = "";
		all_std_mark.forEach((el, idx) => {
			if (el[0] == student_id) r = all_std_mark.length - idx;
		});
		setRank(r);
	}, []);
	return (
		<>
			<tr>
				<th
					colSpan={2 + exams.length}
					style={{
						textAlign: "right",
						fontSize: head_size + "px",
						color: head_color,
						borderTop: `1px solid ${border_color}`,
					}}
				>
					Total Obtained Marks & Grade
				</th>
				<th
					style={{
						textAlign: "center",
						fontSize: head_size + "px",
						color: head_color,
						borderTop: `1px solid ${border_color}`,
					}}
				>
					{total_mark}
				</th>
				<th
					style={{
						textAlign: "center",
						fontSize: head_size + "px",
						color: head_color,
						borderTop: `1px solid ${border_color}`,
					}}
				>
					{gpa}
				</th>
				<th
					style={{
						textAlign: "center",
						fontSize: head_size + "px",
						color: head_color,
						borderTop: `1px solid ${border_color}`,
					}}
				>
					{grade}
				</th>
			</tr>
			<tr>
				<th
					colSpan={2 + exams.length}
					style={{
						textAlign: "right",
						fontSize: head_size + "px",
						color: head_color,
						borderTop: `1px solid ${border_color}`,
					}}
				>
					Rank
				</th>
				<th
					colSpan={3}
					style={{
						textAlign: "center",
						fontSize: head_size + "px",
						color: head_color,
						borderTop: `1px solid ${border_color}`,
					}}
				>
					{rank}
				</th>
			</tr>
		</>
	);
}
