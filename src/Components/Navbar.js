import React from 'react'

import {Link} from "react-router-dom";

import "./Navbar.css"

const Navbar = () => {
  return (
    <div className ="navbar">

        <nav>
            <Link className ="brand" to ="/"> <h1>Cooking Ninja</h1></Link>
            <Link to="/create">Create Recipe</Link>
        </nav>

    </div>
  )
}

export default Navbar