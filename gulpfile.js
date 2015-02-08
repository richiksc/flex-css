var gulp = require('gulp');
var del = require('del');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
gulp.task('default',['clean'],function() {
  return gulp.src('src/flex.css')
    .pipe(gulp.dest('dist'))
    .pipe(minifycss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({
      suffix: '.prefixed'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
  del(['dist/flex.css', 'dist/flex.min.css', 'dist/flex.min.prefixed.css'] ,cb);
});