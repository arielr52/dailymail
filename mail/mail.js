var jade = require('jade');
//http://jade-lang.com/api/
var options = {
		filename: '/jade.txt',
		 pretty: true,
		self: false,
		debug: false,
		compileDebug: false
	}


var send={"selectedKidName":"anna","other":"aa","books":"xxx","from":"","to":"","meals":"All","mealNote":"","Special Activity":""}
options.att=send
send.pretty=true
var html = jade.renderFile('./letter.jade', options);
console.log(html)