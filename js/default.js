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
	    $('#'+videoId).get(0).pause();
	    $('#'+sourceId).get(0).setAttribute('src', source);
	    $('#'+videoId).get(0).load();
	    $('#'+videoId).get(0).play();
	}
	catch(err) {
	    console.log(err.message);
	}
}