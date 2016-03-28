const gulp = require('gulp');
const bump = require('gulp-bump');

// bump tasks
gulp
    .task('bump:patch', () => {
        bumpVersion('patch');
    })
    .task('bump:minor', () => {
        bumpVersion('minor');
    })
    .task('bump:major', () => {
        bumpVersion('major');
    });

// bumpVersion function
function bumpVersion(type) {
    return gulp.src('./package.json')
        .pipe(bump({
            'type' : type
        }))
        .pipe(gulp.dest('./'));
};