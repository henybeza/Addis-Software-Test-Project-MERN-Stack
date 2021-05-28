import React, {Component} from 'react';
import styled from 'styled-components';
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
  background-color:red;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:10px;
  margin-top:10px;

`;

export default class deleteemployee extends Component {
    render(){
        return (
           <MainContent>
                    
             <Heading>Delete Employee</Heading>

             <FormWrapper>
             <input type="text" name="name" placeholder="Employee ID"/>

             <Button>DELETE</Button>
         </FormWrapper>  
             
                
                    
            </MainContent>
        )

    }
  
}
