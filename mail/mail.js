var jade = require('jade');
//http://jade-lang.com/api/
var options = {
		filename: '/jade.txt',
		 pretty: true,
		self: false,
		debug: false,
		compileDebug: false
	}

var arr1=['Gluing', 'Puzzies', 'running', 'running', 'speech', 'communication', 'coloring', ' building', 'jumping','takingTurns', ' paiting', 'dramaticPlay'];
var arr2= ['throwCatch','sittingWithTheGroup','cuttingWithScissors','Manipulatives','climbing','painting']
var arr= arr1.concat(arr2)
var today = new Date().toDateString() 

var send={"selectedKidName":"anna","other":"aa","books":"xxx","from":"","to":"","meals":"All","mealNote":"","Special Activity":""}
options.att=send
options.arr= arr
options.today= today
send.pretty=true
var html = jade.renderFile('./letter.jade', options);
console.log(html)