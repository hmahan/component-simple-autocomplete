const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');

gulp
    .task('pre-test', function () {
        return gulp.src(['dist/js/**/*.js'])
            // Covering files 
            .pipe(istanbul({
                includeUntested: true
            }))
            // Force `require` to return covered files 
            .pipe(istanbul.hookRequire());
    })
    .task('tests', ['pre-test'], () => {
        // suppress console info output during tests
        console.info = () => {};

        gulp
            .src(['tests/**/*.js', '!tests/coverage/**/*'], { read: false })
            .pipe(mocha({
                reporter: 'spec'
            }))
            .pipe(istanbul.writeReports({
                dir: 'tests/coverage',
                reporters: ['lcov', 'text']
            }));
    });