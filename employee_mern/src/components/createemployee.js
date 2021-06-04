import React, {Component} from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

//Importing the CREATE_EMPLOYEE action
import {createEmployee} from '../actions';


//Styling...
const MainContent= styled.div`  
width:60%;
margin:auto;
border-radius:20px;
height:400px;
text-align:center;

 
`;

const Heading = styled.h1`
color:white;
font-weight:bold;
`;

const Button = styled.button`
background-color: #84f14e;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
   border-radius:10px;
   margin-top:10px;

`;

const Form = styled.form`
    width:100%;
    margin: 2vw 0 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`;
const Label =styled.label`
    font-weight:bold;

    color:green;
`;

//...End of styling


export default class createemployee extends Component {
    constructor(props) {
        super(props);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeDateOfBirth=this.onChangeDateOfBirth.bind(this);
        this.onChangeGender=this.onChangeGender.bind(this);
        this.onChangeSalary=this.onChangeSalary.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            name:'',
            dateofbirth:new Date(),
            gender:'',
            salary:'',
                    }
    }

    componentDidMount(){
        this.setState({
             name:this.state.name,
            dateofbirth: this.state.dateofbirth,
            gender:"Male",
            salary:this.state.salary

        })
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        });
    }
    
    onChangeDateOfBirth(date){
        this.setState({
            dateofbirth:date
        });
    }

    
    onChangeGender(e){
        this.setState({
            gender:e.target.value
        });
    }

    
    onChangeSalary(e){
        this.setState({
            salary:e.target.value
        });
    }


    onSubmit(e){

        e.preventDefault();

        const employee = {
            name:this.state.name,
            dateofbirth:this.state.dateofbirth,
            gender:this.state.gender,
            salary:this.state.salary
        }
        /*Using redux and redux-saga*/
        //Now, dispatch an action to the store...
        //use redux saga middleware to make API calls based on the action type...
        //then use reducer/redux to update the state based on the responses from the API...
        //...finally, the view will be re-rendered because the state is updated with a new data...
         
        console.log(employee);

        this.setState({
            name:"",
            dateofbirth:"",
            gender:"",
            salary:""
        })

        console.log("Employee added successfully!")
        //window.location="/read";

    }








    render(){
        return (
    <MainContent>
                    
             <Heading>Create Employee</Heading>

        <Form onSubmit={this.onSubmit}>

            <Label >Name</Label>
                <input type="text" placeholder="Name" 
                    onChange={this.onChangeName} value={this.state.name} />


            <Label>Date Of Birth</Label>
                <DatePicker 
                    selected={this.state.dateofbirth} 
                    onChange={this.onChangeDateOfBirth} 
                                    />
                   

            <Label >Gender</Label>
                <input type="text"  placeholder="Gender" 
                    onChange={this.onChangeGender} value={this.state.gender} />


            <Label >Salary</Label>
                <input type="text" placeholder="Salary" 
                    onChange={this.onChangeSalary} value={this.state.salary} />

        <Button onClick={createEmployee}>Submit</Button>

        </Form>   
                    
    </MainContent>
        );

    }
  
}






