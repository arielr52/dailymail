// http://www.nodemailer.com/
// /npm install nodemailer
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport();


exports.index = function(req, res) {
	var messageName= req.body.messageName |''
	var lastEmailMessage = 'none'
	res.render('index', {
		title : 'Email for parents',
		kids : kids,
		messageName : messageName,
		lastEmailMessage : req.body.selectedKidName
	});
};
