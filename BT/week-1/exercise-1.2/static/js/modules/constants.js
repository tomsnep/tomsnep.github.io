var constants = (function() {

	var loader = document.querySelector('.loader');

	var animations = (function() {
		var hash = window.location.hash;
		var footer = document.querySelector('footer');
		var footerLinks = document.querySelectorAll('footer a');

		return {
			hash,
			footer,
			footerLinks
		};
	})();

	var inputsElements = (function() {

		var locationElements = (function() {
				var submit = document.querySelector('#location .submit');
				var input = document.querySelector('#location .input');	

				return {
					submit,
					input
				};
		}());

		var kindElements = (function() {

				var submit = document.querySelector('#kind .submit');
				var inputs = document.querySelectorAll('#kind input[type="radio"]');

				return {
					submit,
					inputs
				};
		}());

		var priceElements = (function() {

				var buy = document.querySelector('.price-buy');
				var hire = document.querySelector('.price-hire');
				var submit = document.querySelector('#price .submit');
				var elements = document.querySelectorAll('#price form > div');
				var inputMinBuy = document.querySelector('#price #min-price-buy');
				var inputMaxBuy = document.querySelector('#price #max-price-buy');
				var inputMinHire = document.querySelector('#price #min-price-hire');
				var inputMaxHire = document.querySelector('#price #max-price-hire');

				return {
					buy,
					hire,
					submit,
					elements,
					inputMinBuy,
					inputMaxBuy,
					inputMinHire,
					inputMaxHire
				};
		}());

		var specieElements = (function() {

				var submit = document.querySelector('#specie .submit');
				var inputs = document.querySelectorAll('#specie input[type="radio"]');

				return {
					submit,
					inputs
				};
		}());

		var roomsElements = (function() {

				var submit = document.querySelector('#rooms .submit');
				var inputs = document.querySelectorAll('#rooms input[type="radio"]');

				return {
					submit,
					inputs
				};
		}());

		var surfaceElements = (function() {

				var submit = document.querySelector('#surface .submit');
				var inputs = document.querySelectorAll('#surface input[type="radio"]');


				return {
					submit,
					inputs
				};
		}());


		return {
			locationElements,
			kindElements,
			priceElements,
			specieElements,
			roomsElements,
			surfaceElements
		}
	})();

	var data = (function() {

		var housesContainer = document.querySelector('#houses');
		var housesUl = document.querySelector('#housesUl');
		var housesLi = document.querySelectorAll('#housesUl li');
		var housePriceBuy = document.querySelector('span[data-bind="housePriceBuy"]');
		var housePriceHire = document.querySelector('span[data-bind="housePriceHire"]');
		var houseSurface = document.querySelector('span[data-bind="houseSurface"]');

		return {
			housesContainer,
			housesLi,
			housesUl,
			housePriceBuy,
			housePriceHire,
			houseSurface
		}

	})();

	return {
		animations,
		loader,
		inputsElements,
		data
	}
})();