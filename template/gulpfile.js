const gulp = require('gulp');
const rollup = require('rollup');
const browserSync = require('browser-sync');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

const { reload } = browserSync;

async function rollin(done) {
  const inputConfig = {
    input: 'src/index.js',
    plugins: [
      resolve({ jsnext: true, main: true, }),
      babel({
        exclude: 'node_modules',
      }),
    ],
  };

  const outputConfig = {
    file: 'public/bundle.js',
    format: 'iife',
  };

  const bundle = await rollup.rollup(inputConfig);
  await bundle.write(outputConfig);
  done();
}

function serve() {
  browserSync({
    open: false,
    server: {
      baseDir: 'public',
    },
  });

  gulp.watch('src/**/*.js', gulp.series(rollin));

  gulp.watch(['public/**/*.*'], gulp.series(reload));
}

gulp.task('rollin', gulp.series(rollin));

gulp.task('default', gulp.series(gulp.parallel([rollin]), serve));
