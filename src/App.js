import React, { useState } from 'react';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

//components ----------------------------
import GramItem from './components/GramItem'
import OpenGram from './components/OpenGram'
import BirthdayGram from './components/styles/birthday/BirthdayGram'
import Welcome from './components/Welcome'


function App() {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path ='/' component={Welcome}></Route>
          <Route path ='/:id' component={GramItem}></Route>
        </Switch>
      </div>
    </Router>    
  );
}

export default App
