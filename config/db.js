// const mongoose = require('mongoose')
// const dbConfig = require('./dbconfig')
// connectionUrl = "mongodb://localhost:27017/major_project"

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


// const mongoose = require('mongoose')
// const dbConfig = require('./dbconfig')
// connectionUrl = "mongodb://localhost:27017/major_project"

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://garbageDetection:garbageDetection@cluster0.wtk4fvb.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() => {
    // try {
    //     const conn = await mongoose.connect(connectionUrl, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     })
    //     console.log(`MongoDB Connected: ${conn.connection.host}`)
    // }
    // catch (err) {
    //     console.log(err)
    //     process.exit(1)
    // }
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
            const collection = client.db("major_project").collection("devices");
            // perform actions on the collection object
            client.close();
    });
}

module.exports = connectDB