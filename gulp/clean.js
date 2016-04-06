const pkg = require('../package.json');
const gulp = require('gulp');
const del = require('del');

gulp
    .task('clean', () => {
        return del([
            'dist',
            'public/build'
        ]);
    })
    .task('clean:runner', () => {
        return del([
            `public/src/${pkg.moduleName}.tmp.js`
        ]);
    })
    .task('clean:css', () => {
        return del([
            '.sass-cache'
        ]);
    });