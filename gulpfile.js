'use strict';

const dir = {
  src: './src',
  build: './build'
}

const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('autoprefixer');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const del = require('del');
const cache = require('gulp-cache');
const jshint = require('gulp-jshint');
const htmlmin = require('gulp-htmlmin');
const csslint = require('gulp-csslint');
const notify = require('gulp-notify');
const pngquant = require('gulp-pngquant');
const htmlbeautify = require('gulp-html-beautify');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const postcss = require('gulp-postcss');

const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');



function styles() {
  return src(`${dir.src}/scss/style.scss`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: ['last 2 version']}),
    ]))
    .pipe(sourcemaps.write('/'))
    .pipe(dest(`${dir.build}/css`))
    .pipe(browserSync.stream());
}
exports.styles = styles;

// function copyHTML() {
//   return src(`${dir.src}/*.html`)
//     .pipe(plumber())
//     .pipe(dest(dir.build));
// }
// exports.copyHTML = copyHTML;

function copyImg() {
  return src(`${dir.src}/img/**/*.{jpg,jpeg,png,gif,svg,webp,json}`)
    .pipe(plumber())
    .pipe(dest(`${dir.build}/img`));
}
exports.copyImg = copyImg;

function copyFonts() {
  return src(`${dir.src}/fonts/**/*.{woff,woff2,ttf,eot,svg}`)
    .pipe(plumber())
    .pipe(dest(`${dir.build}/fonts`));
}
exports.copyFonts = copyFonts;

function copyJS() {
  return src(`${dir.src}/js/*jquery*.js`)
    .pipe(dest(`${dir.build}/js`));
}
exports.copyJS = copyJS;

function javascript() {
  return src(`${dir.src}/js/script.js`)
      .pipe(plumber())
      .pipe(webpackStream({
        mode: 'development',
        output: {
          filename: 'script.js',
        },
        module: {
          rules: [
            {
              test: /\.(js)$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                presets: ['@babel/preset-env']
              }
            }
          ]
        },
        // externals: {
        //   jquery: 'jQuery'
        // }
      }))
      .pipe(dest(`${dir.build}/js`))
      .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest(`${dir.build}/js`));
}
exports.javascript = javascript;

function clean() {
  return del(dir.build)
}
exports.clean = clean;

function serve() {
  browserSync.init({
    server: dir.build,
    startPath: 'index.html',
    open: false,
    port: 8080,
  });
  watch([`${dir.src}/scss/**/*.scss`,
         `${dir.src}/blocks/**/*.scss`], { delay: 100 }, styles);
  // watch(`${dir.src}/*.html`).on('change', series(copyHTML, browserSync.reload));
  watch([`${dir.src}/pug/**/*.pug`,
         `${dir.src}/blocks/**/*.pug`]).on('change', series(pugHTML, browserSync.reload));
  watch(`${dir.src}/js/**/*.js`).on('change', series(javascript, browserSync.reload));
}

function pugHTML() {
  return src(`${dir.src}/pug/*.pug`)
      .pipe(plumber())
      .pipe(pug())
      .pipe(htmlbeautify({
        indentSize: 2,
      }))
      .pipe(dest(dir.build))
      .pipe(browserSync.stream());
}
exports.pugHTML = pugHTML;

function svgSprite() {
  return src(`${dir.src}/img/icons/*.svg`)
    .pipe(svgmin(function (file) {
      return {
        plugins: [{
          cleanupIDs: {
            minify: true
          }
        }]
      }
    }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(dest(`${dir.build}/img`));
}
exports.svgSprite = svgSprite;


// function svg() {
//   return src(`${dir.src}/img/icons/*.svg`)
//       .pipe(svgmin({
//         js2svg: {
//           pretty: true
//         }
//       }))
//       .pipe(cheerio({
//         run: function($) {
//           $('[fill]').removeAttr('fill');
//           $('[stroke]').removeAttr('stroke');
//           $('[style]').removeAttr('style');
//           // $('[xmlns]').removeAttr('xmlns');
//           // $('[xmlns:xlink]').removeAttr('xmlns:xlink');
//           // $('[xlink:href]').removeAttr('xlink:href');
//           $('svg').attr('style', 'display:none');
//         },
//         parserOptions: { xmlMode: true }
//       }))
//       .pipe(replace('&gt;', '>'))
//       .pipe(svgSprite({
//         mode: {
//           symbol: {
//             sprite: "sprite.svg"
//           }
//         }
//       }))
//       .pipe(dest(`${dir.build}/img`))
// }
// exports.svg = svg;

exports.default = series(
  clean, 
  parallel(copyImg, copyFonts, pugHTML, svgSprite, copyJS, javascript, styles),
  serve
);