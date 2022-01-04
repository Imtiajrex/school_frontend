/* eslint-disable jsx-a11y/alt-text */
import React from "react";
export default function Prospectus() {
	const style = { width: "100%", maxWidth: 750, objectFit: "contain" };
	return (
		<div
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<img src={"/images/1.jpg"} style={style} />
			<img src={"/images/2.jpg"} style={style} />
			<img src={"/images/3.jpg"} style={style} />
			<img src={"/images/4.jpg"} style={style} />
			<img src={"/images/5.jpg"} style={style} />
			<img src={"/images/6.jpg"} style={style} />
			<img src={"/images/7.jpg"} style={style} />
			<img src={"/images/8.jpg"} style={style} />
			<a href="/" style={{ textDecoration: "underline", color: "blue" }}>
				School Website
			</a>
		</div>
	);
}
