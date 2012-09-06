(function( jQuery ) {

function createStandardXHR() {
	try {
		var xhr = nodom.XMLHttpRequest();
		var xhrProxy = {
			open : function(method, url, async) {
				this.requestURl = url;
				return xhr.open(method, url, async);
			},
			send : function(query) {
				var result = xhr.send(query);
				this.responseText = xhr.responseText + "";
				this.status = xhr.status;
				this.readyState = xhr.readyState;
				return result;
			},
			getAllResponseHeaders : function() {
				return xhr.getAllResponseHeaders();
			}
		};
		return xhrProxy;
	} catch (e) {
	}
}

jQuery.ajaxSettings.global = false;

})( jQuery );
