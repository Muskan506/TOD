import React from "react";
import logo from "../assets/Logo/logo.png";
import { IoMdList } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = ({onclick}) => {
	return (
		<div className="header">
			<div style={{ display: "flex" }}>
				<Link>
					<img
						src={logo}
						style={{ width: 80, height: 30, marginLeft: 20, marginTop: 5 }}
					/>
				</Link>
				<Link to="#" className="menu-bars">
					<IoMdList style={{ color: "#fff" }} size={30} onClick={onclick} />
				</Link>
			</div>
			<div style={{ display: "flex" }}>
				<select className="select">
					<option selected value="0">
						English
					</option>
					<option value="1">Hindi</option>
					<option value="2">Japanese</option>
				</select>

				<Link to="#">
					<RiLogoutCircleLine style={{ color: "#fff" }} size={30} />
				</Link>
			</div>
		</div>
	);
};

export default Header;
