import React from 'react';

import Home from './Home';
import NavBar from './NavBar';
import Lokum from './Lokum';
import Cannoli from './Cannoli';
import Paleta from './Paleta';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path='/lokum'>
          <Lokum />
        </Route>
        <Route exact path='/cannoli'>
          <Cannoli />
        </Route>
        <Route exact path='/paleta'>
          <Paleta />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
