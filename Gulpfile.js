const gulp = require('gulp');
const runSequence = require('run-sequence');

// incude external tasks
require('./gulp');

// task runners
gulp
	.task('default', () => {
		runSequence(
			'clean', 
			['build', 'runner'], 
			['connect', 'watch']
		);
	})
	.task('build', ['templates', 'styles', 'es6:dist'])
	.task('styles', () => {
		runSequence(
			['compass', 'includes:css'],
			'clean:css'
		);
	})
	.task('runner', () => {
		runSequence(
			'es6:runner', 
			'js:runner', 
			'clean:runner'
		);
	})
	.task('test', ['tests']);