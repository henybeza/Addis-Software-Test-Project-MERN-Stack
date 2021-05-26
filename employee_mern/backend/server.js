const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
//mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true});
//const connection = mongoose.connection;
//connection.once('open',() =>{console.log("mogoDB Connection established successfully")});


app.listen(port, () =>{
    console.log(`Serverrrr running on port: ${port}`);
});


//TIME TO USE THE API'S in the routes folder one by one...

//const employeesRouter = require('./routes/employees');

//app.use('/employees', employeesRouter);



