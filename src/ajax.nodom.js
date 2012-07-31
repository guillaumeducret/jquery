(function( jQuery ) {

function createStandardXHR() {
	try {
		return nodom.XMLHttpRequest();
	} catch (e) {
	}
}

jQuery.ajaxSettings.global = false;

})( jQuery );
