// in this file we will create the server and also config the server
const express = require("express");
const app = express();
const noteModel = require('./model/notes.model')
const cors = require('cors');
const path = require('path')


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

// creating api to create notes
app.post('/api/notes',async (req,res)=>{
   const {title, description} = req.body;
   const note = await noteModel.create({
    title,
    description
     
   })

   res.status(201).json({
    "message" :"Note created successfully",
    note
   })

})

// //  creating the api to fetch all the data
app.get('/api/notes' ,async (req,res)=>{
    const notes =  await noteModel.find();
    res.status(200).json({
        "Message" : "Data Fetched Successfully" ,
        notes
    })


})
// // creating api to update all the notes
app.patch("/api/notes/:id", async (req,res)=>{
    const id = req.params.id;
    const {description} = req.body;
    const updated_note = await noteModel.findByIdAndUpdate(id,{description},{new :true})

    res.status(200).json({
          "Message" : "Note Updated Successfully" ,
          updated_note


    })
})

// // creating api to delete any of the note 
app.delete("/api/notes/:id", async(req,res)=>{
    const id = req.params.id;
    const deleted_note =await noteModel.findByIdAndDelete(id);
    res.status(200).json({
         "Message" : "Note Deleted Successfully" ,
         deleted_note
    })
})
// app.use("/*",(req,res)=>{
// // res.send("this is wild card")  
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// })


// app.get('/:path(*)', (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = app;