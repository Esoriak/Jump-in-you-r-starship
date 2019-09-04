import React, { Component } from 'react'
import Header from '../Components/Header';
import GridStarships from '../Components/GridStarships'
import Commande from '../Components/Commande';

import "../App.css"

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="screen-home">
        <GridStarships />
        <Commande />
        </div>
      </div>
    )
  }
}

export default Home
