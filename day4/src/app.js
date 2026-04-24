// int this file we will create the server and also we will configure the server in this file
const express = require('express');
const app = express();
const notes = [];
app.use(express.json());


// this is the api to create the notes or resources
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.send("Note created");
     console.log(notes);
})

// tghis is the api to get the notes data from the server
app.get('/notes',(req,res)=>{
    res.send(notes);
})


// this is the api to delete any of the specific note from the notes array 

app.delete('/notes/:idx',(req,res)=>{
    const idx = req.params.idx;
    delete notes[idx];
    res.send("Note deleted");
})

// tis is the api to update the part of the resourse in tghis we will use the patch method
app.patch('/notes/:idx',(req,res)=>{
    const idx = req.params.idx;
    notes[idx].Description = req.body.Description;
    console.log( notes[idx].Description);
    res.send("Note updated");
})
module.exports = app;

