var launcher = (function() {
	
	var init = function() {

		routes.init();

		animations.footerNav();

		inputs.location();
		inputs.kind();
		inputs.price;
		inputs.specie();
		inputs.rooms();
		inputs.surface();
	};

	return {
		init: init
	}
})();
launcher.init();