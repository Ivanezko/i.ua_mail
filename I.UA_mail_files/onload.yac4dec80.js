var windowOnLoad = function() {}
// Empty behaviour
windowOnLoad.DOMContentLoaded	= function() {};
windowOnLoad.domIsReady			= false;
// Array of methods will be called when DOM is ready (documentReady)
windowOnLoad.readyQueue 		= [];

// Setup "DOM ready" events
(function() {
// GEKO browsers, IE9
// Fired at the page's Document object when parsing of the document is finished.
if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		if (windowOnLoad.domIsReady) {
			return true;
		}

		document.removeEventListener( "DOMContentLoaded", windowOnLoad.DOMContentLoaded, false );
		windowOnLoad.documentReady();
	}, false );

    // Fallback to window.onload
	window.addEventListener("load", windowOnLoad.documentReady, false );
} else 
	// IE document model
	if (document.attachEvent) {
		document.attachEvent("onreadystatechange", function() {
			if (windowOnLoad.domIsReady)
				return true;
			if ( document.readyState === "complete" ) {
				document.detachEvent( "onreadystatechange", windowOnLoad.DOMContentLoaded );
				windowOnLoad.documentReady();
			}
		});

		// Fallback to window.onload
		window.attachEvent("onload", windowOnLoad.documentReady );
	}
})();

//
// Document is ready.
// All functions from readyQueue object will be run
//
windowOnLoad.documentReady = function () {

	if (windowOnLoad.domIsReady && (windowOnLoad.readyQueue.length == 0))
		return true;

	windowOnLoad.domIsReady = true;

	// Run ready state queue
	for (var i=0; i < windowOnLoad.readyQueue.length; i++) {
		windowOnLoad.readyQueue[i]();
	};

	windowOnLoad.readyQueue = [];
}

windowOnLoad.run = function( func ) {
	if (!windowOnLoad.domIsReady) {
		windowOnLoad.readyQueue.push( func );
	} else {
		func();
	}
}