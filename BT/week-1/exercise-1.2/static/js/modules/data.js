var data = (function() {

	var getLocalStorageData = function(){

		// Location
		var locationStorage = localStorage.getItem('location');
		var location = JSON.parse(locationStorage);

		// fallback when location is not set
		if(location == ""){
			var location = "heel-nederland";
		}

		// Kind
		var kind = localStorage.getItem('kind');

		// Price
		var priceMin = localStorage.getItem('priceMin');
		var priceMax = localStorage.getItem('priceMax');
		
		// when there is no maximum and there is a minimum, add + to the priceMin value
		if(priceMax == "" && priceMin != ""){
				priceMin += "+";
		}

		// when there is a maximum, add a - between the two values (no minimum is converted to 0)
		if(priceMax != "") {
			priceMin += "-";
		}

		// Specie
		var specie = localStorage.getItem('specie');

		// Rooms
		var rooms = localStorage.getItem('rooms');

		// Surface
		var surface = localStorage.getItem('surface');

		// Url

		// define url with all the filter values
		var url = 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/e2d60e885b8742d4b0648300e3703bd7/?type=' + kind + '&zo=/' + location + '/' + priceMin + priceMax + '/' + specie + '/' + rooms + '/' + surface + '/&page=&pagesize=10'
       	
       	// clean url from double slashes when some values are empty
       	var sanitized = url
           .replace(/^http\:\/\//, '') // remove the leading http:// (temporarily)
           .replace(/\/+/g, '/')       // replace consecutive slashes with a single slash
           .replace(/\/+$/, '');       // remove trailing slashes

		url = 'http://' + sanitized;
		
		data.getData(url);
	};

	var getData = function(url) {

		constants.loader.classList.add('loader-active');

		aja()
			.url(url)
			.type('json')
			.cache('false')
			.on('success', function(data) {

				var data = data.Objects;

				if(data == ""){
					renderError();
				} else {
					renderData(data);
				}
			})
			.on('error', function() {
				alert('Er kan geen verbinding worden gemaakt met de funda database, probeer het nog eens.');
			})
			.go();
	};

	var renderError = function(){

        var data = 'Er zijn geen huizen gevonden voor deze criteria';

        var directive = {
            errorMessage: {
                text: function(params) {
                    return data;
                }
            },
        };
        // render error
        Transparency.render(constants.data.housesContainer, data, directive);
        constants.loader.classList.remove('loader-active');
    }

	var renderData = function(data) {

		var directives = {
			houseLink: {
				href: function(data) {
					return this.URL;
				}
			},
			houseImg: {
				src: function(data) {
					return this.FotoLarge;
				}
			},
			houseCity: {
				text: function(data) {
					return this.Woonplaats;
				}
			},
			houseAddres: {
				text: function(data) {
					return this.Adres;
				}
			},
			housePrice: {
				html: function(data) {
					return this.PrijsGeformatteerdHtml
				}
			},
			houseSpecie: {
				text: function(data) {
					return this['Soort-aanbod'];
				}
			},
			houseRooms: {
				text: function(data) {
					if(this.AantalKamers == null) {
						return "";
					} else {
						return '• ' + this.AantalKamers + ' kamers';
					}
				}
			},
			houseSurface: {
				html: function(data) {
					if(this.Woonoppervlakte == null) {
						return "";
					} else {
						return this.Woonoppervlakte + 'm&#178;';
					}
				}
			}
		}

		Transparency.render(constants.data.housesUl, data, directives)
        constants.loader.classList.remove('loader-active');
	};

	return {
		getLocalStorageData,
		getData,
		renderError,
		renderData
	}
})();