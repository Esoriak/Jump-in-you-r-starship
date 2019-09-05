import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './GridStarships.css'



class GridStarships extends Component {
  state = {
    Vehicles: [],

    Data: {
      title: '',
      brand: '',
      cost: '',
      passengers: '',
    },

    Panier: {
      name: '',
      cost: '',
    },
  }

  componentDidMount() {
    this.getVehicles()
    // this.getData()
    console.log('data', this.state.Data)
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
l


  // getData() {
  //   this.state.Vehicles.map((info) => {
  //       this.setState({
  //         Data: {
  //           title: info.name,
  //           cost: info.cost_in_credits,
  //           passengers: info.passengers,
  //         }
  //       })
  //   })
  // }

  // handleAdd = (key, price) => {
  //   this.setState({
  //     Panier : {
  //       name :key,
  //       cost : price,
  //     } 
  //   })
  //   console.log('ma commande', this.state.Panier)
  // }



  render() {
    const { Vehicles } = this.state
    return (
      <div className="grid">
        {Vehicles.map(data => {
          return (
            <div className="card_ships" key={data.url} >
              {/* <Link to="/moreinfos"> */}
              <h2>{data.name}</h2>
              <p>{data.model}</p>
              <p>{data.vehicle_class}</p>
              <p>{data.passengers}</p>
              <p>{data.cost_in_credits !== 'unknown' ? data.cost_in_credits : 'Vous ne pouvez pas louer ce véhicule.'}</p>
              {/* <p>{data.cost_in_credits !== 'unknown' ? (data.cost_in_credits  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Republic_credit_symbol.svg/300px-Republic_credit_symbol.svg.png" />) : 'Vous ne pouvez pas louer ce véhicule.'}</p> */}
              {/* </Link> */}
              <div>

                {data.cost_in_credits !== 'unknown' ?
                  <div className="buttons-action">
                    {/* <button className="button-add" onClick={this.handleAdd(data.name, data.cost_in_credits)} > Louer</button> */}
                    <button className="button-add"> Louer</button>
                    <button className="button-delete"> Annuler</button>
                  </div>
                  :
                  null}

              </div>

            </div>

          )
        })}

      </div>
    )
  }
}

export default GridStarships
