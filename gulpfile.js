const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function js() {
  return src([
      'node_modules/...',
      'src/js/app.js'
    ])
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/'));
};

function css() {
  return src([
      'node_modules/...',
      'src/scss/main.scss'
    ])
    .pipe(concat('bundle.min.css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('dist/'));
};

watch('src/scss/**/*.scss', css);
watch('src/js/*.js', js);

exports.default = series(js, css);
