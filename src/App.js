import './App.css';
//import Navbar from './components/Navbar';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainSection from './components/MainSection';
import "./App.css";


class App extends Component {

  render() {
    return (
      <div className="maindesign" >
        <Router>
          {/* <Navbar/> */}
          <MainSection/>
        </Router>
      </div>
      


      
    )
  }





}

export default App;
