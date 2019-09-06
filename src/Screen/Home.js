import React, { Component } from 'react'
import GridStarships from '../Components/GridStarships'

import './Home.css'
import DisplayOrder from '../Components/DisplayOrder';
class Home extends Component {
  render() {
    return (
      <div>
        <div className="screen-home">
        <GridStarships />
        <DisplayOrder />
        </div>
      </div>
    )
  }
}

export default Home
