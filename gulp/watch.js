const pkg = require('../package.json');
const gulp = require('gulp');

gulp
    .task('watch', () => {
        gulp.watch([`lib/styles/**/*.scss`], ['styles']);
        gulp.watch([`lib/js/**/*.js`], ['build', 'runner']);
        gulp.watch([`public/src/${pkg.moduleName}.js`], ['runner']);
    });