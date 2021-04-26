import React from "react";
import { Table } from "reactstrap";

export default function AdCard(props) {
	const { data, colors, size, exam_data } = props;
	const { logo_size, head_size, data_size } = size;
	const { head_color, data_color, border_color } = colors;
	const th_style = {
		padding: "0.4rem",
		color: head_color,
		fontSize: head_size + "px",
		borderTop: "1px solid " + border_color,
	};
	const td_style = {
		padding: "0.4rem",
		color: data_color,
		fontSize: data_size + "px",
		borderTop: "1px solid " + border_color,
	};
	return (
		<div style={{ position: "relative" }}>
			<div style={{ textAlign: "center" }}>
				<b
					style={{
						fontSize: head_size + "px",
						textAlign: "center",
						color: head_color,
						margin: "0.3rem",
					}}
				>
					Admit Card
				</b>
			</div>
			<Table style={{ maxWidth: "65%", margin: "auto" }}>
				<tbody>
					<tr>
						<th style={th_style}>Student ID</th>
						<td style={td_style}>{data.student_identifier}</td>
						<th style={th_style}>Student Name</th>
						<td style={td_style}>{data.student_name}</td>
					</tr>
					<tr>
						<th style={th_style}>Roll</th>
						<td style={td_style}>{data.role}</td>
						<th style={th_style}>Class</th>
						<td style={td_style}>{data.class}</td>
					</tr>
					<tr>
						<th style={th_style}>Department</th>
						<td style={td_style}>{data.department}</td>
						<th style={th_style}>Session</th>
						<td style={td_style}>{data.session}</td>
					</tr>
					<tr className="text-center">
						<th colSpan="2" style={th_style}>
							Exam
						</th>
						<td colSpan="2" style={td_style}>
							{exam_data.exam_name}
						</td>
					</tr>
				</tbody>
			</Table>
			<div
				className="d-flex"
				style={{
					maxWidth: "65%",
					justifyContent: "space-between",
					margin: "2.5rem auto",
				}}
			>
				<div style={{ ...th_style, borderTop: "1px dotted black" }}>
					Exam Controller
				</div>
				<div style={{ ...th_style, borderTop: "1px dotted black" }}>
					Office Executive
				</div>
			</div>
		</div>
	);
}
