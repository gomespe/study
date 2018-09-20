const gulp = require('gulp');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');

gulp.task('test', function (cb) {
  gulp.src(['test/test.js'])
    .pipe(istanbul()) // covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', () => {
        gulp.src(['test/test.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports({reporters: ['html', 'json']})) // Creating the reports after tests ran
        // .pipe(istanbul.enforceThresholds({
        //     thresholds: {
        //         global: coverageConfig
        //     }
        // }))
        .on('end', cb)
    })
});


// gulp.task('check-coverage', function (cb) {
//   gulp.src([
//     'lib/activation-worker/activation-message-processor.js',
//     'lib/common/oda-facts-generator.js',
//     'lib/data-access/*-accessor*.js',
//     'lib/schema/*.js',
//     'lib/service/*-v2.js'
//   ])
//     .pipe(istanbul()) // Covering files
//     .pipe(istanbul.hookRequire()) // Force `require` to return covered files
//     .on('finish', () => {
//       gulp.src(['tests-v2/**/*.js'])
//       .pipe(mocha())
//       .pipe(istanbul.writeReports({reporters: ['html', 'json']})) // Creating the reports after tests ran
//       .pipe(istanbul.enforceThresholds({
//         thresholds: {
//           global: coverageConfig
//         }
//       })).on('end', cb);
//     });
// });