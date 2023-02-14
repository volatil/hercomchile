import $ from "jquery";

// checa is estas en un ancho de pantalla mobile o no (limite 850px)
export function isMobile() {
	const anchoPantalla = $("body").width();
	if ( anchoPantalla <= 850 ) {
		return true;
	}
	return false;
}

// MENU MOBILE
export function clickMenuMobile() {
	$(".elmenu").on("click", () => {
		if ( $("body").is( ".menuactivo" ) ) {
			$("body").removeClass("menuactivo");
		} else {
			$("body").addClass("menuactivo");
		}
	});
}

export function escondeMenuMobile() {
	$("body").on("click", "header nav ul li", () => {
		$("body").removeClass("menuactivo");
	});
	$("body").on("click", ".menufondoopacidad", () => {
		$("body").removeClass("menuactivo");
	});
}

export function verificaEmail() {
	const data = {
		nombre: $("form.contacto input[name=nombre]").val(),
		correo: $("form.contacto input[name=email]").val(),
		mensaje: $("form.contacto textarea").val(),
	};

	if ( data.nombre.length <= 2 ) {
		$("form.contacto input[name=nombre]").addClass("invalido");
	} else {
		$("form.contacto input[name=nombre]").removeClass("invalido");
	}

	if ( data.correo.length >= 2 && data.correo.includes("@") && data.correo.includes(".") ) {
		$("form.contacto input[name=email]").removeClass("invalido");
	} else {
		$("form.contacto input[name=email]").addClass("invalido");
	}

	if ( data.mensaje.length <= 5 ) {
		$("form.contacto textarea").addClass("invalido");
	} else {
		$("form.contacto textarea").removeClass("invalido");
	}

	const estado = !$("#contacto form").html().includes("invalido");
	if ( estado ) {
		$(".estadoEnvio p.true").show();
	} else {
		$(".estadoEnvio p.false").show();
	}
	setTimeout(() => {
		$(".estadoEnvio > p").fadeOut();
	}, 4000);

	return estado;
}
