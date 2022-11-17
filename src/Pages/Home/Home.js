import React from 'react'
import "./Home.css"



import { useFetch } from '../../Components/Hooks/UseFetch'

//Components
import RecipeList from '../../Components/RecipeList';


const Home = () => {
    const {data,isPending,error} = useFetch("http://localhost:3000/recipes");

  return (
    <div className ="home">
            {error && <p className ="error">There is an error</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes ={data} />}
    </div>
  )
}

export default Home