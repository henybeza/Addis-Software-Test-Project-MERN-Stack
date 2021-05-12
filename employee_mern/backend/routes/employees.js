//CRUD OPERATIONS
const router =  require('express').router();
const Employees = require('../models/employees.model');

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


//Read from employees record
router.route('/').get((req,res) =>{
    Employees.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
}); 


//Find employees by ID
router.route('/:id').get((req,res) =>{
	Employees.findbyId(req.params.id)
	.then(employee => res.json(employee))
	.catch(err => res.status(400).json('Error:' + err));
});

//Delete from the employees record
router.route('/:id').delete((req,res) =>{
	Employees.findbyIdAndDelete(req.params.id)
	.then(() => res.json('Exercise deleted'))
	.catch(err => res.status(400).json('Error:' + err));
});

//Update employees record
router.route('/update/:id').post((req,res) => {
	Employees.findbyId(req.params.id)
	.then(employee =>{
		employee.name = req.body.name;
		employee.dateofbirth = req.body.dateofbirth;
		employee.gender = req.body.gender;
		employee.salary  = req.body.salary;

		employee.save()
		.then(() => res.json('Employee updated'))
		.catch(err => res.status(400).json('Error: ' + err));
	})
	.catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;



