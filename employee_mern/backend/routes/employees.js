//CRUD OPERATIONS

const router =  require('express').router();
let Employees = require('../models/employees.model');

//Read from employees record
router.route('/').get((req,res) =>{
    Employees.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
}); 


//Creating a new employee record
router.route('/add').post((req,res) => {
    const name = req.body.name;
    const dateofbirth = req.body.dateofbirth;
    const gender = req.body.gender;
    const salary = req.body.salary;

    const newEmployee = new Employee({
    	name,
    	dateofbirth,
    	gender,
    	salary,
    }); 

    newEmployee.save()
    .then(()=>res.json('Employee added!'))
    .catch(err => res.status(400).json('Error: ' + err));

  
});


//Update employees record




//Delete from the employees record

