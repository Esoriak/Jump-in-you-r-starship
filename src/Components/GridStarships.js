import React, { Component } from 'react'
import axios from 'axios'
import DisplayCard from './DisplayCard'
import './GridStarships.css'
import DisplayOrder from './DisplayOrder';


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

 onAdd = async(name, price) => {
  const orderObj = {name: name,
  price: price}
  
      await this.setState(state => {
        const Order = state.Order.push(orderObj);
          console.log('ma commande:', this.state.Order)
      })
   }

  render() {
    const { Vehicles, Order } = this.state
    return (
      <>
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

      <div className="order-section">
        {Order.map(data => { return (
          data.map(info => { return (
            <DisplayOrder
              dataName={info.name}
              dataCost={info.cost}
            />

          )})
           )})}

      </div>
      </>
  )
 }
}

export default GridStarships
