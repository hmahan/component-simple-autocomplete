const gulp = require('gulp');
const connect = require('gulp-connect');

gulp
    .task('connect', () => {
        connect.server({
            root: [__dirname],
            port: 3636,
            middleware: (connect, opt) => {
                return [
                    require('../app')
                ]
            }
        });
    });