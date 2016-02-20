var gulp    = require('gulp');
var sass    = require('gulp-sass');
var connect = require('gulp-connect');
var ts      = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

var appFolder  = 'app/',
  distFolder = 'dist/';

var staticFiles = [
  appFolder + '**/*.html',
  appFolder + '**/*.jpg',
  appFolder + '**/*.png'
];

gulp.task('sass', function () {
  gulp.src(appFolder + 'sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(distFolder + 'css'))
      .pipe(connect.reload());
});

gulp.task('ts', function() {
  var tsResult = gulp.src(appFolder + '**/*.ts')
      .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest(distFolder))
      .pipe(connect.reload());
});

gulp.task('material-icons', function() {
  gulp.src('node_modules/material-design-icons/iconfont/*')
      .pipe(gulp.dest(distFolder + 'fonts/'));
});

gulp.task('static', function() {
  gulp.src(staticFiles)
    .pipe(gulp.dest(distFolder))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch([appFolder + '**/*.ts'], ['ts']);
  gulp.watch(staticFiles, ['static']);
  gulp.watch([appFolder + 'sass/**/*.*'], ['sass']);
});

gulp.task('build', ['ts', 'sass', 'static', 'material-icons']);

gulp.task('default', ['build', 'connect', 'watch']);
