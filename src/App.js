import React, {Component} from 'react';
import routes from './routes'
import './App.css';
import Nav from './components/Nav/Nav'
import {HashRouter} from 'react-router-dom'


function App() {

  
  return (
    <HashRouter>

    <div className="App">
     <Nav/>
      {routes}
    </div>

    </HashRouter>
  );
}

export default App;
