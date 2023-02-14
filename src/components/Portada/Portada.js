import Button from "../Button/Button";

import "./Portada.css";

function Portada() {
	return (
		<section id="inicio">
			<div>
				<h2>lleva tu proyecto al <span>siguiente nivel</span>.</h2>
				<Button hacia="/contacto" />
			</div>
		</section>
	);
}
export default Portada;
