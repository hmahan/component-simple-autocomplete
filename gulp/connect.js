const gulp = require('gulp');
const connect = require('gulp-connect');

gulp
    .task('connect', () => {
        connect.server({
            root: [__dirname],
            port: 8081,
            middleware: (connect, opt) => {
                return [
                    require('../app')
                ]
            }
        });
    });