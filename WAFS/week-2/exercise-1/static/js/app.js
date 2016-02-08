// add iife
(function() {


	 // $.ajax({
  //     type: "GET",
  //     dataType: "jsonp",
  //     cache: false,
  //     url: "https://api.instagram.com/v1/media/popular?access_token=344623690.947638a.ba610ab415254b55a7b6be050ba6435a",
  //     success: function(data) {
  //       // placing the images on the page
  //       console.log(data);
  //       }
  //     });
	

	 aja()
		  .url('https://api.instagram.com/v1/media/popular?access_token=806401368.f59def8.e8efe19844fd46238d592f9f20216f88')
		  .on('success', function(data){
		      console.log('data van amsterdam is' + data);
		  })
		  // .type('jsonp')
		  .go();

})();