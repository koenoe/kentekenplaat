/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('images:vector', () => gulp.src(config.files.vector)
    .pipe(svgmin({
      js2svg: {
        pretty: !global.isBuild,
      },
      plugins: [
        { removeComments: true },
        { removeDoctype: true },
        { mergePaths: false },
        { cleanupIDs: false },
        { cleanupNumericValues: { floatPrecision: 2 } },
      ],
    }))
    .pipe(gulp.dest(`${config.directories.build}/img`))
    .pipe(gulp.dest(`${config.directories.demo}/img`))
    .pipe(browserSync.stream()));
