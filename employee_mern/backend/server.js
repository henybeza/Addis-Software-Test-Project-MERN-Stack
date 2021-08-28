//importing all the required dependencies
const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 5000;

//Creating the app from express and using middlewares
const app = express();
app.use(cors());
app.use(express.json());

//Listening on a port
app.listen(port, () =>{
    console.log(`Serverrrr running on port: ${port}`);
});


//Connecting to mongodb atlas databse
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open',() =>{console.log("mogoDB Connection established successfully")});


//TIME TO USE THE API'S in the routes folder one by one...
const employeesRouter = require('./routes/employees');
app.use('/employees', employeesRouter);





