/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Table } from "reactstrap";
import CardBackground from "./bg.png";
export default function AdCard(props) {
	const { data, colors, size, exam_data, inf } = props;
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
		<div
			style={{
				padding: "2.5rem",
				height: "650px",
				position: "relative",
				margin: "auto",
				width: "100%",
			}}
		>
			<img
				src={CardBackground}
				style={{
					width: "100%",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: -999,
				}}
			/>
			<div style={{ width: "100%", position: "relative", height: "120px" }}>
				<img
					src={process.env.REACT_APP_IMAGE_PATH + "/" + data.student_image}
					alt="Student"
					style={{
						width: logo_size + "px",
						objectFit: "cover",
						position: "absolute",
						top: 0,
						right: 0,
					}}
				/>
				<img
					src={process.env.REACT_APP_IMAGE_PATH + "/" + inf.institute_logo}
					alt="Institute Logo"
					style={{
						width: logo_size + "px",
						objectFit: "cover",
						position: "absolute",
						top: 0,
						left: 0,
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: "50%",
						transform: "translateX(-50%)",
						textAlign: "center",
						width: "100%",
					}}
				>
					<h1
						style={{
							fontSize: "28px",
							textTransform: "uppercase",
							fontWeight: "bold",
						}}
					>
						{inf.institute_name}
					</h1>
					<h2 style={{ fontSize: "13px" }}>{inf.institute_address}</h2>
					<h2 style={{ fontSize: "13px" }}>
						Phonenumber: {inf.institute_phonenumbers} | Email:{" "}
						{inf.institute_email}
					</h2>
				</div>
			</div>

			<div style={{ width: "100%" }}>
				<div
					style={{
						padding: "0.5rem 1rem",
						width: "120px",
						margin: "auto",
						backgroundColor: "#2ca887",
						color: "white",
					}}
				>
					Admit Card
				</div>
				<div
					style={{
						textAlign: "center",
					}}
				>
					{exam_data.exam_name}
				</div>
				<div
					style={{
						maxWidth: "70%",
						display: "flex",
						justifyContent: "center",
						marginTop: "2rem",
						flexDirection: "column",

						margin: "auto",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "1.5rem",
						}}
					>
						<div>
							<b>Centre Name:</b> {inf.institute_name}
						</div>
						<div>
							<b>Class:</b>{" "}
							<a
								style={{
									padding: "0.5rem",
									marginLeft: "0.2rem",
									border: "1px solid grey",
								}}
							>
								{data.class}
							</a>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "1.5rem",
							width: "100%",
						}}
					>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<b>Name Of Examinee:</b>
							<a style={{ marginLeft: "1rem" }}>{data.student_name}</a>
						</div>
						<div>
							<b>ID No:</b>
							<a
								style={{
									padding: "0.5rem",
									marginLeft: "0.2rem",
									border: "1px solid grey",
								}}
							>
								{data.student_identifier}
							</a>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "1.5rem",
						}}
					>
						<div style={{ width: "100%" }}>
							<b>Father's Name:</b>

							<a style={{ marginLeft: "1rem" }}>{data.father_name}</a>
						</div>
						<div>
							<b>Session:</b>
							<a
								style={{
									padding: "0.3rem",
									marginLeft: "0.2rem",
									border: "1px solid grey",
								}}
							>
								{data.session}
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					position: "absolute",
					bottom: "15%",
					display: "flex",
					justifyContent: "space-between",
					fontWeight: "bold",
					width: "90%",
				}}
			>
				<div>
					Type of the examinee: <a style={{ color: "#fc0352" }}>REGULAR</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						textAlign: "center",
					}}
				>
					<div
						style={{
							fontSize: "19px",
							padding: "0.5rem 0.2rem",
							borderTop: "1px solid grey",
						}}
					>
						Head Teacher
					</div>
					<div
						style={{
							fontSize: "13px",
						}}
					>
						{inf.institute_name}
					</div>
				</div>
			</div>
		</div>
	);
}
