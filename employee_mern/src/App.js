import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
//import {connect} from 'react-redux';

import Navbar from "./components/navbar";

import Home from './components/home';
import CreateEmployee from "./components/createemployee";
import ReadEmployee from "./components/reademployee";
import UpdateEmployee from "./components/updateemployee";
import DeleteEmployee from "./components/deleteemployee";


function App() {
  return (
    <Router>
          <Navbar />
          <br />
          <Route path="/" exact component={Home}/>
          <Route path="/create" component={CreateEmployee } />
          <Route path="/read"  component={ReadEmployee} />
          <Route path="/update/:id" component={UpdateEmployee} /> 
          <Route path="/delete/:id" component={DeleteEmployee} />
     </Router>
  );
}

export default App
/*

const mapStateToProps = state =>{
    return{
        //....
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onCreateEmployee:()=>dispatch({type:"CREATE_EMPLOYEE",                          value:""});
        //onReadEmployee:()=>dispatch({type:"READ_EMPLOYEE", value:""});
        //onUpdateEmployee:()=>dispatch({type:"UPDATE_EMPLOYEE", value:""});
        //onDelteEmployee:()=>dispatch({type:"DELETE_EMPLOYEE", value:""});
    
    };
}

export default connect(mapStateToProps,
                      mapDispatchToProps
                      )(App);
*/