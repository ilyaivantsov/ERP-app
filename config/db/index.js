const assert = require('assert');
var   mongoClient = require("mongodb").MongoClient;


module.exports = class DB {
    constructor(URL) {
        this.URL = URL;
        this.client = mongoClient(URL);
    }
    /**
     * 
     * @param {String} dbName          Название БД
     * @param {String} collectionName  Название коллекции   
     * @param {Array}  data            Массив документов
     */
    pushData(dbName, collectionName, data) {
        const client = this.client;
        client.connect(function (err) {
            assert.equal(null, err);
            const db = client.db(dbName),
                collection = db.collection(collectionName);

            collection.insertMany(data, function (err, result) {
                assert.equal(null, err);
                console.log(result.ops);
                client.close();
            });
        });
    }
    /**
     * 
     * @param {String} dbName          Название БД
     * @param {String} collectionName  Название коллекции
     * @param {Object} query           Параметры запроса
     * @param {Function} callback      Обработчик при успешном запросе
     */
    getData(dbName, collectionName, query, callback) {
        const client = this.client;
        client.connect(function (err) {
            assert.equal(null, err);
            const db = client.db(dbName),
                collection = db.collection(collectionName);

            collection.find(query).toArray(function (err, result) {
                assert.equal(null, err);
                callback(result);
                client.close();
            });
        });
    }

    createNewCollection(dbName,collectionName,validator,callback){
        const client = this.client;
        client.connect(function (err) {
            assert.equal(null, err);
            const db = client.db(dbName);
            db.createCollection(collectionName, {validator: {$jsonSchema:validator}},function (err, result) {
                console.log("Collection created.");
                callback();
                client.close();
            });
        });
    }
}

