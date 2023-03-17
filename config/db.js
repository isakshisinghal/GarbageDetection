

// var MongoClient = require('mongodb').MongoClient;
// var uri = "mongodb://sakshi:sakshi123@ac-r51p2dw-shard-00-00.ship0kf.mongodb.net:27017,ac-r51p2dw-shard-00-01.ship0kf.mongodb.net:27017,ac-r51p2dw-shard-00-02.ship0kf.mongodb.net:27017/?ssl=true&replicaSet=atlas-10s78e-shard-0&authSource=admin&retryWrites=true&w=majority";
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

// module.exports = connectDB


const mongoose = require('mongoose');
const uri = "mongodb+srv://sakshi:sakshi123@cluster0.ship0kf.mongodb.net/garbage?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const connectDB = async() => {
    
        mongoose.connect(uri)
          .then((conn)=>{
              console.log(conn);
              console.log("Database connection successful")
          }).catch((error)=>{
            console.log(error)
          });
    
    
}
module.exports = connectDB


