/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import PrintOptions from "components/print/PrintOptions";
import { useQuery } from "components/print/Querytags";
import SchoolInfo from "components/print/SchoolInfo";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Input, Table } from "reactstrap";
import { Call } from "services/API/Call";
import ResultCardTable from "./ResultCardTable";

export default function ResultTabulation() {
	const [logo_dir, setLogoDir] = useState({ left: "0%" });
	const [logo_size, setLogoSize] = useState(100);
	const [school_name_size, setSchoolNameSize] = useState(25);
	const [other_size, setOtherSize] = useState(14);
	const [school_name_color, setSchoolNameColor] = useState("#000");
	const [other_color, setOtherColor] = useState("#000");
	const [school_name, setSchoolName] = useState(true);
	const [other_info, setOtherInfo] = useState(true);
	const [logo, setLogo] = useState(true);
	const [line, setLine] = useState(true);

	const [head_color, setHeadColor] = useState("#000");
	const [data_color, setDataColor] = useState("#000");
	const [border_color, setBorderColor] = useState("#000");
	const [head_size, setHeadSize] = useState(15);
	const [data_size, setDataSize] = useState(14);
	let query = useQuery();
	const [list, setList] = useState([]);
	const [inf, setInf] = useState([]);
	const [gpa_list, setGpaList] = useState([]);
	const [grade_list, setGradeList] = useState([]);
	const [all_mark, setAllMark] = useState([]);

	React.useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		let u = "results/get_result?card=true";
		if (query.get("published") != null) {
			u += "&published=" + query.get("published");
		} else if (query.get("unpublished") != null) {
			u += "&unpublished=" + query.get("unpublished");
		}
		if (query.get("result_id") != null) {
			u += "&result_id=" + query.get("result_id");
		}
		try {
			const results = await Call({ method: "get", url: u });
			setList(results);
			const info = await Call({
				method: "get",
				url: "settings/institute_info",
			});
			setInf(info);
			const gpas = await Call({ method: "get", url: "settings/gpa" });

			setGpaList(gpas);
			const grades = await Call({ method: "get", url: "settings/grade" });

			setGradeList(grades);
		} catch (e) {
			console.log(e);
		}
	};
	console.log(list);
	React.useEffect(() => {
		if (list.length > 0) {
			let all_std_mark = {};
			list.map(
				(element) =>
					(all_std_mark[element.student_id] = element.student_marks.reduce(
						(cb, val) => {
							if (val.student_id == element.student_id)
								cb = parseInt(cb) + parseInt(val.total_mark);
							return cb;
						},
						0
					))
			);
			let entries = Object.entries(all_std_mark);

			let sorted = entries.sort((a, b) => a[1] - b[1]);
			setAllMark(sorted);
		}
	}, [list]);

	const td_style = {
		fontSize: data_size + "px",
		color: data_color,
		borderTop: `1px solid ${border_color}`,
	};
	const th_style = {
		whiteSpace: "pre-wrap",
		fontSize: data_size + "px",
		color: data_color,
		border: `1px solid ${border_color}`,
		padding: "0.4rem",
		textAlign: "center",
	};
	return (
		<div style={{ width: "100%", height: "auto", display: "block" }}>
			<Helmet>
				<title>Result Card</title>
			</Helmet>
			<div className="bg-dark noprint printoptions" left={{ right: "0%" }}>
				<div className="mb-1 mt-1">Table Options</div>
				<small>Head Size</small>
				<Input
					type="number"
					placeholder="Head Size"
					value={head_size}
					bsSize="sm"
					className="mb-1"
					onChange={(e) => setHeadSize(e.target.value)}
				/>
				<small>Data Size</small>
				<Input
					type="number"
					placeholder="Data Size"
					value={data_size}
					bsSize="sm"
					className="mb-1"
					onChange={(e) => setDataSize(e.target.value)}
				/>
				<small>Head Color</small>
				<Input
					type="color"
					placeholder="Address,Number Color"
					value={head_color}
					bsSize="sm"
					className="mb-1"
					onChange={(e) => setHeadColor(e.target.value)}
				/>
				<small>Data Color</small>
				<Input
					type="color"
					placeholder="Data Color"
					value={data_color}
					bsSize="sm"
					className="mb-1"
					onChange={(e) => setDataColor(e.target.value)}
				/>
				<small>Border Color</small>
				<Input
					type="color"
					placeholder="Border Color"
					value={border_color}
					bsSize="sm"
					className="mb-1"
					onChange={(e) => setBorderColor(e.target.value)}
				/>
			</div>
			<PrintOptions
				val={{
					logo_dir,
					setLogoDir,
					logo_size,
					setLogoSize,
					school_name_size,
					setSchoolNameSize,
					other_size,
					setOtherSize,
					school_name_color,
					setSchoolNameColor,
					other_color,
					setOtherColor,
					school_name,
					setSchoolName,
					other_info,
					setOtherInfo,
					logo,
					setLogo,
					line,
					setLine,
				}}
			/>
			<div
				style={{
					width: "100%",
					minHeight: "100vh",
					height: "auto",
					marginBottom: "1.5rem",
				}}
			>
				<SchoolInfo
					val={{
						logo_dir,
						logo_size,
						school_name_size,
						other_size,
						school_name_color,
						other_color,
						school_name,
						other_info,
						logo,
						line,
						inf,
					}}
				/>
				<div style={{ width: "95%", margin: "auto" }}>
					<div
						style={{ maxWidth: "350px", margin: "auto", textAlign: "center" }}
					>
						<b
							style={{
								textAlign: "center",
								color: head_color,
								fontSize: head_size + "px",
							}}
						>
							Class: {list.length > 0 && list[0].class} - Department:{" "}
							{list.length > 0 && list[0].department}
						</b>
						<br />
						<b
							style={{
								textAlign: "center",
								color: head_color,
								fontSize: head_size + "px",
							}}
						>
							{list.length > 0 && list[0].result_name}
						</b>
						<p
							style={{
								textAlign: "center",
								color: data_color,
								fontSize: data_size + "px",
							}}
						>
							Result Tabulation
						</p>
					</div>
					<Table className="align-items-center" border={1}>
						<thead>
							<tr>
								<th rowSpan="2" style={th_style}>
									Roll
								</th>
								<th rowSpan="2" style={th_style}>
									Name
								</th>
								<th rowSpan="2" style={th_style}>
									Total
									<br />
									Marks
								</th>
								<th rowSpan="2" style={th_style}>
									GPA
								</th>
								<th rowSpan="2" style={th_style}>
									Grade
								</th>
								<th rowSpan="2" style={th_style}>
									Rank
								</th>
							</tr>
						</thead>
						{list.length > 0 &&
						gpa_list.length > 0 &&
						grade_list.length > 0 &&
						all_mark.length > 0
							? list.map((el, idx) => (
									<ResultCardTable
										logo_size={logo_size}
										gpa_list={gpa_list}
										grade_list={grade_list}
										list={el}
										exam_id={query.get("exam_id")}
										colors={{ data_color, head_color, border_color }}
										size={{ data_size, head_size }}
										all_mark={all_mark}
										td_style={td_style}
									/>
							  ))
							: null}
					</Table>
				</div>
			</div>
		</div>
	);
}
