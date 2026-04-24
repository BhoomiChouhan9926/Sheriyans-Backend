const mongoose = require("mongoose");
// schema is something which tell the type and formate of the data that is needed to be stored in the datatbase


// schema is the kind of formate which tells the database ki hum kis formate mai data ko store krwayenge 
 const noteSchema = new mongoose.Schema({
    title :String,
    description :String
})
// to perform any of the operation on the data we need to create model , model allow us to perform any curd operation on the data
 const noteModel = mongoose.model("notes",noteSchema) ;

 module.exports = noteModel ;
