import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Components/Header';

const CardStarships = () => {
  // const { Vehicles } = this.state
  return (
    <div>
      <Header />
      <a> <Link to="/">RETOUR</Link></a>
      {/* <div className="grid">
        {Vehicles.map(data => {
          return (
            <div className="card_ships">
              <h2>{data.name}</h2>
              <p>{data.model}</p>
              <p>{data.vehicle_class}</p>
              <p>{data.passengers}</p>
              <p>{data.cost_in_credits}</p>
            </div>
          )
        })} */}
      </div>
  )
}

export default CardStarships
