
const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      webpackStream = require('webpack-stream'),
      config = require('./webpack.config'),
      cleanCSS = require('gulp-clean-css')


gulp.task('cleanCSS', () => {
    gulp.src('./App/dist/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./App/dist'))
})

gulp.task('build', function () {
    return gulp.src('./App/src/js/*.js')
        .pipe(webpackStream(config))
        .pipe(gulp.dest('./App/dist'))
})

gulp.task('serverRun', function () {
    browserSync({
        server: {
            baseDir: "./App"
        }
    })
})

gulp.task('watch', ['build', 'serverRun', 'cleanCSS'], () => {
    gulp.watch('./App/src/js/*.js', ['build', browserSync.reload])
    gulp.watch('./App/src/styles/*.sass', ['build', browserSync.reload])
    gulp.watch('./App/*.html', browserSync.reload)

})
