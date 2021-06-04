import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
//import {connect} from 'react-redux';

import Navbar from "./components/navbar";


import CreateEmployee from "./components/createemployee";
import ReadEmployee from "./components/reademployee";



function App() {
  return (
    <Router>
          <Navbar />
          <br />
        
          <Route path="/create" component={CreateEmployee }/>
          <Route path="/read"  component={ReadEmployee} />
       
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