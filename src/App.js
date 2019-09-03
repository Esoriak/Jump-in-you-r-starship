import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Screen/Home';
import Panier from './Screen/Panier';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test technique for OuiCar
        </p>
        <a
          className="App-link"
          href="https://swapi.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Api Starwars 
        </a>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/commande" component={Panier} />
      </Switch>
    </div>
  );
}

export default App;
