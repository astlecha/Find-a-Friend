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
			matchDifference: 20000;
		}
		
		//Loop through each friend object to get each scores array
		for (var i = 0; i < friendsData.length; i++) {
			totalDifference=0;

			//Loop through 10 diff scores
			for (var t = 0; t < 10; t++) {
				//Subtract friend score total from user score total
				//Convert to positive number with absolute value: Math.abs
				totalDifference += Math.abs(parseInt(userScores[t])-parseInt(friendsData[i].scores[t]));
				
				//If difference between this friend & user < previous best match total...
				if(totalDifference <= bestMatch.matchDifference){
					//Update best match with this friend's data
					bestMatch.name = friendsData[i].name;
					bestMatch.photo = friendsData[i].photo;
					bestMatch.matchDifference = totalDifference;
				}
			}
		};
		
		//Push new user req.body into friends array
		friendsData.push(info);

		//Send best match as res
		res.json(bestMatch);
	});
};