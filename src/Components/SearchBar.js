//React imports
import {useState} from 'react';

//styles
import "./SearchBar.css";

//React-router-dom imports
import {useHistory} from "react-router-dom";

const SearchBar = () => {
    const [term, setTerm] = useState("");
    const history = useHistory()


    const handleSubmit = (e) =>{
        e.preventDefault();

        history.push(`/search?q=${term}`)

    }
  return (
    <div className="searchbar">
        <form onSubmit={handleSubmit}>
                <label htmlFor='search'>

                    <input
                    type="text"
                    id="search"
                    onChange={(e)=> setTerm(e.target.value)}
                    required
                    />

                </label>
        </form>

    </div>
  )
}

export default SearchBar