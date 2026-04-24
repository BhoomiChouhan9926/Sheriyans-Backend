const express = require('express');
const app = express();

app.use(express.json()); 
const posts = [];
app.post("/notes",(req,res)=>{
    console.log(req.body);
    posts.push(req.body);
    res.send("Note created");
     console.log(posts);

})

app.get('/notes',(req,res)=>{
    res.send(posts);
})
app.listen(3000 ,()=>{
    console.log("Server is running on port 3000");
})