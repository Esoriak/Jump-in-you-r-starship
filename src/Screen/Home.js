import React, { Component } from 'react'
import Header from '../Components/Header';
import GridStarships from '../Components/GridStarships'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <GridStarships />
      </div>
    )
  }
}

export default Home
