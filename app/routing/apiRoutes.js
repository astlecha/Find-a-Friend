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
	});
};