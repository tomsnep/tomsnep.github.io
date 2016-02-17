'use strict'

var launcher = (function() {

	var init = function() {
		// call routes
		routes.init();
		touch.swipe();
		touch.shake();
	};

	return {
		init: init
	};
})();


launcher.init();