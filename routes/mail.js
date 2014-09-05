/*
 * GET users listing.
 */
var nodemailer =require('nodemailer');
exports.send = function(req, res) {
	console.log("send="+req.path.body)
	res.end("respond with a resource ");
};

/*
 * //http://www.nodemailer.com/ ///npm install nodemailer var nodemailer =
 * 
 * 
 * //create reusable transporter object using SMTP transport /* var transporter =
 * nodemailer.createTransport({ service: 'Gmail', auth: { user:
 * 'gmail.user@gmail.com', pass: 'userpass' } });
 */

var transporter = nodemailer.createTransport();

// NB! No need to recreate the transporter object. You can use //the
// sametransporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
	from : 'Elana <elanaraz@hotmail.com>',
	to : 'arielr52@gmail.com',
	subject : 'Hello ',
	text : 'Hello world ',
	html : '<b>Hello world</b>'
};

/*
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Message sent: ' + info.response);
	}
});
*/