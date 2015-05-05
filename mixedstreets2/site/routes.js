module.exports = function(app)  
{
  // Define the Routes
  app.get('/', function(req, res){
    res.render('./layouts/layout.jade');
  });

  app.get('/layout', function(req,res){
	  //res.type('text/html');
	  res.render('./layouts/layout.jade');
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

   app.get('/privacy', function(req,res){
    res.render('privacy.jade');
  });
};

