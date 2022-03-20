import React from "react";
import { Table } from "reactstrap";

export default function ICard(props) {
	const { data, colors, size, school_info } = props;
	const {
		logo_size,
		head_size,
		data_size,
		image_size,
		card_width,
		card_height,
	} = size;
	const { head_color, data_color, border_color } = colors;
	const text = {
		whiteSpace: "pre-wrap",
		textAlign: "left",
		color: data_color,
		fontSize: data_size + "px",
		textTransform: "uppercase",
	};
	const td_style = {
		display: "flex",
		justifyContent: "space-between",
		maxWidth: "70%",
		margin: "auto",
		fontSize: head_size + "px",
		marginTop: "0.3rem",
		color: head_color,
		textTransform: "uppercase",
	};
	return (
		<div
			style={{
				position: "relative",
				width: card_width + "px",
				height: card_height + "px",
				margin: "1rem",
				padding: "0.5rem",
				border: "1px solid grey",
				background: "white",
			}}
		>
			<div>
				<div
					style={{
						textAlign: "center",
					}}
				>
					<img
						src={
							process.env.REACT_APP_IMAGE_PATH +
							"/" +
							school_info.institute_logo
						}
						alt="Logo"
						style={{ width: logo_size + "px", objectFit: "cover" }}
					/>
				</div>
				<div style={{ textAlign: "center", textTransform: "uppercase" }}>
					{school_info.institute_name}
				</div>
			</div>
			<div style={{ textAlign: "center" }}>
				<img
					src={process.env.REACT_APP_IMAGE_PATH + "/" + data.student_image}
					alt="Student's"
					style={{
						width: image_size + "px",
						height: image_size + "px",
						objectFit: "cover",
					}}
				/>
			</div>
			<div
				style={{
					textAlign: "center",
					fontSize: "14px",
					marginTop: "0.3rem",
					color: data_color,
					textTransform: "uppercase",
				}}
			>
				<b>{data.student_name}</b>
			</div>
			<div style={td_style}>
				<div>ID:</div>
				<div style={text}>{data.student_identifier}</div>
			</div>
			<div style={td_style}>
				<div>Class:</div>
				<div style={text}>{data.class}</div>
			</div>
			<div style={td_style}>
				<div>Department:</div>
				<div style={text}>{data.department}</div>
			</div>
			<div style={td_style}>
				<div>Session:</div>
				<div style={text}>{data.session}</div>
			</div>
			<div style={td_style}>
				<div>Mother Name:</div>
				<div style={text}>{data.mother_name}</div>
			</div>
			<div style={td_style}>
				<div>Father Name:</div>
				<div style={text}>{data.father_name}</div>
			</div>
			<div style={td_style}>
				<div>Contact:</div>
				<div style={text}>{data.primary_phone}</div>
			</div>
		</div>
	);
}
