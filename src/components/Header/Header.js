import { NavLink } from "react-router-dom";
import logo from "../../assets/imagenes/logo.jpg";
import { NOMBRESITIO } from "../../assets/js/CONST";

function Header() {
	return (
		<header>
			<div className="logo">
				<NavLink to="/">
					<img src={logo} alt={NOMBRESITIO} />
				</NavLink>
			</div>
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
		</header>
	);
}
export default Header;
