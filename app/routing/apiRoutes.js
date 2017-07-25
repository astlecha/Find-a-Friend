//Load table data array from friends.js
var friendsData = require('../data/friends.js');

//Route
module.exports = function(app){
	//Set up API get request for friend data
	app.get('/api/friends', function(req,res){
		res.json(friendsData);
	});

	//Set up API post request for new user's data
	app.post('/api/friends', function(req,res){
		friendsData.push(req.body);

		var newUserScores = req.body.scores
		var newAddedScores;
		var addedScores;
		
		for (var i = newUserScores.length - 1; i >= 0; i--) {
				newAddedScores = (newUserScores[i])+=(newUserScores[i]+1);
		};


		//Loop through user's scores and add
		for (var i = userScores.length - 1; i >= 0; i--) {
			addedScores = (userScores[i])+=(userScores[i+1]);
		};

		var subtractionTotal = addedScores-newAddedScores;

		//Make negative number positive
		if(subtractionTotal<0){
			subtractionTotal * (-1);
		}


		//Loop through all users
		for (var i = 0; i < friendsData.length; i++) {
			
			var prevUser = friendsData[i-1]
			var userScores = friendsData[i].scores;
		}
		



	});
};