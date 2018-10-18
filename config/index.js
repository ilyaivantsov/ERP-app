/**
 * 
 * @param {Object} app      Приложение 
 * @param {Object} express  Библиотека Express
 * @param {Object} path     Модуль Path
 * @param {Number} port     Порт app
 */
module.exports = function(app,express,path,port){
    app.use('/static', express.static(path.resolve('public')));        // Отдача статики
    app.set('view engine', 'ejs');                                     // Парсер
    app.set('views', path.join(path.resolve(), 'views'));              // Папка с шаблонами
    app.get('/', function (req, res) {
        res.sendFile(path.resolve('public/html/auth.html'));
    });
    app.listen(port)
}