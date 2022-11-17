//react imports
import React from 'react'
// react router dom imports
import {useParams} from "react-router-dom";
//styling imports
import "./Recipe.css"

//components imports
import { useFetch } from '../../Components/Hooks/UseFetch'

const Recipe = () => {

  const {id} = useParams();
  const {data:recipe, isPending, error} = useFetch("http://localhost:3000/recipes/" + id)


  return (
    <div className ="recipe">
      {isPending && <p className ="loading">Loading...</p>}
      {error && <p className="error">An Error has occured</p>}
      {recipe && (
        <>
        <h2 className ="page-title">{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to cook.</p>
        <ul>
          {recipe.ingredients.map(ingrident =>(
            <li key={ingrident}>{ingrident}</li>
          ))}
          <p className="method">{recipe.method}</p>
        </ul>
        </>
      )}
    </div>
  )
}

export default Recipe