import React from "react";
import uuid from "react-uuid";

export default function TableRow(props) {
	const { info, subjects, td_style, th_style } = props;
	const subjectMark = (com_subject_id) => {
		return info.filter((element) => element.subject_id == com_subject_id);
	};
	return (
		<tr>
			<td style={td_style}>{info[0].role}</td>
			<td style={td_style}>{info[0].student_name}</td>
			{subjects.map((el, idx) =>
				subjectMark(el.subject_id).length > 0 &&
				subjectMark(el.subject_id)[0].marks != undefined ? (
					subjectMark(el.subject_id)[0].marks.map((element) => (
						<th key={uuid()} className="text-center" style={th_style}>
							{element.value}
						</th>
					))
				) : (
					<th key={uuid()} className="text-center" style={th_style}>
						A
					</th>
				)
			)}
			<th style={th_style}>
				{subjects.reduce((cb, el) => {
					cb =
						parseInt(cb) +
						parseInt(
							subjectMark(el.subject_id)[0]?.marks?.reduce(
								(ecb, element) =>
									(ecb = parseInt(ecb) + parseInt(element.value)),
								0
							) || 0
						);
					return cb;
				}, 0) || 0}
			</th>
		</tr>
	);
}
