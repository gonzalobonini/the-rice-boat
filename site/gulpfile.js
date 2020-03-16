var gulp = require('gulp');
var sass = require('gulp-sass');
const minify = require('gulp-minify');
var htmltidy = require('gulp-htmltidy');


gulp.task('watch', function(){
  gulp.watch('themes/massively/assets/scss/*/*.scss', ['sass']);
});

gulp.task('sass', function(){
  return gulp.src('themes/massively/assets/scss/main.scss')
    .pipe(sass({outputStyle: 'minified'})) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('static/assets/css'))
});


gulp.task('minjs', function() {
  gulp.src(['src/js/*.js', 'src/js/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('static/js'))
});

gulp.task('tidy', function() {
  return gulp.src('public/*.html')
        .pipe(htmltidy())
        .pipe(gulp.dest('public/'));;
});
