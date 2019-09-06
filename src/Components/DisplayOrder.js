import React from 'react'
import {Link} from 'react-router-dom'
import './Order.css'

const DisplayOrder = ({dataName, dataCost}) => {
  return (
    <div className="side-section">
        <div className="command-section">
        <h2>Ma commande</h2>
        <div className="result-command">
         <p>{dataName}</p>
           <p>{dataCost}</p>
           <p> Coût total</p>
           <button><Link to='/commande'></Link>Valider ma commande</button>
          </div>
        </div>


  </div>
  )
}

export default DisplayOrder