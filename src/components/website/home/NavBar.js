/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Navbar, NavbarToggler } from "reactstrap";
import { NavLink as RNavLink } from "react-router-dom";
import MenuBar from "./MenuBar";

export default function NavBar({ pages, sub_pages, institute_info }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const [dropdownOpen, setDropdown] = useState();

	const toggleDropdown = () => setDropdown(!dropdownOpen);
	return (
		<>
			<Navbar light expand="md" className="probootstrap-navbar">
				<div className="row" style={{ width: "100%" }}>
					<div className="col-md-9 col-sm-12">
						<div
							style={{
								height: "auto",
								display: "flex",
								alignItems: "center",
							}}
						>
							<RNavLink
								to="/"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<img
									src={
										process.env.REACT_APP_IMAGE_PATH +
										"/" +
										institute_info.institute_logo
									}
									alt="Logo"
									style={{ width: "80px", objectFit: "cover" }}
								/>
								<div className="ml-3 institute_name">
									{institute_info.institute_name}
								</div>
							</RNavLink>
						</div>
					</div>
					<div className="col-md-3 col-sm-12 nav-details">
						<span>
							<a>Address:</a> <a>{institute_info.institute_address}</a>
						</span>
						<span>
							<a>Mobile:</a> <a>{institute_info.institute_phonenumbers}</a>
						</span>
						<span>
							<a>Email:</a> <a>{institute_info.institute_email}</a>
						</span>
					</div>
				</div>
			</Navbar>
			<Navbar
				light
				expand="md"
				className="probootstrap-navbar"
				style={{
					backgroundColor: "#49d292",
					paddingTop: 0,
					paddingBottom: 0,
				}}
			>
				<MenuBar
					pages={pages}
					sub_pages={sub_pages}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					dropdownOpen={dropdownOpen}
					toggleDropdown={toggleDropdown}
					setDropdown={setDropdown}
				/>
				<div className="col-md-12">
					<NavbarToggler onClick={toggle} />
				</div>
			</Navbar>
		</>
	);
}
