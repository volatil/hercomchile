import { NavLink } from "react-router-dom";
import arrowRight from "../../assets/imagenes/arrow_right.svg";
import { NOMBRESITIO } from "../../assets/js/CONST";
import "./Button.css";

function Button() {
	return (
		<NavLink className="buttonComponent" to="/contacto">
			<span className="barrita">&nbsp;</span>
			<p>
				<span>contactanos</span>
				<img src={arrowRight} alt={NOMBRESITIO} />
			</p>
		</NavLink>
	);
}
export default Button;
