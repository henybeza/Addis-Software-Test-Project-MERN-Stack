import React, {Component} from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

//Styling...
const MainContent= styled.div`  
width:60%;
margin:auto;
border-radius:20px;
height:400px;
text-align:center;
border:5px solid black;
 
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
            employees:[]
        }
    }

    componentDidMount(){
        this.setState({
            employees:['Test Employees'],
            name:'Henok Bezawork Sahile',
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

        console.log(employee);

        this.setState({
            name:"",
            dateofbirth:"",
            gender:"",
            salary:""
        })
        
       


        //window.location="/";
    }

    render(){
        return (
    <MainContent>
                    
             <Heading>Create Employee</Heading>

        <Form onSubmit={this.onSubmit}>

            <Label >Name</Label>
                <input type="text" name="name" placeholder="Name" 
                    value={this.state.name} onChange={this.onChangeName}/>



            <Label>DateOfBirth</Label>
                <DatePicker 
                    selected={this.state.dateofbirth} 
                    onChange={this.onChangeDateOfBirth} 
                    />
                   


            <Label >Gender</Label>
                <input type="text" name="gender" placeholder="Gender" 
                    value={this.state.gender} onChange={this.onChangeGender}/>



            <Label >Salary</Label>
                <input type="text" name="salary" placeholder="Salary" 
                    value={this.state.salary} onChange={this.onChangeSalary}/>

            <Button >CREATE</Button>               


        </Form>   
                    
    </MainContent>
        )

    }
  
}
