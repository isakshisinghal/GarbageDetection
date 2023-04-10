

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

// const mongoose = require('mongoose')
// const dbConfig = require('./dbconfig')
// const connectionUrl = "mongodb+srv://sakshi:sakshi123@cluster0.ship0kf.mongodb.net/garbage?retryWrites=true&w=majority"

// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false);
//         await mongoose.connect(connectionUrl, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB Connected...');
//     } catch (err) {
//         console.error(err.message);
//         // make the process fail
//         process.exit(1);
//     }
// }

// module.exports = connectDB


