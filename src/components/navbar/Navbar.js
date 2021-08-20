import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { Hora } from "../../helpers/Hora";
import Cookies from "universal-cookie";

/* const cookies = new Cookies();

function componentDidMount() {
	if (!cookies.get("username")) {
		window.location.href = "./";
	}
} */

function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	/* const cerrarSesion = () => {
		cookies.remove("id", { path: "/" });
		cookies.remove("apellido_paterno", { path: "/" });
		cookies.remove("apellido_materno", { path: "/" });
		cookies.remove("nombre", { path: "/" });
		cookies.remove("username", { path: "/" });
		window.location.href = "./";
	};

	componentDidMount(); */

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<div className="navbar d-flex justify-content-between">
					<Link to="#" className="menu-bars">
						<FaIcons.FaBars onClick={showSidebar} />
					</Link>
					<Hora />
				</div>
				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<Link to="#" className="menu-bars">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{SidebarData.map((item, index) => {
							if (item.title !== "Salir") {
								return (
									<li key={index} className={item.cName}>
										<Link to={item.path}>
											{item.icon}
											<span>{item.title}</span>
										</Link>
									</li>
								);
							} else {
								return (
									<li key={index} className={item.cName}>
										<Link to={item.path}>
											{item.icon}
											{/* <span onClick={cerrarSesion}>{item.title}</span> */}
										</Link>
									</li>
								);
							}
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default React.memo(Navbar);
