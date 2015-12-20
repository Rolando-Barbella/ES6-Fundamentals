var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var neat = require('node-neat');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var exorcist = require('exorcist');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

function bundle (bundler) {
  return bundler
  .transform(babelify)
  .bundle()
  .on('error', function (e) {
    gutil.log(e.message);
  })
  .pipe(exorcist('js/dist/main.js.map'))
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('js/dist'))

  .pipe(browserSync.stream());
}

gulp.task('watch', function () {
  watchify.args.debug = true;
  var watcher = watchify(browserify("js/main.js", watchify.args));
  bundle(watcher);
  watcher.on('update', function () {
    bundle(watcher);
  });
  watcher.on('log', gutil.log);

  browserSync.init('css/*.css',{
    server: './',
    logFileChanges: false
  });
});

/* Sass task */
gulp.task('sass', function () {  
  gulp.src('sass/styles.scss')
  .pipe(plumber())
  .pipe(sass({
    includePaths: ['scss'].concat(neat)
  }))
  .pipe(gulp.dest('css'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(browserSync.stream())
  .pipe(gulp.dest('css'))
  
  /* Reload the browser CSS after every change */
  .pipe(reload({stream:true}));
});


gulp.task('default',['watch','sass'], function () {
  gulp.watch([ 'sass/*.scss','sass/**/*.scss'], ['sass'])
  return bundle(browserify("js/main.js"));
});
