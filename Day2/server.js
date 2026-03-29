const express = require('express');
const app = express();

app.get('/' , (req,res)=>{
    res.send("Hello Guys how are you")
})

app.get('/about', (req,res)=>{
     res.send("This is the About page ");
})
app.listen(3000);