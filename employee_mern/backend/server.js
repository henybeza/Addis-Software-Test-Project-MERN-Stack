//Requiring all the dependencies...
const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
require('dotenv').config();

//Setting the port...
const port = process.env.PORT || 5000;

//Creating the web application(server) in express and using middlewares
const app = express();
app.use(cors());
app.use(express.json());

//Making sure that my app (the web server) is 
//listening to requests and is ready to g ive response...
app.listen(port, () =>{
    console.log(`Serverrrr running on port: ${port}`);
});


//Connecting my web server to mongodb atlas database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open',() =>{console.log("mogoDB Connection established successfully")})




//Time to use API's

