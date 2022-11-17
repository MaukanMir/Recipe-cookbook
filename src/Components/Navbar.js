import React from 'react'

import {Link} from "react-router-dom";

import "./Navbar.css"
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className ="navbar">

        <nav>
            <Link className ="brand" to ="/"> <h1>Cooking Ninja</h1></Link>
            <SearchBar/>
            <Link to="/create">Create Recipe</Link>
        </nav>

    </div>
  )
}

export default Navbar