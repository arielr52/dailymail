/*
 * GET users listing.
 */

exports.edit = function(req, res) {
	console.log(req.path)
	res.send("respond with a resource " + req.path);
};



/*
 * //http://www.nodemailer.com/ ///npm install nodemailer var nodemailer =
 * require('nodemailer');
 * 
 * //create reusable transporter object using SMTP transport /* var transporter =
 * nodemailer.createTransport({ service: 'Gmail', auth: { user:
 * 'gmail.user@gmail.com', pass: 'userpass' } });
 */
/*
 * var transporter = nodemailer.createTransport();
 * 
 * //NB! No need to recreate the transporter object. You can use //the same
 * transporter object for all e-mails
 * 
 * //setup e-mail data with unicode symbols var mailOptions = { from: 'Elana
 * <elana@hotmail.com>', // sender address to: 'ariel@gmail.com,
 * ariel@gmail.com', // list of receivers subject: 'Hello ', // Subject line
 * text: 'Hello world ', // plaintext body html: '<b>Hello world</b>' // html
 * body };
 * 
 * //send mail with defined transport object transporter.sendMail(mailOptions,
 * function(error, info){ if(error){ console.log(error); }else{
 * console.log('Message sent: ' + info.response); } });
 */