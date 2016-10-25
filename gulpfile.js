/**
 * Created by yubing on 2016/10/25.
 */

var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var del = require("del");
var vinylPaths = require('vinyl-paths');

gulp.task("clean",function(){
    return gulp.src('.tmp/*')
        .pipe(vinylPaths(del));
})

gulp.task("default",["clean"],function(){
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./.tmp"));
});