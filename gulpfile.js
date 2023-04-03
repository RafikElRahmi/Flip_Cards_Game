/*declaring plugins*/
var gulp = require("gulp"),
  concat = require("gulp-concat"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass")(require("sass")),
  prefix = require("gulp-autoprefixer"),
  live = require("gulp-livereload"),
  ts = require("gulp-typescript"),
  tsProject = ts.createProject("tsconfig.json"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify"),
  zip = require("gulp-zip");

/*html task*/
gulp.task("HTML", function () {
  return gulp
    .src("src/html/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./dist/html"))
    .pipe(live());
});

/*html task*/
gulp.task("HTMLIndex", function () {
  return gulp
    .src("src/html/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./dist"))
    .pipe(live());
});

/*css task*/
gulp.task("CSS", function () {
  return gulp
    .src("src/css/**/*.sass")
    .pipe(sourcemaps.init())
    .pipe(sass(/*{ outputStyle: "compressed" }*/))
    .pipe(prefix("last 3 versions"))
    .pipe(concat("all.min.css"))
    .pipe(sourcemaps.write("../../mappings/css"))
    .pipe(gulp.dest("./dist/css"))
    .pipe(live());
});

/*javascript task*/
gulp.task("JS", function () {
  return gulp
    .src("src/js/**/*.ts")
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("../../mappings/js"))
    .pipe(gulp.dest("./dist/js"))
    .pipe(live());
});

/*compressing task*/
gulp.task("Compress", function () {
  return gulp
    .src("./dist/**/*.*")
    .pipe(zip("flipCards.zip"))
    .pipe(gulp.dest("."));
});

/*watching task*/
gulp.task("watch", function () {
  require("./server.js");
  live.listen();
  gulp.watch("src/html/**/*.pug", gulp.parallel("HTML"));
  gulp.watch("src/html/index.pug", gulp.parallel("HTMLIndex"));
  gulp.watch("src/css/**/*.sass", gulp.parallel("CSS"));
  gulp.watch("src/js/**/*.ts", gulp.parallel("JS"));
  gulp.watch("dist/**/*.*", gulp.parallel("Compress"));
});
