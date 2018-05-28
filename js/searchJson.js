 var jsonData;
function initiateJson(){
 	$.ajaxSetup({ cache: false });
	 
	$.getJSON("data/data.json", function(json){
	    jsonData = json;
	});
 }

function searchJson(searchString){


 // $('#search').keyup(function(){
  $('#search-results').html('');
  $('#state').val('');
  var searchField = searchString;
  var expression = new RegExp(searchField, "i");
  var html = '<ul>';
   $.each(jsonData, function(key, value){
    if (value.word.search(expression) != -1 || value.link.search(expression) != -1)
    {
     html += '<li data-src="data/'+value.link+'.mp4">'+value.word+' | '+value.link+'</li>';
    }
   });   
	 html += '</ul>';
    $('#search-results').html(html);
 }