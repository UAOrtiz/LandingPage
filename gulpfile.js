var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./public/stylesheets/'));
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css.map')
    .pipe(gulp.dest('./public/stylesheets/'));
  gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./public/javascripts/'));
  gulp.src('./node_modules/popper.js/dist/popper.js')
    .pipe(gulp.dest('./public/javascripts/'));
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./public/javascripts/'));
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js.map')
    .pipe(gulp.dest('./public/javascripts/'));
  gulp.src('./node_modules/fontawesome/index.js')
    .pipe(gulp.dest('./public/javascripts/'));
});