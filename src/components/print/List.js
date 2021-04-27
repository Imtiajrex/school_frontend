import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Call } from "services/API/Call";
import PrintOptions from "./PrintOptions";
import SchoolInfo from "./SchoolInfo";
import ListTable from "./ListTable";
import { Input } from "reactstrap";

export default function List(props) {
	const { url, title, head, val, indexed = true, query_info = [] } = props;
	const [list, setList] = useState([]);
	const [logo_dir, setLogoDir] = useState({ left: "0%" });
	const [logo_size, setLogoSize] = useState(100);
	const [school_name_size, setSchoolNameSize] = useState(25);
	const [other_size, setOtherSize] = useState(14);
	const [school_name_color, setSchoolNameColor] = useState("#00000");
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
	React.useEffect(() => {
		Call({ method: "get", url })
			.then((res) => {
				setList(res);
			})
			.catch((err) => console.log(err));
	}, [url]);

	return (
		<div>
			<Helmet>
				<title>{title}</title>
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
				}}
			/>
			<div className="p-5">
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginBottom: "1rem",
					}}
				>
					{query_info.length > 0
						? query_info.map((el, idx) =>
								el.value != undefined && el.value.length > 0 ? (
									<div
										key={idx}
										style={{
											display: "flex",
											color: head_color,
											fontSize: head_size,
											margin: "0rem 1rem",
										}}
									>
										<div>
											<b>{el.title}</b>
										</div>
										<div>{el.value}</div>
									</div>
								) : null
						  )
						: null}
				</div>
				<ListTable
					head={head}
					data={list}
					val={val}
					colors={{ data_color, head_color, border_color }}
					size={{ data_size, head_size }}
					indexed={indexed}
				/>
			</div>
		</div>
	);
}
