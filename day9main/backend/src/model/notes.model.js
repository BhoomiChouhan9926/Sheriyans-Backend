const mongoose = require('mongoose')

// creating Schema
const noteSchema = new mongoose.Schema({
    title :String,
    description :String
})

// to perform curd operation we need to make the model
const noteModel = mongoose.model("notes",noteSchema);

module.exports = noteModel;
