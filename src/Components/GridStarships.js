import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './GridStarships.css'


class GridStarships extends Component {
  state = {
    Vehicles: [],
  }

  componentDidMount() {
    this.getVehicles()
  }

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





  render() {
    const { Vehicles } = this.state
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
                <p>{data.cost_in_credits !== 'unknown' ? data.cost_in_credits : 'Vous ne pouvez pas louer ce véhicule.'}</p>
                <div>   
                  <button> Louer</button>
                  <button> Annuler</button>
                </div>
             
              </Link></a>
            </div>

          )
        })}

      </div>
    )
  }
}

export default GridStarships
