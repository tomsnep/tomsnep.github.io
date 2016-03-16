var routes = (function() {
	
	var init = function(){

		// set #start as default
		window.location.hash = '#start';
		var location = document.querySelector('#start');

		routie({
			'start': function() {
		    	var hashName = this.path;
		    	routes.toggle(hashName);
		  
		    },
		    'location': function() {
		    	var hashName = this.path;
		    	routes.toggle(hashName);
		    	animations.footerNav();
		    },
		    'kind': function() {   	
		    	var hashName = this.path;
		    	routes.toggle(hashName);
		    	animations.footerNav();
		    },
		    'price': function() {
		  
		    	var hashName = this.path;
		    	routes.toggle(hashName);
		    	animations.footerNav();
		    	inputs.price();		   
		   
		    },
		    'specie': function() { 
		    	var hashName = this.path;
		    	routes.toggle(hashName);
		    	animations.footerNav();
		    
		    },
		    'rooms': function() { 
				var hashName = this.path;
		    	routes.toggle(hashName);
		    	animations.footerNav();

		    },
		    'surface': function() { 
				var hashName = this.path;
		    	routes.toggle(hashName);
		    	animations.footerNav();
		    },
		    'houses': function() {
		    	var hashName = this.path;
		    	routes.toggle(hashName);
		    	animations.footerNav();
		    }
		});	
	};

	var toggle = function(hashName) { 

			var allSections = document.querySelectorAll('section');
			var activeSection = document.getElementById(hashName);
				
				// remove class active for all sections
				for (var i=0; i<allSections.length; i++) {
					  allSections[i].classList.remove('active');
				}

				// toggle class active for the active section
				activeSection.classList.toggle('active');
		};

	return {
		init,
		toggle
	}

})();