import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Albums from "./Albums";
import Pages from "./Pages";
import SubPages from "./SubPages";
import Employees from "./Employees";
import { Helmet } from "react-helmet";
import Notifications from "./Notifications";

export default function FrontEndRouter({ data }) {
	return (
		<>
			<Helmet>
				<title>{data.school_info.institute_name}</title>
			</Helmet>
			<Switch>
				<Route exact path="/">
					<Home data={data} />
				</Route>
				<Route exact path="/pages/:id">
					<Pages data={data} />
				</Route>
				<Route exact path="/sub_pages/:id">
					<SubPages data={data} />
				</Route>
				<Route exact path="/notifications/:id">
					<Notifications data={data} />
				</Route>
				<Route exact path="/albums/:id">
					<Albums data={data} />
				</Route>
				<Route exact path="/employees/:employee_type">
					<Employees data={data} />
				</Route>
			</Switch>
		</>
	);
}
