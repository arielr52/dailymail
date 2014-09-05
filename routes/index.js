// http://www.nodemailer.com/
// /npm install nodemailer
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport();

var createEmailOptions = function(message) {
	return {
		from : 'Elana <elana.raz@hotmail.com>', // sender address
		to : 'arielr52@gmail.com, arielr52@gmail.com', // list of receivers
		subject : 'Hello ', // Subject line
		text : message, // plaintext body
		html : '<b>' + message + '</b>' // html body
	}
};

var kids = [];

kids.push({
	name : 'bob',
	email : 'bob@email'
});
kids.push({
	name : 'anna',
	email : 'anna@email'
});

exports.index = function(req, res) {
	console.log(req.body.messageName);
	console.log(req.body);
	console.log("req=" + req);
	var messageName= req.body.messageName |''
	var lastEmailMessage = 'none'
    
	if (req.body.selectedKidName) {
		console.log("selectedKidName="+req.body.selectedKidName)
		lastEmailMessage = 'sent mail to the parent of '
				+ req.body.selectedKidName
		// send mail with defined transport object
		transporter.sendMail(createEmailOptions(req.body.messageName),
				function(error, info) {
					if (error) {
						console.log(error);
					} else {
						console.log('Message sent: ' + info.response);
					}
				});
	}
	res.render('index', {
		title : 'Email for parents',
		kids : kids,
		messageName : messageName,
		lastEmailMessage : req.body.selectedKidName
	});
};
