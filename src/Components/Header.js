import React, { Component } from 'react'
import {Link} from 'react-router-dom'


import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to='/' className="link-header">Accueil</Link>
        <h1> Jump in Starships !</h1>
        <Link to='/commande' className="link-header">Voir ma commande</Link>
      </div>
    )
  }
}

export default Header
