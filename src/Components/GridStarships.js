import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './GridStarships.css'
import CardStarships from '../Screen/CardStarships';

class GridStarships extends Component {
  state = {
    Vehicles: [],
    Cost: [],
    InfosLoc: '',

  }

  componentDidMount() {
    this.getVehicles()
    this.verifyLocation()
  }
  // axios.get('https://swapi.co/api/vehicles/')
  // .then(result => {
  //   this.setState({
  //     Vehicles: result.data.results,
  //   })
  //   // handle success
  //   console.log('here', this.state.Cost);
  // })
  // .then(this.state.Vehicles.map(cost => {
  //   this.setState({
  //     Cost:cost.cost_in_credits


  getVehicles() {
    axios.get('https://swapi.co/api/vehicles/')
      .then(result => {
        this.setState({
          Vehicles: result.data.results,
        })
        // handle success
        console.log('here', this.state.Vehicles);
      })
  }


  verifyLocation() {
    for (let i = 0; i < this.state.Vehicles.length; i++) {
      this.setState({
        Cost: this.state.Vehicles[i].cost_in_credits
      })
      console.log(this.state.Cost)
      for (let j = 0; j < this.state.Cost.length; j++) {
        if (this.state.Cost[j] === 'unknown') {
          this.setState({ InfosLoc: 'Vous ne pouvez pas louer ce véhicule' })
        }
      }
    }

  }


  render() {
    const { Vehicles, InfosLoc } = this.state
    return (
      <div className="grid">
        {Vehicles.map(data => {
          return (
            <div className="card_ships">
              <a><Link to="/moreinfos">
                <h2>{data.name}</h2>
                <p>{data.model}</p>
                <p>{data.vehicle_class}</p>
                <p>{data.passengers}</p>
                <p>{data.cost_in_credits}</p>
                <div>   
                  <button> Louer</button>
                  <button> Annuler</button>
                </div>
             
              </Link></a>
            </div>

          )
        })}
        <p>{InfosLoc}</p>

      </div>
    )
  }
}

export default GridStarships
