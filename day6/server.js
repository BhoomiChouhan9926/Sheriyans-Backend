require("dotenv").config();
const app = require('./src/app');
const mongoose = require('mongoose');
const connectDb = require('./src/config/database');
// now we will start the  server
// ansd also this file is responsible for connectiong the databasse to the server

// the function to connect the database with the server is being made in the config folder in the database file because the code to connect the express server to the database should not be written in the server.js file


connectDb();

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
})
