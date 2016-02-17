var userSearch = (function(loader) {

	var searchTag = function() {
		// select submit and input fields 
		var submit = document.querySelector('.search-user-submit');
		var input = document.querySelector('.search-user-input');

		submit.onclick = function() {
			
			console.log('submit works');
			
			// get input value
			var user = input.value;

			// fire getData() and renderUser() functions to get data and show search value 
			userSearch.getData(user);
			userSearch.renderUser(user);

			loaderModule.getLoader().classList.add('loader-active');

		}
	};

	var getData = function(user) {
		//fire ajax call to get list of users data
		aja()
		   .url('https://api.instagram.com/v1/users/search?q=' + user + '&access_token=806401368.5aa13be.4a08df065cbb41469c9cc20041432d3b')
		   .type('jsonp')
		   .cache('false')
		   .on('success', function(data) {
		   		
                var data = data.data;
         
         		// filter data with underscore.js
                var filteredData = _.map(data, function(photo) {
                	return _.pick(photo, 'username','id', 'profile_picture');
                });

                //fire renderData() to render the list of users
                userSearch.renderData(filteredData);

		   })
		   .go();
	};

	var renderData = function(filteredData) {
		
		// declare target parent for transparency.js
		var userGalleryUl = document.querySelector('#user-gallery-ul');
		
		// declare directives
		var directives = {

            userThumbnail: {
                src: function(params) {
                    return this.profile_picture;
                }
            },
            userName: {
            	text: function(params) {
            		return this.username;
            	}
            },
            userLink: {
                href: function(params) {
                    return '#user-feed/' + this.id;
                }
            }
        };

        // render data
        loaderModule.getLoader().classList.remove('loader-active');
        Transparency.render(userGalleryUl, filteredData,  directives);
		
	};

	var renderUser = function(user){
		var photoGallery = document.querySelector('#user-gallery');
		
		var directive = {

			tagTitle: {
				text: function(params) {
					return "Searching for users with the name " + user;
				}
			}
		}
		Transparency.render(photoGallery, user, directive);
	};

	return {
		searchTag,
		getData,
		renderData,
		renderUser
	}
})();