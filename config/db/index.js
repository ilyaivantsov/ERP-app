module.exports = class DB {
    constructor(mongoClient, URL) {
        this.URL = URL;
        this.mongoClient = mongoClient;
    }
    setUsers(users) {
        this.mongoClient.connect(this.URL, function (err, client) {
            const db = client.db("usersdb"),
                collection = db.collection("users");

            collection.insertMany(users, function (err, result) {
                if (err) {
                    return console.log(err);
                }
                console.log(result.ops);
                client.close();
            });
        });
    }
    cursor(query,callback) {
        this.mongoClient.connect(this.URL, function (err, client) {
            if (err) throw err;
            const db = client.db("usersdb"),
                  collection = db.collection("users");
            collection.find(query).toArray(function(err, result) {
                if (err) throw err;
                callback(result);
                //console.log(result);
                client.close();
              });
        });
    }
}

