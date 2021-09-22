var express = require("express"); 
const path = require('path');
const cfenv = require('cfenv');

var app  =  express(); 
var appEnv = cfenv.getAppEnv();
var url = process.env.url
app.set('port', (process.env.PORT || 9981))
app.use(express.static(__dirname + '/images'))




app.get('/nodejsapp', function(request, response) {
   // response.send("<h2><center>Welcome to NodeJS project</h2>");
    response.write("<h2><center><u>This Project is being managed by Vaibhav </u></center></h2>");
	
    response.write("<h2><center>Welcome to the NodeJs Demonstration. Please Contact +91-8355048350 for more information or send an email: vaibhav.gupta@hexaviewtech.com <center></h2>" );
    response.end();
    
  })
 

//app.get("/html", function(req,res){
app.get("/html", function(req,res){
    res.set("Content-Type","text/html");
    //res.contentType("html") ; 
    res.write("<h2>Welcome</h2>");
    res.write("<h2>/html call</h2>");
    //must end 
    res.end();
    
    });
    app.get("/aboutme", function(req,res){
        res.type('json');
        //res.type('application/json');
        //res.json({'name': 'Mithun Reddy L'});
        res.send({
		'Name': 'Vaibhav Gupta',
		'Designation': 'DevOps',
		'Contact' : '8355048350',
		'email': 'vaibhav.gupta@hexaviewtech.com'
	            });
        
        });
app.get("/queryparam", function(req,res){
//res.send(req.query);
res.send(req.query.key + ": " + req.query.name);
});

app.get("/status-code-404", function(req, res) {
    //set content-type to application/json
    //res.sendStatus(404);
      res.status(404).send('Sorry, we cannot find that!');
})

app.get("/status-code-500", function(req, res) {
    //set content-type to application/json
    //res.sendStatus(500);
   res.status(500).send('My Brains Error – Sorry, I guess it did not work hope will come with a working demo next time');
})

app.get('/redirect', function(req, res) {
    //Send status 300
        res.redirect('http://beingvg.github.io/beingvg');
    });
    
 
    app.listen(app.get('port'), function() {
        console.log("Node JS app is running at http://localhost:" + app.get('port') +"/nodejsapp");
      })
    




