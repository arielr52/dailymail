/////////////////////////////
////    client side     ////
///////////////////////////


$(function() {
	$('#send').on('click', function(e) {
		var formData = $("#myform").serializeArray();
		//alert(JSON.stringify(formData))
		$.post('/mail',formData, function(data){
	    	$('#results').html('raz');
	    });
	});
});
