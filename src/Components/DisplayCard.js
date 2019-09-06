import React from 'react'
import {Link} from 'react-router-dom'

const DisplayCard = ({ title, model, vehicle_class, passengers, cost, handleAdd}) => {



        return (
          <div className="card_ships" >
            {/* <Link to="/moreinfos"> */}
              <h2>{title}</h2>
              <p>{model}</p>
              <p>{vehicle_class}</p>
              <p>{passengers}</p>
              <p>{cost !== 'unknown' ? cost : 'Vous ne pouvez pas louer ce véhicule.'}</p>
            {/* </Link> */}
            <div>

              { cost !== 'unknown' ?
                <div className="buttons-action">
                  
                  <button className="button-add" onClick={handleAdd}> Louer</button>
                  <button className="button-delete"> Annuler</button>
                </div>
                :
                null}

            </div>

          </div>

        )
      }


export default DisplayCard