import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Commande.css'

class Commande extends Component {
  render() {
    return (
      <div className="side-section">
        <div className="command-section">
          <h2>Ma commande</h2>
          <div className="result-command">
            <p>Un vaisseau</p>
            <p>Tel prix</p>
            <p> + un autre</p>
            <p> Cout total</p>
            <button><Link to='/commande'></Link>Valider ma commande</button>
          </div>
        </div>
      </div>

    )
  }
}

export default Commande
