import React, { Component } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
//import {connect} from 'react-redux';

//Importing the CREATE_EMPLOYEE action
//import {createEmployee} from '../actions';


class createemployee extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      dateofbirth: new Date(),
      gender: "",
      salary: "",
     // employees: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/employees/')
    .then(response => {
      if(response.data.length > 0){
   
        console.log(response.data);

      }
           })
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDateOfBirth(date) {
    this.setState({
      dateofbirth: date,
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }

  onChangeSalary(e) {
    this.setState({
      salary: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = {
      name: this.state.name,
      dateofbirth: this.state.dateofbirth,
      gender: this.state.gender,
      salary: this.state.salary,
    };
        console.log(employee);
    axios
      .post("http://localhost:5000/employees/add", employee)
      .then((res) => console.log(res.data));
        alert('Employee Added!'); 
      window.location = "/";
     

  }


  render() {
    return (
      <MainContent>
        <Heading>Create New Employee</Heading>

          <Form onSubmit={this.onSubmit}>
            <Label>Name</Label>
            <input
                type="text" required
                placeholder="Full Name"
                onChange={this.onChangeName}
                value={this.state.name}
              />



            <Label>Date Of Birth</Label>
              <DatePicker
                selected={this.state.dateofbirth}
                onChange={this.onChangeDateOfBirth}
              />
          
            <Label>Gender</Label>
              <input
                type="text" required
                placeholder="Gender"
                onChange={this.onChangeGender}
                value={this.state.gender}
              />
          
            <Label>Salary</Label>
              <input
                type="text" required
                placeholder="Salary"
                onChange={this.onChangeSalary}
                value={this.state.salary}
              />
          
            <Button>Submit</Button>       
          </Form>
          <MyHeading>Addis Software Test Project<br/>
          Developed by Henok Bezawork </MyHeading>
      </MainContent>
    );
  }
}

export default createemployee;



//Styling...
const MainContent = styled.div`
width:50%;
margin:auto;
border-radius:100px;
height:500px;
text-align:center;
background:#3392FF;
text-align:center;

`;

const Heading = styled.h1`
  color: white;
  font-weight: bold;
  font-size:50px;
   font-family:Comic Sans MS;

`;

const MyHeading = styled.h1`
  color:white;
  font-weight:bold;
  font-family:Comic Sans MS;

`;

const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 10px;
`;

const Form = styled.form`
  width: 100%;
  margin: 2vw 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  font-weight: bold;

  color: green;
`;

//...End of styling
