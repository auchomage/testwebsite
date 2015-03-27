var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

// Set the view engine
app.set('view engine', 'jade');
// Where to find the view files
app.set('views', './views');

// Use the 'static' middleware
app.use(express.static(__dirname + '/public'));

// HTML should be prettified
app.locals.pretty = true;

app.get('/layout', function(req,res){
	//res.type('text/html');
	res.render('./layouts/layout.jade', { thisYear : "" + new Date().getFullYear() });
});

app.get('/moisturiser1', function(req,res){
	//res.type('text/html');
	res.render('moisturiser1.jade');
});

app.get('/moisturiser2', function(req,res){
	//res.type('text/html');
	res.render('moisturiser2.jade');
});

app.get('/moisturiser3', function(req,res){
	//res.type('text/html');
	res.render('moisturiser3.jade');
});

app.get('/about', function(req,res){
	//res.type('text/html');
  res.render('aboutUs.jade');
});

app.get('/contact', function(req,res){
	//res.type('text/html');
  res.render('contact.jade');
});

// custom 404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req,res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http:// localhost: ' + 
		app.get('port') + '; press-Control C to terminate' );
});
