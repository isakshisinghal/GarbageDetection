

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
// connectionUrl = "mongodb+srv://sakshi:sakshi123@cluster0.ship0kf.mongodb.net/garbage"

// const connectDB = async() => {
//     try {
//         const conn = await mongoose.connect(connectionUrl, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//         console.log(`MongoDB Connected: ${conn.connection.host}`)
//     }
//     catch (err) {
//         console.log(err)
//         process.exit(1)
//     }
// }

// module.exports = connectDB


