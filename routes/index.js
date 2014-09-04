
/*
 * GET home page.
 */

var kids = [];

kids.push({ name: 'bob', email: 'bob@email' });
kids.push({ name: 'anna', email: 'anna@email' });


exports.index = function(req, res){
    console.log(req.body.messageName);
    console.log(req.body);
	console.log("req="+req);
	req.on('data', function(data) {
		console.log("data="+data);	
	});
  	
  res.render('index', { title: 'Email for parents',kids: kids });
};