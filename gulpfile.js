const gulp = require("gulp");
const sass = require("sass");

const rutas = {
	rutaJS: "./src/assets/js/*.js",
    rutaSCSS: "./src/assets/scss/*.scss",
	rutaHTML:"src/*.html",
}

gulp.task("prepararHtml", function(){
	gulp.src(rutas.rutaHTML)
	.pipe(gulp.dest("public/"))
});

gulp.task("prepararJS", function(){
	gulp.src(rutas.rutaJS)
	.pipe(gulp.dest("public/"))
});

gulp.task("prepararCss", function(){
	gulp.src(rutas.rutaSCSS)
	.pipe(sass({outputStyle: "compact"})
		.on("error", sass.logError))
	.pipe(gulp.dest("public/"))
});