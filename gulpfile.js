
const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      webpackStream = require('webpack-stream'),
      config = require('./webpack.config')

gulp.task('build', function () {
    return gulp.src('./src/js/*.js')
        .pipe(webpackStream(config))
        .pipe(gulp.dest('./src/dist'))
})

gulp.task('serverRun', function () {
    browserSync({
        server: {
            baseDir: "./src"
        }
    })
})


gulp.task('watch', ['build', 'serverRun'], () => {
    gulp.watch('./src/js/*.js', ['build', browserSync.reload])
    gulp.watch('./src/styles/*.sass', ['build', browserSync.reload])
    gulp.watch('./src/*.html', browserSync.reload)

})
