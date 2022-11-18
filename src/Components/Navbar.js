//react router dom imports
import {Link} from "react-router-dom";
//React imports
import "./Navbar.css"
//Components import
import SearchBar from "./SearchBar";
import {useTheme }from "./UseThem";

const Navbar = () => {
 
  const {color} = useTheme();

  return (
    <div className ="navbar" style ={{background:color}}>

        <nav>
            <Link className ="brand" to ="/"> <h1>Cooking Ninja</h1></Link>
            <SearchBar/>
            <Link to="/create">Create Recipe</Link>
        </nav>

    </div>
  )
}

export default Navbar