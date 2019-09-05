import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Screen/Home';
import Panier from './Screen/Panier';
import CardStarships from './Screen/CardStarships';
import Header from './Components/Header';


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
