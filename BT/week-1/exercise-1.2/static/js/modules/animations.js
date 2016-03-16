animations = (function() {

	var footerNav = function() {

		var hash = window.location.hash;

		if (hash == "#start"){
			constants.animations.footer.classList.add('footer-hidden');
		} else {
			constants.animations.footer.classList.remove('footer-hidden');
		};

		if (hash == "#houses") {
			constants.animations.footer.classList.add('footer-hidden-completely');
		}

		for(var i = 0; i < constants.animations.footerLinks.length; i++){
			constants.animations.footerLinks[i].classList.remove('footer-nav-active');

			var href = constants.animations.footerLinks[i].getAttribute('href');	

			if(href == hash){
				constants.animations.footerLinks[i].classList.add('footer-nav-active');
			}
		}
	};

	return {
		footerNav
	}
})()