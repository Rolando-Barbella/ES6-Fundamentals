var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var exorcist = require('exorcist');
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

gulp.task('default',['watch'], function () {
  return bundle(browserify("js/main.js"));
});
