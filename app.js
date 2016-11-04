'use strict';
const express = require('express');
const favicon = require('serve-favicon');
const handlebars = require('express-handlebars');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = normalizePort(process.env.PORT || '3636');
const router = require('./router');

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
};

// view engine config
app
	.set('views', `${__dirname}/public`)
	.engine('.hbs', handlebars({
		extname: '.hbs',
		partialsDir: `${__dirname}/lib/templates`
	}))
	.set('view engine', '.hbs');

// static file config
app
	.use(favicon(__dirname + '/favicon.ico'))
	.use('/', express.static(__dirname));

// post data parsing
app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }));

// routing
app.all('*', router)

if (process.env.environment && process.env.environment === "development") {
		app.set('port', port);
		let server = http.createServer(app);
		server.listen(port);

		server.on('listening', () => {
			console.log('Running on port: ' + port);
		});
}

module.exports = app;
