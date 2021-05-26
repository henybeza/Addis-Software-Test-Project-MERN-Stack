import React, {Component} from 'react';
import styled from 'styled-components';

const MainContent= styled.div`
width:60%;
margin:auto;
background-color:orange;
border-radius:20px;
height:400px;
text-align:center;
 
`;
const Heading = styled.h1`
color:white;
font-weight:bold;
`;


export default class reademployee extends Component {
    render(){
        return (
            <MainContent>
                    
             <Heading>Read Employee</Heading>
                
                    
            </MainContent>
        )

    }
  
}
