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
	$(".elmenu").on("click", function () {
		if ( $( this ).parent().is( ".activo" ) ) {
			$( this ).parent().removeClass("activo");
		} else {
			$(this).parent().addClass("activo");
		}
	});
}

export function escondeMenuMobile() {
	$("body").on("click", "header.activo nav ul li", () => {
		$("header").removeClass("activo");
	});
}
