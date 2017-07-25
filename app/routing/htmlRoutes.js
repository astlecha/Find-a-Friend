//Package for retrieving html file path
var path = require('path');

module.exports = function(app) {

	//Get path to the survey html
	app.get('/survey', function(req,res){
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});

	//Use path to homepage html
	app.use('/', function(req,res){
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});

}