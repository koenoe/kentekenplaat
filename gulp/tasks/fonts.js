/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import gulp from 'gulp';
import config from '../config';

gulp.task('fonts:copy', () => gulp.src(config.files.fonts)
  .pipe(gulp.dest(`${config.directories.build}/fonts/`))
  .pipe(gulp.dest(`${config.directories.demo}/fonts/`)));
