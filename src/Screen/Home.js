import React, { Component } from 'react'
import GridStarships from '../Components/GridStarships'
import Order from '../Components/Order';

import './Home.css'
class Home extends Component {
  render() {
    return (
      <div>
        <div className="screen-home">
        <GridStarships />
        <Order />
        </div>
      </div>
    )
  }
}

export default Home
