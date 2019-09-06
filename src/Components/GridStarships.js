import React, { Component } from 'react'
import axios from 'axios'
import DisplayCard from './DisplayCard'
import './GridStarships.css'


class GridStarships extends Component {
  state = {
    Vehicles: [],
    Order : [],
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

  onAdd = async(name) => {
    await this.setState(state => {
      const Order = state.Order.push(name);
        console.log(this.state.Order)
    })
 }

 
  render() {
    const { Vehicles } = this.state
    return (
      <div className="grid">
        {Vehicles.map(data => { return (
          <DisplayCard 
            title={data.name}
            model={data.model}
            vehicle_class={data.vehicle_class}
            passengers={data.passengers}
            cost={data.cost_in_credits}
            handleAdd={this.onAdd}
            />
        )})})
      </div>
  )
 }
}

export default GridStarships
