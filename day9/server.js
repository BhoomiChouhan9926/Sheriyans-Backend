// in this file we will start the server and also connect our server with the database
 
require('dotenv').config();

const app = require('./src/app');
const connectToDb = require('./src/config/database');

connectToDb();


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
} )