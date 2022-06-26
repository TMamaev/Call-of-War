const gulp = require("gulp");
const render = require("gulp-nunjucks-render");
const rename = require("gulp-rename");

const src = `${__dirname}/src`;
const dist = `${__dirname}/output`;

const factions = [{ name: "comintern" }, { name: "axis" }];

gulp.task("render", function (done) {
  gulp
    .src(`${src}/templates/index.njk`)
    .pipe(
      render({
        path: [`${src}/templates/`],
      })
    )
    .pipe(gulp.dest(dist));

  factions.forEach((faction) => {
    gulp
      .src(`${src}/templates/faction.njk`)
      .pipe(
        render({
          path: [`${src}/templates/`],
          data: { faction },
        })
      )
      .pipe(rename(`${faction.name}.html`))
      .pipe(gulp.dest(dist));
  });

  done();
});
