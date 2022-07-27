const gulp = require("gulp");
const render = require("gulp-nunjucks-render");
const rename = require("gulp-rename");

const src = `${__dirname}/src`;
const dist = `${__dirname}/output`;

const factions = [
  { 
    name: "comintern", 
    description: ` Коминтерн - доктрина, в список стран которых входят страны с
коммунистической идеологией на момент начала Второй Мировой Войны в 1939
году, такие как СССР, Югославия, Синьцзань и так далее. Доктрина
Коминтерн разбросана по всем материкам, начиная от Азии и заканчивая
Южной Америкой.`,
    countries: [
      {
        name: "Третий Рейх",
        link: "Третий Рейх.html",
      },
      {
        name: "Испания",
        link: "Испания.html",
      },
      {
        name: "Румыния",
        link: "Румыния.html",
      },
      {
        name: "Персия",
        link: "Персия.html",
      },
      {
        name: "Аргентина",
        link: "Аргентина.html",
      },
      {
        name: "Перу",
        link: "Перу.html",
      },
    ],
  }, 
  { 
    name: "axis", 
    description: `Ось - доктрина в список стран которой входят государства с фашистким,
 нацистким и прогерманским устройством государства, такие как Германский Рейх, 
 Королевство Италия и так далее. Ось - является сильнейшей доктриной на всех континентах Земли.`, 
    countries: [
      {
        name: "Третий Рейх",
        link: "Третий Рейх.html",
      },
      {
        name: "Испания",
        link: "Испания.html",
      },
      {
        name: "Румыния",
        link: "Румыния.html",
      },
      {
        name: "Персия",
        link: "Персия.html",
      },
      {
        name: "Аргентина",
        link: "Аргентина.html",
      },
      {
        name: "Перу",
        link: "Перу.html",
      },
    ],
  }
]; 

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
