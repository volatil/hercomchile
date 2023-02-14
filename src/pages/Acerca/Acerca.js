import { Helmet } from "react-helmet";
import Nosotros from "../../components/Nosotros/Nosotros";
import { NOMBRESITIO } from "../../assets/js/CONST";

function Acerca() {
	return (
		<>
			<Helmet>
				<title>Acerca || { NOMBRESITIO }</title>
			</Helmet>
			<section id="acerca">
				<Nosotros />
			</section>
		</>
	);
}
export default Acerca;
