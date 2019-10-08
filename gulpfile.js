var
  gulp        = require('gulp'),
  browserSync = require('browser-sync'),
  sass        = require('gulp-sass'),
  zip         = require('gulp-zip'),
  inlineCss   = require('gulp-inline-css')
  log         = require('fancy-log')
;

// Build SASS
gulp.task('sass', function() {
  return gulp.src('./src/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src'))
    .pipe(browserSync.stream());
});

// Inline CSS
gulp.task('inlineCss', function() {
  return gulp.src('./src/index.html')
    .pipe(inlineCss())
    .pipe(gulp.dest('./build'));
});

// Copy required files
gulp.task('copyFiles', function() {
  return gulp.src([
    './src/Images/**/*',
    './src/teaser.txt',
    './src/logo.*'
  ], { base: './src' })
    .pipe(gulp.dest('./build'));
})

// Build the final distributable files
gulp.task('build', gulp.series('sass', 'inlineCss', 'copyFiles'));

gulp.task('createZip', function() {
  var date = new Date();
  var zipFileName = date.getTime() + '.zip';

  return gulp.src('./build/*')
    .pipe(zip(zipFileName))
    .pipe(gulp.dest('./uploads'))
    .on('end', function() {
      log('./uploads/' + zipFileName + ' Created')
    });
});

// Creates a zipped file release for upload to Google Ads
gulp.task('release', gulp.series('build', 'createZip'));

// Watch. o.O
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: './src'
    },
    notify: false
  });

  gulp.watch('./src/index.html')
    .on('change', browserSync.reload);

  gulp.watch('./src/style.scss', gulp.series('sass'));
});
