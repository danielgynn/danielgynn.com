var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    jshint     = require('gulp-jshint'),
    stylish    = require('jshint-stylish'),
    concat     = require('gulp-concat');
    uglify     = require('gulp-uglify');
    rename     = require('gulp-rename');
    cleanCSS   = require('gulp-clean-css');

gulp.task('styles', function() {
  gulp.src('./assets/scss/app.scss')
  .pipe(sass({
      style: 'compressed'
    }))
  .pipe(concat('app.css'))
  .pipe(gulp.dest('./build'))
  .pipe(rename('app.min.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function () {
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './assets/js/scripts/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});

gulp.task('jshint', function () {
  return gulp.src('./assets/js/*')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('default', ['styles', 'scripts'], function() {
gulp.watch('./assets/scss/**/*.scss', ['styles']);
  gulp.watch('./assets/js/**/*.js', ['scripts', 'jshint']);
});
