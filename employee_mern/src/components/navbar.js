import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MainContent= styled.div`
width:60%;
margin:auto;
border-radius:20px;
height:auto;
text-align:center;
 
`;
const Heading = styled.h1`
	
	font-weight:bold;

	`;
const Button = styled.button`

  border: none;
  font-weight:bold;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
   border-radius:10px;
   padding:auto;
   

`;


export default function navbar() {
    return (
        <MainContent>
        <Heading>Addis Software Test Project - 
        MERN Stack for managing Employee Records!!!</Heading>
        <Button> <Link to="/create">CREATE</Link></Button>
         <Button><Link to="/read">READ</Link></Button>
         <Button><Link to="/update/:id">UPDATE</Link></Button>
         <Button> <Link to="/delete/:id">DELETE</Link></Button>       
        </MainContent>
    )
}


