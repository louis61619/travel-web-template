const gulp = require('gulp');
const imagemin = require('gulp-imagemin'); // 載入 gulp-imagemin 套件

gulp.task('imagemin', () => {
  return gulp
    .src('images/*')
    .pipe(imagemin()) // 執行優化(壓縮)
    .pipe(gulp.dest('public/img'));
});