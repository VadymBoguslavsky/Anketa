var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('resources/sass/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('resources/dist/'));
});
 gulp.task('default', function () {
    gulp.src('resources/dist/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('resources/dist'));
});