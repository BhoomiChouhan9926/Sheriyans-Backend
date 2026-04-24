// in tgis file we will create a server and also configure the server
const express = require('express');
const app = express();
const noteModel = require('./models/notes.model');
app.use(express.json());

// creating api Post /notes 
// req.body = {title, description}
app.post('/notes', async(req,res)=>{
    const {title , description} = req.body;
    const note = await noteModel.create({
        title , description
    })

    res.status(201).json({
        "message"  : "Note created successfully",
        note
    })


})

// c reating the api which sjows the notes data means jo sare notes k data ko show kare 
//  Get /notes 
app.get("/notes" , async (req,res)=>{
  const note = await  noteModel.find();
  res.status(200).json({
      "message"  : "Data fetched successfully",
      note 
  })
})

module.exports = app;