import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {connect} from 'react-redux';

import Navbar from "./components/navbar";
import CreateEmployee from "./components/createemployee";//CREATE
import ReadEmployees from "./components/reademployees";//READ
import UpdateEmployee from "./components/updateemployee";//UPDATE

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/create" component={CreateEmployee} />
      <Route path="/" exact component={ReadEmployees} />
      <Route path="/update/"   component={UpdateEmployee} />
    </Router>
  );
}

export default App;
