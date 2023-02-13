import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imagenes/logo.jpg";
import { NOMBRESITIO } from "../../assets/js/CONST";
import { isMobile, clickMenuMobile, escondeMenuMobile } from "../../Helpers/Helpers";

import "./Header.css";

function MenuDesktop() {
	return (
		<nav className="menu">
			<ul>
				<li>
					<NavLink className={({ isActive }) => (isActive ? "tamoactivo" : "none")} to="/">inicio</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? "tamoactivo" : "none")} to="/acerca">acerca</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? "tamoactivo" : "none")} to="/contacto">contacto</NavLink>
				</li>
			</ul>
		</nav>
	);
}

function MenuMobile() {
	return (
		<>
			<div className="elmenu">
				<p>MENU</p>
				<div>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
				</div>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink className={({ isActive }) => (isActive ? "tamoactivo" : "none")} to="/">inicio</NavLink>
					</li>
					<li>
						<NavLink className={({ isActive }) => (isActive ? "tamoactivo" : "none")} to="/acerca">acerca</NavLink>
					</li>
					<li>
						<NavLink className={({ isActive }) => (isActive ? "tamoactivo" : "none")} to="/contacto">contacto</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

function Header() {
	useEffect(() => {
		escondeMenuMobile();
		clickMenuMobile();
	}, []);

	return (
		<header>
			<div className="logo">
				<NavLink to="/">
					<img src={logo} alt={NOMBRESITIO} />
				</NavLink>
			</div>
			{ isMobile() ? <MenuMobile /> : <MenuDesktop /> }
		</header>
	);
}
export default Header;
