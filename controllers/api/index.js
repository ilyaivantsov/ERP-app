let user = {
    name: 'Ilya Ivantsov' 
};

module.exports = function(app){
    app.get('/api/author', getAuthor);
    app.get('/api/json', getJson);
    app.get('/api/auth',auth)
}

function getAuthor(req,res) {
    res.status(200).render('author', {user: user});
}

function getJson(req,res) {
    res.status(200).json(user);
}

function auth(req,res) {
   console.log(req.query);
   var user = req.query;
   res.status(200).render('hi', {user: user});
}