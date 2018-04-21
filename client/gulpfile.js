const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const shell = require('gulp-shell')

gulp.task('default', ['styles'], () => {
  gulp.watch("./src/sass/**.scss", ['styles'])
})

gulp.task('styles', () => {
  gulp.src("src/sass/*.scss")
  .pipe(sass({outputStyle: 'compressed'})
  .on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 2 versions']}))
  .pipe(gulp.dest("public/css"));
})
