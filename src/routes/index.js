const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // Routes
    app.get('/', (req, res) => {
        res.render('home');
    });

    //   app.get("/news", (req, res) => {
    //     res.render("news");
    //   });

    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}
module.exports = route;
