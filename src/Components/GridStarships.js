import React, { Component } from 'react'
import axios from 'axios'
import './GridStarships.css'
import CardStarships from './CardStarships';

class GridStarships extends Component {
  state = {
    Starships: [],

  }

  componentDidMount() {
    axios.get('https://swapi.co/api/starships/')
    .then(result => {
      this.setState({
        Starships: result.data.results
      })
      // handle success
      console.log('here', this.state.Starships);
    })
  }


  render() {
    return (
      <div>
        <h2>hey</h2>
        <CardStarships />
      </div>
    )
  }
}

export default GridStarships
