import React from 'react';
import {Switch, Route} from 'react-router-dom'
import CardStarships from './Screen/CardStarships';
import Header from './Components/Header';
import Home from './Screen/Home';
import Panier from './Screen/Panier';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/commande" component={Panier} />
        <Route path="/moreinfos" component={CardStarships} />
      </Switch>
    </div>
  );
}

export default App;
