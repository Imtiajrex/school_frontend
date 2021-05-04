/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Call } from "services/API/Call";
import PrintOptions from "../../PrintOptions";
import SchoolInfo from "../../SchoolInfo";
import { Input } from "reactstrap";
import AdCard from "./AdCard";
import Back from "./back.png";

export default function AdmitCard(props) {
	const { url, title, indexed = true, exam_data } = props;
	const [list, setList] = useState([]);
	const [logo_dir, setLogoDir] = useState({ left: "0%" });
	const [logo_size, setLogoSize] = useState(100);
	const [school_name_size, setSchoolNameSize] = useState(25);
	const [other_size, setOtherSize] = useState(12);
	const [school_name_color, setSchoolNameColor] = useState("#525f7f");
	const [other_color, setOtherColor] = useState("#8898aa");
	const [school_name, setSchoolName] = useState(true);
	const [other_info, setOtherInfo] = useState(true);
	const [logo, setLogo] = useState(true);
	const [line, setLine] = useState(true);

	const [head_color, setHeadColor] = useState("#525f7f");
	const [data_color, setDataColor] = useState("#3D4956");
	const [border_color, setBorderColor] = useState("#e9ecef");
	const [head_size, setHeadSize] = useState(12);
	const [data_size, setDataSize] = useState(11);
	const [inf, setInf] = useState([]);
	React.useEffect(() => {
		Call({ method: "get", url })
			.then((res) => {
				setList(res);
			})
			.catch((err) => console.log(err));
		Call({ method: "get", url: "settings/institute_info" })
			.then((res) => {
				setInf(res);
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
			{list.length > 0
				? list.map((el, idx) => (
						<div key={idx}>
							{/* <SchoolInfo
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
              /> */}
							<AdCard
								inf={inf}
								data={el}
								colors={{ data_color, head_color, border_color }}
								size={{ data_size, head_size, logo_size }}
								indexed={indexed}
								exam_data={exam_data}
							/>
							<hr />
						</div>
				  ))
				: null}
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
					src={Back}
					style={{
						width: "100%",
						position: "absolute",
						top: 0,
						left: 0,
						zIndex: -999,
					}}
				/>
			</div>
		</div>
	);
}
