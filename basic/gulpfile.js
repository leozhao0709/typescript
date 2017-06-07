const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', () => {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest(''))
});

gulp.task('watch', () => {
  gulp.watch("*.ts", ["typescript"])
})

gulp.task("default", ["watch"])