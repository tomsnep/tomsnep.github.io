var touch = (function(){
	var swipe = function(){

			console.log('swipe initialised')
			var el = document.querySelector('body');
			var menuSwipe = new Hammer(el);

			menuSwipe.on('swipeleft', function(){
				var menuItem = document.querySelector('a[href="#user-search"]');
				menuItem.click();
			});
			menuSwipe.on('swiperight', function(){
				var menuItem = document.querySelector('a[href="#tag-search"]');
				menuItem.click();
			});
	};

	var shake = function(){
		console.log('shake function initialised')
		var startShake = new Shake({
				    threshold: 15, // optional shake strength threshold
				    timeout: 1000 // optional, determines the frequency of event generation
				})

		startShake.start();

		var randomPictures = function() {
		    window.location.hash = '#tag-search';
		    tagFeed.getRandomData();
		};
		
		window.addEventListener('shake', randomPictures(), false);
	};

	return {
		swipe,
		shake
	}
})()