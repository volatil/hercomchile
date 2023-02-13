import Button from "../Button/Button";

import "./Nosotros.css";
import nosotros from "../../assets/imagenes/nosotros.jpg";
import { NOMBRESITIO } from "../../assets/js/CONST";

function Nosotros() {
	return (
		<section id="nosotros">
			<div>
				<img src={nosotros} alt={NOMBRESITIO} />
			</div>
			<div>
				<h2>NOSOTROS</h2>
				<p>
					Empresa de ingenieros y profesionales industriales, que entrega soluciones integrales para ideas y proyectos,
					acá encontraras todos los materiales y servicios disponibles en nuestra amplia gama de
					sociedades a nivel nacional e internacional, todo esto para desarrollar y crear en los
					tiempos y parámetros solicitados.
				</p>
				<Button />
			</div>
		</section>
	);
}
export default Nosotros;
