const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    // Routes
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    //   app.get("/news", (req, res) => {
    //     res.render("news");
    //   });

    app.use('/news', newsRouter);
    app.use('/courses',coursesRouter);
    app.use('/', siteRouter);

}
module.exports = route;
