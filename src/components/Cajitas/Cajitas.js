import cajaProyectos from "../../assets/imagenes/caja_proyectos.svg";
import cajaElectricidad from "../../assets/imagenes/caja_electricidad.svg";
import cajaFerreteria from "../../assets/imagenes/caja_ferreteria.svg";
import cajaCalefactores from "../../assets/imagenes/caja_calefactores.svg";
import "./Cajitas.css";

function Cajitas() {
	return (
		<section id="cajitas">
			<div className="caja">
				<img src={cajaProyectos} alt="PROYECTOS" />
				<h3>PROYECTOS</h3>
				<ul>
					<li>Construcción</li>
					<li>Electricidad</li>
					<li>Automatización</li>
					<li>Mecánica</li>
					<li>Piping</li>
				</ul>
			</div>
			<div className="caja">
				<img src={cajaCalefactores} alt="ELECTRICIDAD" />
				<h3>ELECTRICIDAD</h3>
				<ul>
					<li>Fabricación de tableros</li>
					<li>Materiales Eléctricos</li>
					<li>Conectores industriales</li>
					<li>Automatización y control</li>
				</ul>
			</div>
			<div className="caja">
				<img src={cajaFerreteria} alt="FERRETERIA" />
				<h3>FERRETERIA</h3>
				<ul>
					<li>Construcción</li>
					<li>Acero y fierros</li>
					<li>Terminaciones</li>
					<li>Herramientas y maquinarias</li>
					<li>Pinturas para alto tráfico </li>
				</ul>
			</div>
			<div className="caja">
				<img src={cajaElectricidad} alt="CALEFACTORES INDUSTRIALES" />
				<h3>CALEFACTORES INDUSTRIALES</h3>
				<ul>
					<li>Mantas calefactoras</li>
					<li>Generadores de aire calientes</li>
					<li>Cintas calefactoras y kit de sellos para su instalación diversas medidas</li>
				</ul>
			</div>
		</section>
	);
}
export default Cajitas;
