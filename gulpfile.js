const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const minimage = require('gulp-imagemin')


// Compile sass
gulp.task('sass', function () {
   gulp.src(['src/scss/*.scss'])
             .pipe(sass())
             .pipe(gulp.dest('src/css'))
             .pipe(browserSync.stream())
})

// minify images
// gulp.task('doraimon', function() {
//     gulp.src(['src/img/*.svg'])
//          .pipe(minimage())
//          .pipe(gulp.dest('src/img/minify'))
// })

// Watch & Serve
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './src'
  })

  // gulp.watch(['src/img/minify/*.svg'], ['doraimon'])
  gulp.watch(['src/scss/*.scss'], ['sass'])
  gulp.watch(['src/*.html']).on('change', browserSync.reload)
})


// Default
// Aca se llama como primer parametro
// el nombre como se va a llamar la tarea
// luego tenemos las tareas que se van
// a ejecutar cuando esta tarea sea llamada
gulp.task('default', ['serve'])
