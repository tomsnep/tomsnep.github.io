var inputs = (function() {

	var location = function() {

		constants.inputsElements.locationElements.submit.onclick = function(){
			// get value from input field
			var value = constants.inputsElements.locationElements.input.value;
			// store value in local storage
  			localStorage.setItem('location', JSON.stringify(value));
  		};
	};

	var kind = function() {
		
		constants.inputsElements.kindElements.submit.onclick = function() {

			for (var i = 0, length = constants.inputsElements.kindElements.inputs.length; i < length; i++) {
			    
			    // get checked radio button
			    if (constants.inputsElements.kindElements.inputs[i].checked) {

			    	//store value in local storage
			        var value = constants.inputsElements.kindElements.inputs[i].value;
			        localStorage.setItem('kind', value);
			        //stop loop, only one radio button can be checked
			        break;
			    }
			};
		};
	};

	var price = function() {

				var kind = localStorage.getItem('kind');

				// check if kind is "huur" or "koop"
				if(kind == "huur"){
					constants.inputsElements.priceElements.hire.classList.remove('hide');
					constants.inputsElements.priceElements.buy.classList.add('hide');
				}

				if(kind == "koop"){
					constants.inputsElements.priceElements.buy.classList.remove('hide');
					constants.inputsElements.priceElements.hire.classList.add('hide');
				}

		constants.inputsElements.priceElements.submit.onclick = function(){
			
			if(kind == "huur"){
				var valueMin = constants.inputsElements.priceElements.inputMinHire.options[constants.inputsElements.priceElements.inputMinHire.selectedIndex].value;
				var valueMax = constants.inputsElements.priceElements.inputMaxHire.options[constants.inputsElements.priceElements.inputMaxHire.selectedIndex].value;
				
				localStorage.setItem('priceMin', valueMin);
				localStorage.setItem('priceMax', valueMax);
			} else {
				var valueMin = constants.inputsElements.priceElements.inputMinBuy.options[constants.inputsElements.priceElements.inputMinBuy.selectedIndex].value;
				var valueMax = constants.inputsElements.priceElements.inputMaxBuy.options[constants.inputsElements.priceElements.inputMaxBuy.selectedIndex].value;
				
				localStorage.setItem('priceMin', valueMin);
				localStorage.setItem('priceMax', valueMax);
			}
		};
	};



	var specie = function() {
		
		constants.inputsElements.specieElements.submit.onclick = function() {

			for (var i = 0, length = constants.inputsElements.specieElements.inputs.length; i < length; i++) {
   			    // get checked radio button
			   if (constants.inputsElements.specieElements.inputs[i].checked) {
			    	//store value in local storage
			        var value = constants.inputsElements.specieElements.inputs[i].value;
			        localStorage.setItem('specie', value);
			        //stop loop, only one radio button can be checked
			        break;
			    }
			};
		};
	};

	var rooms = function() {
	
		constants.inputsElements.roomsElements.submit.onclick = function() {

			for (var i = 0, length = constants.inputsElements.roomsElements.inputs.length; i < length; i++) {
			    // get checked radio button
			    if (constants.inputsElements.roomsElements.inputs[i].checked) {
			    	//store value in local storage
			        var value = constants.inputsElements.roomsElements.inputs[i].value;
			        localStorage.setItem('rooms', value);
			        //stop loop, only one radio button can be checked
			        break;
			    }
			};
		};
	};

	var surface = function() {
		
		constants.inputsElements.surfaceElements.submit.onclick = function() {
			
			for (var i = 0, length = constants.inputsElements.surfaceElements.inputs.length; i < length; i++) {
			   	// get checked radio button
			    if (constants.inputsElements.surfaceElements.inputs[i].checked) {
			    	//store value in local storage
			        var value = constants.inputsElements.surfaceElements.inputs[i].value;
			        localStorage.setItem('surface', value);
			        //stop loop, only one radio button can be checked
			        break;
			    }
			};
		//fire getLocalStorageData() to start render proces of results
		data.getLocalStorageData();
		};
	};

	return {
		location,
		kind,
		price,
		specie,
		rooms,
		surface
	}
})();