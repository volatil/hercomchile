import "./Footer.css";
import amor from "../../assets/imagenes/amor.svg";

function Footer() {
	return (
		<footer>
			<a href="https://www.volatil.cl" title="Volatil.cl">
				<p>Diseñado y programado con <img src={amor} alt="corazoncito" /> por <strong> VOLATIL</strong></p>
			</a>
		</footer>
	);
}
export default Footer;
