const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open',() =>{console.log("mogoDB Connection established successfully")});

const employeesRouter = require('./routes/employees');

app.use('/employees', employeesRouter);

app.listen(port, () =>{
    console.log(`Serverrrr running on port: ${port}`);
});

