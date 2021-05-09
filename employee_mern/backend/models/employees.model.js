const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeesSchema = new Schema({
    name:{type:String, required:true},
    dateofbirth:{type:Date, required:true},
    gender:{type:String,required:true},
    salary:{type:Number, required:true}  

},{
    timestamps:true,
});

const Employees= mongoose.model('Employees',employeesSchema);
module.exports = Employees;
