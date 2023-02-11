import { Helmet } from "react-helmet";
import { NOMBRESITIO } from "../../assets/js/CONST";

function Inicio() {
	return (
		<>
			<Helmet>
				<title>Bienvenido || { NOMBRESITIO }</title>
			</Helmet>
			<section id="inicio">
				<h2>INICIOOOOOO !</h2>
			</section>
		</>
	);
}
export default Inicio;
