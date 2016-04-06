var express = require('express');
var favicon = require('serve-favicon');
var handlebars = require('express-handlebars');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = normalizePort(process.env.PORT || '3636');
var server;

// model setup
var pkg = require('./package.json');

var model = {
	'pkg': pkg,	
	'home': require('./models/' + pkg.moduleName),
	'404': require('./models/404')
};

function getModel(modelName) {    
	var formattedModel;

	if (!model[modelName]) {
		return false;
	}
	
	formattedModel = model[modelName];
	formattedModel.pkg = model.pkg;

	return formattedModel;
};

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
app
	.get('/', (req, res) => {
		res.render('index', getModel('home'));
	})
	.get('/home', (req, res) => {
		res.render('index', getModel('home'));
	})
	.get('/:template', (req, res) => {
		// test for root level 404
		if (!getModel(req.params.template)) {
			res.render('404', getModel('404'));
		} else {
			res.render(req.params.template, getModel(req.params.template));    
		}
	})
	.get('*', (req, res) => {
		// test for all other 404
		res.render('404', getModel('404'));
	});


//////////////////////////
// UNCOMMENT THE FOLLOWING
// LINES IN PRODUCTION
//////////////////////////

// app.set('port', port);
// server = http.createServer(app);
// server.listen(port);

// server.on('listening', () => {
// 	console.log('Running on port: ' + port);
// });

module.exports = app;