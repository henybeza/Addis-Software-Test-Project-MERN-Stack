import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

//Making use of functional components
//for a single employee component
const Employee = props =>
   (
            <tr>
                <td>{props.employee.name}</td>
                <td>{props.employee.dateofbirth.substring(0,10)}</td>
                <td>{props.employee.gender}</td>
                <td>{props.employee.salary}</td>

                <td>
                  <Link to={"/update/"+ props.employee._id}>Update</Link> | 
               <Button onClick={() => {props.deleteEmployee(props.employee._id)}}>Delete</Button>
                </td>

            </tr>
          )



export default class reademployees extends Component {

  constructor(props){
  super(props);

  this.deleteEmployee = this.deleteEmployee.bind(this);

  this.state = {employees: []};

}

componentDidMount(){
  axios.get('http://localhost:5000/employees/')
  .then(response =>{
    this.setState({employees:response.data})
  })
  .catch((error) =>{console.log(error);
  })
}

deleteEmployee(id){
  axios.delete('http://localhost:5000/employees/+id')
  .then(res => console.log(res.data));

  this.setState({
    employees:this.state.employees.filter(el => el._id !== id)
  })
}


employeeList(){
  return this.state.employees.map(currentemployee => {
    return <Employee employee={currentemployee} 
                    deleteEmployee={this.deleteEmployee} 
                    key={currentemployee._id}/>;
  })
}

    render(){
        return (
            <MainContent>
              <div>
                     <Heading>List of Employees</Heading>

                      <input type="search" id="search" name="search"/>
                      <input type="button" value="Search"/>
                      <br/><br/>

                    <Table>

                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Date Of Birth</th>
                          <th>Gender</th>
                          <th>Salary</th>
                          <th>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {this.employeeList()}
                      </tbody>

                    </Table>
              </div>  
                <MyHeading>Addis Software Test Project</MyHeading>
    
            </MainContent>
        )

    }
  
}



//Making use of styled components
const MainContent= styled.div`
width:100%;
margin:auto;
border-radius:20px;
height:auto;
text-align:center;
background:#8FF60C;
text-align:center;
 
`;
const Heading = styled.h1`
color:black;
font-weight:bold;
font-size:50px;
 font-family:Comic Sans MS;

`;

const Table = styled.table`
text-align:;
background:white;
width:80%;
padding:20px;
margin:auto;
border-radius:20px
`;

const Button = styled.button`

  background:red;
  width:auto;
`;


const MyHeading = styled.h1`
  color:white;
  font-weight:bold;
  font-family:Comic Sans MS;

`;

//End of styled components