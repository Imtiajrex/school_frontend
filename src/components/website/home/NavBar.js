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
					<div className="col-md-11 col-sm-12">
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
					<div className="col-md-1 col-sm-12 nav-details">
						<span>
							Address:
							{institute_info.institute_address}
						</span>
						<span>
							Mobile:
							{institute_info.institute_phonenumbers}
						</span>
						<span>
							Email:
							{institute_info.institute_email}
						</span>
					</div>
				</div>
			</Navbar>
			<Navbar
				light
				expand="md"
				className="probootstrap-navbar"
				style={{ backgroundColor: "#49d292" }}
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
