import $ from "jquery";
import { Helmet } from "react-helmet";

import { NOMBRESITIO } from "../../assets/js/CONST";
import { verificaEmail } from "../../Helpers/Helpers";

import cajaCorreo from "../../assets/imagenes/caja_correo.svg";
import cajaTelefono from "../../assets/imagenes/caja_telefono.svg";
import cajaDireccion from "../../assets/imagenes/caja_direccion.svg";
import "./Contacto.css";

function Formulario1() {
	const token = {
		test: "3f08998306c8475e98b9692d9cb867b3", // pauloguajardot@gmail.com
	};
	return (
		<form target="_blank" action={`https://formsubmit.co/${token.test}`} method="POST">
			<input type="text" name="name" className="form-control" placeholder="Nombre" required />
			<input type="email" name="email" className="form-control" placeholder="Correo" required />
			<textarea placeholder="Mensaje" className="form-control" name="message" rows="10" required />
			<input type="hidden" name="_template" value="box" />
			<input type="hidden" name="_next" value="http://localhost:4857/enviado" />
			<button type="submit" className="btn btn-lg btn-dark btn-block">Enviar</button>
		</form>
	);
}

function Bloque( props ) {
	const {
		titulo, imagen, correo, telefono, mapa,
	} = props;

	return (
		<div className="bloque">
			<img src={imagen} alt={titulo} />
			<h4>{titulo}</h4>
			{
				correo && (<a target="_blank" rel="noreferrer" href={`mailto:${correo}`}>{correo}</a>)
			}
			{
				telefono && (<a target="_blank" rel="noreferrer" href={`tel:${telefono[0]}`}>{telefono[1]}</a>)
			}
			{
				mapa && (<a target="_blank" rel="noreferrer" href={`${mapa[0]}`}>{mapa[1]}</a>)
			}
		</div>
	);
}

function Contacto() {
	function enviar() {
		const data = {
			nombre: $("form.contacto input[name=nombre]").val(),
			correo: $("form.contacto input[name=email]").val(),
			mensaje: $("form.contacto textarea").val(),
			todoelmensaje: () => {
				const mensaje = `
					Te envio un mensaje:<br>
					${data.nombre} (${data.correo})<br>
					MENSAJE:<br><br>
					${data.mensaje}
				`;
				return mensaje;
			},
		};

		if ( verificaEmail() ) {
			// eslint-disable-next-line no-undef
			Email.send(
				{
					Host: "smtp.elasticemail.com",
					Username: "ventas@hercomchile.cl",
					Password: "DD0E1B90FB7B4ED53B5D1509C871F3026CD9",
					// Username: "pauloguajardot@gmail.com",
					// Password: "EB60EFFBD0B46F5D82325D1867E3AAFC8639",
					From: "ventas@hercomchile.cl", // de
					To: "ventas@hercomchile.cl", // para
					// From: "pauloguajardot@gmail.com", // de
					// To: "paulo@buscalibre.com", // para
					Subject: `Formulario de contacto de ${location.href}`,
					Body: data.todoelmensaje(),
				},
			);
			console.debug( "Enviando ..." );
		} else {
			console.debug("Fallo el envio");
		}
	}

	return (
		<>
			<Helmet>
				<title>Contacto || { NOMBRESITIO }</title>
				<script src="https://smtpjs.com/v3/smtp.js" />
			</Helmet>
			<section id="contacto">
				<h3>Contactanos</h3>
				<div>
					<div className="direcciones">
						<div className="bloques">
							<Bloque titulo="Contacto ventas" imagen={cajaTelefono} telefono={["+56965643897", "+569 656 438 97"]} />
							<Bloque titulo="Consultas técnicas" imagen={cajaTelefono} telefono={["+569974487283", "+569 974 487 283"]} />
							<Bloque titulo="Correo" imagen={cajaCorreo} correo="ventas@hercomchile.cl" />
							{/* eslint-disable */}
							<Bloque titulo="Dirección" imagen={cajaDireccion} mapa={["https://www.google.cl/maps/place/Av.+Apoquindo+7935,+Las+Condes,+Regi%C3%B3n+Metropolitana/@-33.4085664,-70.5508999,17z/data=!3m1!4b1!4m6!3m5!1s0x9662ce9569ad04e7:0xa64894df53a73b2f!8m2!3d-33.4085664!4d-70.5487112!16s%2Fg%2F11dfjyhlkb", "Avda. Apoquindo 7935, Las Condes, Chile"]} />
							{/* eslint-enable */}
						</div>
					</div>
					<form className="contacto" method="POST">
						<input name="nombre" type="text" placeholder="Nombre" />
						<input name="email" type="email" placeholder="Email" />
						<textarea name="mensaje" placeholder="Mensaje" />
						<button type="button" onClick={enviar}>Enviar</button>
						<div className="estadoEnvio">
							<p style={{ display: "none" }} className="true">Mensaje enviado.</p>
							<p style={{ display: "none" }} className="false">Debes completar los campos.</p>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default Contacto;
