const pkg = require('../package.json');
const gulp = require('gulp');
const concat = require('gulp-concat');
const handlebars = require('gulp-handlebars');
const declare = require('gulp-declare');

gulp
    .task('templates', () => {
        var partials = `lib/templates/**/*`,
            dest = 'dist/templates';

        gulp
            .src(partials)
            .pipe(gulp.dest(dest + '/hbs'));

        gulp
            .src(partials)
            .pipe(handlebars())
            .pipe(declare())
            .pipe(concat('templates.js'))
            .pipe(gulp.dest(dest));
    });