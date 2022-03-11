import React, { useState } from "react";
import { Call } from "services/API/Call";
export default function SchoolInfo(props) {
	const [info, setInfo] = useState({});
	const {
		logo_dir,
		logo_size,
		school_name_size,
		other_size,
		school_name_color,
		other_color,
		school_name = false,
		other_info = false,
		logo = false,
		line = false,
		inf,
		data,
	} = props.val;

	React.useEffect(() => {
		if (inf == undefined)
			Call({ method: "get", url: "settings/institute_info" })
				.then((res) => {
					setInfo(res);
				})
				.catch((err) => console.log(err));
		else {
			setInfo(inf);
		}
	}, [inf]);
	return (
		<div
			style={{
				position: "relative",
				maxWidth: "100%",
			}}
		>
			{logo ? (
				<div
					style={{
						position: "absolute",
						top: "0%",
						margin: "1rem",
						...logo_dir,
					}}
				>
					<img
						src={process.env.REACT_APP_IMAGE_PATH + "/" + info.institute_logo}
						alt="School Logo"
						style={{ width: logo_size + "px", objectFit: "cover" }}
					/>
				</div>
			) : null}

			<div
				style={{
					position: "absolute",
					top: "0%",
					right: "0%",
					margin: "1rem",
				}}
			>
				<img
					src={process.env.REACT_APP_IMAGE_PATH + "/" + data.student_image}
					alt="Student Image"
					style={{ width: logo_size + "px", objectFit: "cover" }}
				/>
			</div>
			<div
				className="w-100"
				style={{
					textAlign: "center",
				}}
			>
				<div
					style={{
						maxWidth: "450px",
						margin: "auto",
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
					}}
				>
					{school_name ? (
						<>
							<p
								style={{
									fontSize: school_name_size + "px",
									marginBottom: 0,
									color: school_name_color,
									textTransform: "uppercase",
								}}
							>
								EDEN RESIDENTIAL SCHOOL & COLLEGE
							</p>
							<p
								style={{
									fontSize: school_name_size + "px",
									marginBottom: 0,
									color: school_name_color,
									textTransform: "uppercase",
								}}
							>
								{info.institute_name}
							</p>
						</>
					) : null}
					{other_info ? (
						<>
							<p
								style={{
									fontSize: other_size + "px",
									marginBottom: 0,
									color: other_color,
									textTransform: "uppercase",
								}}
							>
								ADDRESS: {info.institute_address}
							</p>

							<p
								style={{
									fontSize: other_size + "px",
									marginBottom: 0,
									color: other_color,
									textTransform: "uppercase",
								}}
							>
								CONTACT: {info.institute_phonenumbers}
							</p>
							<p
								style={{
									fontSize: other_size + "px",
									marginBottom: 0,
									color: other_color,
									textTransform: "uppercase",
								}}
							>
								EMAIL: {info.institute_email}
							</p>
						</>
					) : null}
				</div>
			</div>
			{line ? <hr /> : null}
		</div>
	);
}
