

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://garbageDetection:garbageDetection@ac-wft4fad-shard-00-00.wtk4fvb.mongodb.net:27017,ac-wft4fad-shard-00-01.wtk4fvb.mongodb.net:27017,ac-wft4fad-shard-00-02.wtk4fvb.mongodb.net:27017/?ssl=true&replicaSet=atlas-10r4ta-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectDB = async() => {

    MongoClient.connect(uri, function(err, client) {
        const collection = client.db("major_project").collection("devices");
        // perform actions on the collection object
        client.close();
      });
}

module.exports = connectDB