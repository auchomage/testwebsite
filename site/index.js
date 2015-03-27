var express = require('express');
var app = express();
var http = require('http');

// Pass the Express instance to the routes module
var routes = require('./routes')(app);

app.set('port', process.env.PORT || 3000);

// Set the view engine
app.set('view engine', 'jade');
// Where to find the view files
app.set('views', './views');

// Use the 'static' middleware
app.use(express.static(__dirname + '/public'));

// HTML should be prettified
app.locals.pretty = true;

// custom 404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404).send('404 - File Not Found');
});

// custom 500 page
app.use(function(err, req,res, next){
//	console.error(err.stack);
	res.type('text/plain');
	res.status(500).send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http:// localhost: ' + 
		app.get('port') + '; press-Control C to terminate' );
});
