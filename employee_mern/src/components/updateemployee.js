import React, {Component} from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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

const FormWrapper = styled.form`
    margin: 2vw 0 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    onSubmit={this.onSubmit};

`;

const Button = styled.button`
background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color:#9a4ef1;
   border-radius:10px;
   margin-top:10px;

`;

const Label =styled.label`
    font-weight:bold;
    
    color:#9a4ef1;
`;

export default class updateemployee extends Component {
    constructor(props) {
        super(props);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeDateOfBirth=this.onChangeDateOfBirth.bind(this);
        this.onChangeGender=this.onChangeGender.bind(this);
        this.onChangeSalary=this.onChangeSalary.bind(this);

        this.state={
            name:'',
            dateofbirth:new Date(),
            gender:'',
            salary:'',
            employees:[]
        }
    }

    componentDidMount(){
        this.setState({
            employees:['Test Employee'],
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
        console.log('Employee added properly...');
        console.log(employee);
        window.location="/read";
    }

    render(){
        return (
    <MainContent>
                    
             <Heading>Update Employee</Heading>

        <FormWrapper>
         <input type="text" name="name" placeholder="Employee ID"/>

            <Label >Name</Label>
            <input type="text" name="name" placeholder="Name" 
            value={this.state.name} onChange={this.onChangeName}/>

            <Label>Date Of Birth</Label>
            <DatePicker 
            selected={this.state.dateofbirth} 
            onChange={this.onChangeDateOfBirth} 
            id="dob"/>

            <Label >Gender</Label>
            <input type="text" name="gender" placeholder="Gender" 
            value={this.state.gender} onChange={this.onChangeGender}/>


            <Label >Salary</Label>
            <input type="text" name="salary" placeholder="Salary" 
            value={this.state.salary} onChange={this.onChangeSalary}/>



            <Button>UPDATE EMPLOYEE</Button>          

       

        </FormWrapper>   
                    
    </MainContent>
        )

    }
  
}
