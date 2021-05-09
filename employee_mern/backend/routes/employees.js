//CRUD OPERATIONS

const router =  require('express').router();
let Employee = require('../models/employees.model');


//Create a new employee record
/* 
router.route('/add').post((req,res) => {
    const name = req.body.name;
    const dateofbirth = req.body.dateofbirth;
    const gender = req.body.gender;
    const salary = req.body.salary;

  
});
*/




//Read from employees record
router.route('/').get((req,res) =>{
    Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update employees record




//Delete from the employees record

