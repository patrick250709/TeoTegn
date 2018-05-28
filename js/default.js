function search (searchString) {
$.ajax({ 
	url: 'search.php', 
	type: 'GET', 
	data:  {"searchString":searchString}, 
	datatype: 'html',
	success: function(data) { 
			//called when successfull
			//alert(data);
			$('#search-results').html(data);
			console.log(data);
	 },
	error: function(e) { 
			//called when there is an error 
			//console.log(e.message); 
		} 
	});
}

function changeSource (videoId, sourceId, source){
    try {
	    videoId.pause();
	    sourceId.setAttribute('src', source);
	    videoId.load();
	    videoId.play();
	}
	catch(err) {
	    console.log(err.message);
	}
}