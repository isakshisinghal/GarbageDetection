

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://sakshi:sakshi123@ac-kplccvc-shard-00-00.llwhadc.mongodb.net:27017,ac-kplccvc-shard-00-01.llwhadc.mongodb.net:27017,ac-kplccvc-shard-00-02.llwhadc.mongodb.net:27017/?ssl=true&replicaSet=atlas-9l8hv3-shard-0&authSource=admin&retryWrites=true&w=majority";var uri = "mongodb://garbageDetection:garbageDetection@ac-wft4fad-shard-00-00.wtk4fvb.mongodb.net:27017,ac-wft4fad-shard-00-01.wtk4fvb.mongodb.net:27017,ac-wft4fad-shard-00-02.wtk4fvb.mongodb.net:27017/?ssl=true&replicaSet=atlas-10r4ta-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectDB = async() => {
    try{
        MongoClient.connect(uri, function(err, client) {
            const collection = client.db("major_project").collection("signUp");
            // perform actions on the collection object
            client.close();
          });
    }
    catch(err)
    {
        console.log(err)
        process.exit(1)
    }
    
}

module.exports = connectDB