'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');


function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

var sassOptions = { // The options to be passed to sass()
  style: 'expanded',
  'sourcemap=none': true
}

module.exports = gulp.task('styles', function () {
  return gulp.src(config.paths.src.styles)
    .pipe(autoprefixer('last 1 version'))
    .pipe(gulpif(release, csso()))
    .pipe(gulpif(release, sass(sassOptions).on('error', handleError), sass(sassOptions).on('error', handleError)))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)))
});
