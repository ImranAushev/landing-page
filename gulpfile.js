var gulp 		 = require('gulp'),
	sass 		 = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	burbon       = require('node-bourbon'),
	cssnano      = require('gulp-cssnano'),
	rename    	 = require('gulp-rename'),
	del          = require('del'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('sass/*.sass')
  .pipe(sass({includePaths: require('node-bourbon').includePaths}))
  // .pipe(autoprefixer(['last 15 versions', '> 1%'], {cascade: true}))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		proxy: "optimazed.dev",
		notify: false
	});
});

gulp.task('watch', function() {
	gulp.watch('sass/*.sass',  gulp.parallel('sass'));
	gulp.watch('app/js/*.js').on('change', browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/**/*.php').on('change', browserSync.reload);
})

gulp.task('default', gulp.parallel('browser-sync', 'sass', 'watch'), function() {

});

gulp.task('clean', async function() {  // delete folders(project)
	return del.sync('dist');
});

gulp.task('img', async function() {
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('add', async function() {
	var buildCss = gulp.src([
		'app/css/main.min.css',
		'app/css/media.min.css',
		'app/css/fonts.css',
	])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildFonts = gulp.src('app/libs/**/*')
	.pipe(gulp.dest('dist/libs'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('clean','img', 'add'), async function() { // create a new project(dist)

});

