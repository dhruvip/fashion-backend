var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('default', function () {
  gulp.run('server');
  gulp.watch(['server.js', 'config.js', 'authenticate/*.js', 'app/**/**/*.js'], function () {
    gulp.run('server');
  });
});

gulp.task('server', function () {
  server.run(['server.js']);
});