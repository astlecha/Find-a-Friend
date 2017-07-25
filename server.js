//Require basic npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Configure server
var app = express();

//Define port
var PORT = process.env.PORT || 8080;

//Interpret express data with body-parser package
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Point to route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Port listener (for starting the server)
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});