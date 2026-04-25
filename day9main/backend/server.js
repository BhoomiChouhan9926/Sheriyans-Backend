// in this we will start the server and also connect the server with the database
require('dotenv').config();
const app = require('./src/app');
 

const connectToDb = require('./src/config/database')

connectToDb();
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})