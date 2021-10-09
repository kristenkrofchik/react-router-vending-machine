import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Lokum from './Lokum';
import Cannoli from './Cannoli';
import Paleta from './Paleta';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/soda" exact>
          <Lokum />
        </Route>
        <Route path="/chips" exact>
          <Cannoli />
        </Route>
        <Route path="/sardines" exact>
          <Paleta />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
