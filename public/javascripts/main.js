/////////////////////////////
////    client side     ////
///////////////////////////

$(function() {
	$('#send').on('click', function(e) {
		var parameters = {
			email : 'test'
		};
		$.get('/mail', parameters, function(data) {
			$('#results').html('raz');
		});
	});
});