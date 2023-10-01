const gulp			= require('gulp');
const plumber 		= require('gulp-plumber');
const rename		= require("gulp-rename");
const size			= require('gulp-size');
const autoprefixer	= require('gulp-autoprefixer');
const sass			= require('gulp-sass')(require('sass'));
const sassLint		= require('gulp-sass-lint');
const uglify		= require('gulp-uglify');
const imagemin 		= require('gulp-imagemin');

// Sass Paths
var sassPaths = ['./node_modules'];

gulp.task('sass', () => {
	return gulp.src('./src/scss/**/*.scss')
		.pipe(plumber())
		//.pipe(sassLint())
		//.pipe(sassLint.format())
		//.pipe(sassLint.failOnError())
		.pipe(sass({includePaths: sassPaths, outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(size({ gzip: true, showFiles: true }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('assets'));
});

gulp.task('js', () => {
	return gulp.src('./src/js/**/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(size({ gzip: true, showFiles: true }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('assets'));
});

gulp.task('img', () => {
	return gulp.src('./src/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets'));
});

gulp.task('fonts', () => {
	return gulp.src('./src/fonts/**/*')
		.pipe(gulp.dest('assets'));
});

gulp.task('watch', () => {
	gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('./src/js/**/*.js', gulp.series('js'));
	gulp.watch('./src/img/**/*', gulp.series('img'));
	gulp.watch('./src/fonts/**/*', gulp.series('fonts'));
	//themekit.command('watch', {
	//	env: 'development'
	//});
});
