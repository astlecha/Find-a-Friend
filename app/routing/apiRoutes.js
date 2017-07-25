//Load table data array from friends.js
var friendsData = require('../data/friends.js');
var path = require('path');

//Route
module.exports = function(app){
	//Set up API get request for friend data
	app.get('/api/friends', function(req,res){
		res.json(friendsData);
	});

	//Set up API post request for new user's data
	app.post('/api/friends', function(req,res){
		
		//Grab entered information
		var info = req.body;
		var userName = info.name;
		var userPhoto = info.photo;
		var userScores = info.scores;

		var totalDifference = 0;

		//Set up object for best match
		var bestMatch = {
			name: '',
			photo: '',
			matchDifference: 0;
		}
		
		//Loop through each friend object to get each scores array
		for (var i = 0; i < friendsData.length; i++) {
			totalDifference=0;

			//Loop through 10 diff scores
			for (var t = 0; t < 10; t++) {
				totalDifference +=
			}

		}
			
		friendsData.push(info);


	});
};