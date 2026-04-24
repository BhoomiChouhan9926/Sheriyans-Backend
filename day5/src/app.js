// here we will create the server and also config the server 
const express = require ('express');
const app = express();
app.use(express.json());
 const notes = [];
// this is the api for creating the notes
app.post('/notes',(req,res)=>{
console.log(req.body);
notes.push(req.body);
res.status(201).json({
    message :"Notes created successfully"
})
})
// this is the api to retrive the notes from the server
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message :"Notes retrived successfully",
        data : notes
    })
})
// this is the api to delete the notes
app.delete('/notes/:idx',(req,res)=>{
    const idx = req.params.idx;
    delete notes[idx];
    res.status(204).json({
        message:"Note deleted successfully"
    })
})
// this is the api to updete the notes 
app.patch('/notes/:idx',(req,res)=>{
    const idx = req.params.idx;
    notes[idx].des = req.body.des;
    res.status(200).json({
        message:"Note updated successfully"
    })
})
module.exports = app;