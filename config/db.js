

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://sakshi:sakshi123@ac-r51p2dw-shard-00-00.ship0kf.mongodb.net:27017,ac-r51p2dw-shard-00-01.ship0kf.mongodb.net:27017,ac-r51p2dw-shard-00-02.ship0kf.mongodb.net:27017/?ssl=true&replicaSet=atlas-10s78e-shard-0&authSource=admin&retryWrites=true&w=majority";
// const connectDB = async() => {
//     try{
//         MongoClient.connect(uri, function(err, client) {
//             const collection = client.db("garbage").collection;
//             // perform actions on the collection object
//             client.close();
//           });
//     }
//     catch(err)
//     {
//         console.log(err)
//         process.exit(1)
//     }
    
// }

const client = new MongoClient(uri);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let connectDB = conn.db("garbage");

export default connectDB;
// module.exports = connectDB