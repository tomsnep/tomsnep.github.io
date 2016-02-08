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
	   .url('https://api.instagram.com/v1/media/popular?access_token=806401368.5aa13be.4a08df065cbb41469c9cc20041432d3b')
	   .type('jsonp')
	   .cache('false')
	   .on('success', function(data){
	       for (var i = 0; i < 6; i++) {
	             // $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
	            
	            var li = document.createElement('li');
	           	li.innerHTML = <a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>;
        
				document.querySelector(".popular").appendChild(li);     
	       }
	   })
	   .go();
})();
  

// function appendHtml(el, str) {
//   var li = document.createElement('li');
//   div.innerHTML = <a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>;
//   while (div.children.length > 0) {
//     el.appendChild(div.children[0]);
//   }
// }
// var html = '<h1 id="title">Some Title</h1><span style="display:inline-block; width=100px;">Some arbitrary text</span>';
// appendHtml(document.body, html); // "body" has two more children - h1 and span.
