import { Helmet } from "react-helmet";

import Portada from "../../components/Portada/Portada";
import Cajitas from "../../components/Cajitas/Cajitas";
import Nosotros from "../../components/Nosotros/Nosotros";

import { NOMBRESITIO } from "../../assets/js/CONST";

function Inicio() {
	return (
		<>
			<Helmet>
				<title>Bienvenido || { NOMBRESITIO }</title>
			</Helmet>

			<Portada />
			<Cajitas />
			<Nosotros />
		</>
	);
}
export default Inicio;
