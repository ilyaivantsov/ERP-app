var confDB = require('./config/db'),
    confAPP = require('./config/app'), // init app
    ERP = new confAPP(3000),
    URL = "mongodb://192.168.99.100:27017/",
    db  = new confDB(URL),
    api = require('./controllers/api')(ERP.app, db);

/*var user1 = {
    name:'user1',
    password: 'user1',
    id:1
},
user2 = {
    name:'user2',
    password: 'user2',
    id:2
};*/
var validator = require('./db/validators/user-val.json');
console.log(validator.required);
//db.pushData('usersdb',' users',[{name:'Ilya Ivantsov',password:'2018',id:666}]);
/*db.getData('usersdb',' users',{},function(res){
    console.log(res);
})*/
