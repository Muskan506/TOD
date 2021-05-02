import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	return (
		<>
			<Link
				to={item.path}
				onClick={item.subNav && showSubnav}
				className="side-menu"
				style={{ textDecorationLine: "none" }}
			>
				<div style={{ display: "flex" }}>
					{item.icon}
					<span className="side-text">{item.title}</span>
				</div>
				<div>
					{item.subNav && subnav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null}
				</div>
			</Link>
			{subnav &&
				item.subNav.map((item, index) => {
					return (
						<Link
							to={item.path}
							key={index}
							className="dropdown-text"
							style={{ textDecorationLine: "none" }}
						>
							<span className="side-text">{item.title}</span>
						</Link>
					);
				})}
		</>
	);
};

export default SubMenu;
