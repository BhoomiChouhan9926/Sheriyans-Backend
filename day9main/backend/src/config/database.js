// in this we will write the code to connect the server with the database
const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected successfully with the database")
    })
}

module.exports = connectToDb;