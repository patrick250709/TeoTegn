 var jsonData;
function initiateJson(){
 	$.ajaxSetup({ cache: false });
	 
	$.getJSON("data/data.json", function(json){
	    jsonData = json;
	});
 }

function searchJson(searchString){


 // $('#search').keyup(function(){
  $('#result').html('');
  $('#state').val('');
  var searchField = searchString;
  var expression = new RegExp(searchField, "i");
  //$.getJSON('data/data.json', function(data) {
   $.each(jsonData, function(key, value){
    if (value.word.search(expression) != -1 || value.link.search(expression) != -1)
    {
     $('#result').append('<li>'+value.word+' | '+value.link+'</li>');
    }
   });   
 // });
 // });
 }