const mongoose = require('mongoose');
// now crating the schema 

const noteSchema = new mongoose.Schema({
    title :String,
    description :String
})

// now we need to create the model with the help of which we can perform the curd operation 

const noteModel = mongoose.model("notes",noteSchema);

module.exports = noteModel;