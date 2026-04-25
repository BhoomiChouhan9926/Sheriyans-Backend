const mongoose = require('mongoose');
function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connnected successfully");
    })
}

module.exports = connectToDb;