'use strict';
// HBS
const router = require('express').Router();
const pkg = require('./package.json');

// model setup

const model = {
	'pkg': pkg,
	'home': require('./models/' + pkg.moduleName),
	'404': require('./models/404')
};

function getModel(modelName) {
	let formattedModel;

	if (!model[modelName]) {
		return false;
	}

	formattedModel = model[modelName];
	formattedModel.pkg = model.pkg;

	return formattedModel;
};

// routing
router
	.get('/home', (req, res) => {
		res.render('index', getModel('home'));
	})
	.get('/:template', (req, res, next) => {
		// test for root level 404
		if (!getModel(req.params.template)) {
			next();
		} else {
			res.render(req.params.template, getModel(req.params.template));
		}
	})
	.get('/', (req, res) => {
		res.render('index', getModel('home'));
	})
	.get('*', (req, res) => {
		res.render(404, getModel('404'));
	})

module.exports = router
