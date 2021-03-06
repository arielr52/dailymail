
/**
 * Module dependencies.
 * http://shapeshed.com/creating-a-basic-site-with-node-and-express/
 * https://github.com/mjhea0/node-express-ajax-craigslist
 * http://www.barelyfitz.com/screencast/html-training/css/positioning/
 */

var express = require('express')
  , routes = require('./routes')
  , mail = require('./routes/mail')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.use('/mail', mail.send);
app.use('/', routes.index);

kids = [];

kids.push({
	name : 'bob',
	parent : 'bobMom',
	emailTo : 'bobMom@email'
});
kids.push({
	name : 'anna',
	parent : 'annaMom',
	emailTo : 'bobMom@email'
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
