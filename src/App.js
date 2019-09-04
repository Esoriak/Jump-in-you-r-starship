import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Screen/Home';
import Panier from './Screen/Panier';
import CardStarships from './Screen/CardStarships';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/commande" component={Panier} />
        <Route path="/moreinfos" component={CardStarships} />
      </Switch>
    </div>
  );
}

export default App;
