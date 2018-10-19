// Ссылки на переменные
let APP,
    DB,
    PATH;

module.exports = function (app, db, path) {
    APP = app;
    DB = db;
    PATH = path;
    // Обработчики
    app.get('/api/auth', auth)
}

function auth(req, res) {
    var user = req.query;
    DB.cursor({ name: user.name }, function (user) {
        if (user.length == 0) res.status(401);
        switch (user[0].id) {
            case 1:
                APP.set('views', PATH.join(PATH.resolve(), 'views/bs'));
                res.status(200).render('hi', { user: user[0] });
                break;
            case 2:
                APP.set('views', PATH.join(PATH.resolve(), 'views/fs'));
                res.status(200).render('hi', { user: user[0] });
                break;
            default:
                break;
        }
    });
}