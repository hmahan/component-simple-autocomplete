const pkg = require('../package.json');
const gulp = require('gulp');
const compass = require('gulp-compass');
const cssLint = require('gulp-csslint');
const minifyCss = require('gulp-minify-css');
const del = require('del');

gulp
    .task('compass', () => {
        const distDir = 'dist/styles',
              cssDistDir = distDir + '/css',
              scssDistDir = distDir + '/scss',
              scssLibDir = `lib/styles`,
              scssGlob = `${scssLibDir}/**/*.scss`;

        gulp
            .src(scssGlob)
            .pipe(gulp.dest(scssDistDir));

        return gulp.src(scssGlob)
            .pipe(compass({
                'config_file' : './gulp/compass_config.rb',
                'import_path' : `./node_modules/v2-stylesheets`,
                'css' : cssDistDir,
                'sass' : scssLibDir
            }))
            .pipe(cssLint())
            .pipe(minifyCss({
                compatibility: 'ie8'
            }))
            .pipe(gulp.dest(cssDistDir));
    })
    .task('includes:css', () => {
        return gulp.src('./public')
                .pipe(compass({
                    'config_file' : './gulp/compass_config.rb',
                    'import_path' : './node_modules/v2-stylesheets',
                    'css' : './public/build',
                    'sass' : './public/src'
                }));
    });