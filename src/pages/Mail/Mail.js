import { Helmet } from "react-helmet";
import { NOMBRESITIO } from "../../assets/js/CONST";
import "./Mail.css";

function Mail() {
	setTimeout(() => {
		console.debug("Redireccion !!");
		window.location.href = "/webmail";
	}, 2000);

	return (
		<>
			<Helmet>
				<title>Bienvenido || { NOMBRESITIO }</title>
			</Helmet>

			<section id="mail">
				<h2>WEBMAIL</h2>
				<p>redireccionando ...</p>
			</section>
		</>
	);
}
export default Mail;
