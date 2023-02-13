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
