var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('browser-sync');
/*Task for Sass*/
gulp.task('sass', function() { //Таск sass
	return gulp.src('source/scss/**/style.scss') // Берем источник
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS 
	.pipe(gulp.dest('source/css')) // Выгружаем результат в папку css
	.pipe(server.stream());
});
/*Task for Browser-Sync*/
gulp.task('server', function(){
	server.init({
		server: 'source/',
		notify: false,
		open: true,
		cors: true,
		ui: false
		});
	gulp.watch('source/scss/**/*.scss', {usePolling: true}, gulp.series('sass'));
	gulp.watch('source/*.html').on('change', server.reload);
});

gulp.task('start', gulp.series('sass', 'server'));