const gulp = require('gulp');
const pkg = require('../package.json');
const babel = require('gulp-babel');
const jsHint = require('gulp-jshint');
const webpack = require('gulp-webpack');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp
    .task('es6:dist', () => {
        return gulp.src([`lib/js/**/*.js`])
            .pipe(babel({
                presets: ['es2015'],
                sourceMaps: true
            }))
            .pipe(jsHint())
            // .pipe(uglify())
            .pipe(gulp.dest('dist/js'));
    })
    .task('es6:runner', () => {
        return gulp.src(`public/src/${pkg.moduleName}.js`)
            .pipe(babel({
                presets: ['es2015'],
                sourceMaps: true
            }))
            .pipe(jsHint())
            .pipe(rename(`${pkg.moduleName}.tmp.js`))
            .pipe(gulp.dest('public/src'));
    })
    .task('js:runner', () => {
        return gulp.src(`public/src/${pkg.moduleName}.tmp.js`)
            .pipe(webpack({
                output : {
                    filename : `${pkg.moduleName}.js`,
                    // library: `${pkg.moduleName}`,
                    // libraryTarget: 'commonjs2'
                }
            }))
            .pipe(gulp.dest('./public/build'));
    });