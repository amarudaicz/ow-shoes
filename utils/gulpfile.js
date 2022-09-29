const sass = require('gulp-sass')(require('sass'));
const { src, dest, watch } = require('gulp');
const plumber = require('gulp-plumber');

//FUNCION para compilar los archivos sass
function css(done) {
  src('src/scss/contenido/**/*.scss') // Identificar el archivo .SCSS a compilar
    .pipe(plumber()) //Agregamos plumber para "saltarnos los errores mientras escribimos codigo"
    .pipe(sass()) // Compilamos los archivos con el modulo de sass
    .pipe(dest('build/css/cart')); // Almacenarla en el disco duro
  done();
}

function dev(done) {
  watch('src/scss/**/*.scss', css);

  done();
}

exports.css = css;
exports.dev = dev;