var dotenv = require('dotenv-safe').load();
console.log('process.env: ' + process.env.TWITTER_CONSUMER_KEY);

import express from 'express';
import exphbs from 'express-handlebars';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import TestComp from './components/Header.react.jsx';

var app = express();
var port = process.env.PORT || 8080;

// Templating
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var main = require('./views/layouts/main.handlebars');

// Mongo
mongoose.connect('mongodb://localhost/react-test');

// Express setup
app.get('/', routes.index);
app.use("/", express.static(__dirname + "/public/"));

// Fire this bitch up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

// Render the components, picking up where react left off on the server
ReactDOM.render(
	<TestComp/>,
	document.getElementById('test-reader')
);
