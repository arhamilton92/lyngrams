import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

//components ----------------------------
import GramItem from './components/GramItem'
import OpenGram from './components/OpenGram'


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route exact path='/' component={ GramItem }></Route>
            <Route exact path='/open' component={ OpenGram }></Route>
      </BrowserRouter>
    </div>
  );
}

export default App
