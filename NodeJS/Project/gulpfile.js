const gulp = require('gulp');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');

gulp.task('test', function (cb) {
  gulp.src(['./lib/stack.js'])
    .pipe(istanbul()) // covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
        gulp.src(['./test/test.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports({reporters: ['html', 'json']})) // Creating the reports after tests ran
    })
});