import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { updateEmployee,
        deleteEmployee} from '../actions';

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
background-color: red;
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

const Buttonn = styled.button`
background-color: blue;
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


export default class reademployee extends Component {
    render(){
        return (
            <MainContent>
                    
             <Heading>Read Employee</Heading>
 <Button onClick={deleteEmployee}>Delete Employee</Button>

 <h1>Use tables and display all the employee data from the database here....</h1>
<Link to="/create">  <Buttonn onClick={updateEmployee}>Update Employee</Buttonn>
      </Link>              
            </MainContent>
        )

    }
  
}
