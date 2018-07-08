'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass', function () {
    return gulp.src('frontend/styles/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('public/styles'))
});

gulp.task('mainjs', function () {
    return gulp.src('frontend/js/**/*.js')
        .pipe(gulp.dest('public/js'))
});

gulp.task('images', function () {
    return gulp.src('frontend/images/**/*.*')
        .pipe(gulp.dest('public/images'))
});

gulp.task('sass:watch', function () {
    gulp.watch('frontend/styles/**/*.*');
});

