import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MainContent= styled.div`
width:60%;
margin:auto;
background-color:red;
border-radius:20px;
height:auto;
text-align:center;
 
`;

export default function navbar() {
    return (
        <MainContent>
        <button> <Link to="/create">CREATE</Link></button>
         <button><Link to="/read">READ</Link></button>
         <button><Link to="/update/:id">UPDATE</Link></button>
         <button> <Link to="/delete/:id">DELETE</Link></button>       
        </MainContent>
    )
}


