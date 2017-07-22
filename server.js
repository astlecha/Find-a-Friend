//Require basic npm packages
npm express = require('express');
npm bodyParser = require('body-parser');
npm path = require('path');

//Configure server
var app = express();

//Define port
var PORT = process.env.PORT || 8080;

//Interpret express data with body-parser package
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));