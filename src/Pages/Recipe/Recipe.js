//react imports
import {useEffect, useState} from 'react'
// react router dom imports
import {useParams} from "react-router-dom";
//styling imports
import "./Recipe.css"

//Firestore imports here
import { projectFirestore } from '../../firebase/config';
// function improts
import { useTheme } from '../../Components/UseThem';

const Recipe = () => {
  const [recipe,setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error,setError] = useState(null);
  const {mode} = useTheme();
  const {id} = useParams();

  useEffect(()=>{
    const unsub = setIsPending(true);
    projectFirestore.collection("recipes").doc(id)
    .onSnapshot((doc)=>{
      if(doc.exists){
        setIsPending(false);
        setRecipe(doc.data());
      }else{
        setIsPending(false);
        setError("Could not find that recipe")
      }
    })

    return ()=> unsub();

  },[id]);

  const handleClick = ()=>{
    projectFirestore.collection("recipes").doc(id).update({
      title: "Testing update difference",
    });
  }



  return (
    <div className ={`recipe ${mode}`}>
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
        </ul>
        <p className="method">{recipe.method}</p>
        <button
        onClick ={handleClick}
        className=""
        >Update me
        </button>
        </>
      )}
    </div>
  )
}

export default Recipe
