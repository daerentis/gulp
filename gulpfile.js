const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

function vendors() {
  return src([
      'node_modules/...'
    ], { sourcemap: false })
    .pipe(concat('vendors.js'))
    .pipe(dest('dist/'));
};

function js() {
  return src([
      'src/js/app.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(dest('dist/'));
};

function css() {
  return src([
      'node_modules/...',
      'src/scss/main.scss'
    ])
    .pipe(concat('bundle.css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('dist/'));
};

function watching() {
  watch('src/scss/**/*.scss', css);
  watch('src/js/*.js', js);
}

exports.watch = watching;
exports.default = series(vendors, js, css);
