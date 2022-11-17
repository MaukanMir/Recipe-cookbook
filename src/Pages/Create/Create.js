//React imports here
import React, {useState,useRef, useEffect} from 'react'
//Styles import here
import "./Create.css"
// useFetch import here
import { useFetch } from '../../Components/Hooks/UseFetch';

// react-router-dom imports here
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [method,setMethod] = useState("");
    const [cookingTime, setCookingTime] = useState("")
    const [newIngredients, setNewIngredients] = useState("")
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null);
    const history = useHistory();

    const {postData, data} = useFetch("http://localhost:3000/recipes","POST");

    const handleSubmit = (e) =>{
        e.preventDefault();
        postData({title,ingredients,method,cookingTime:cookingTime +" minutes "});
        
    }

    const handleAdd =(e)=>{
        e.preventDefault();
        const ing = newIngredients.trim();
        
        if(ing && !ingredients.includes(ing)){
            setIngredients(prevIngredients=> [...prevIngredients,ing])
        }
        setNewIngredients("");
        ingredientInput.current.focus();

    }


    useEffect(()=>{
        if(data){
            history.push("/");
        }
    },[data,history])

  return (
    <div className ="create">
        <h2 className ="page-title">Add a new recipe.</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Recipe Title:</span>
                <input
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
                required
                />
            </label>

            <label >
            <span>Recipe ingredients:</span>
            <div className ="ingredients">
                <input
                type="text"
                onChange={(e)=>setNewIngredients(e.target.value)}
                value={newIngredients}
                ref={ingredientInput }
                />
                <button 
                className="btn"
                onClick={handleAdd}
                >Add
                </button>
            </div>
            </label>
            <p>Current ingredients:{ingredients.map(item=> <em key={item}>{item}, </em>)} </p>
            <label>
                <span>Recipe Method:</span>
                <textarea
                onChange={(e)=>setMethod(e.target.value)}
                value={method}
                required
                />
            </label>
            <label>
                <span>Cooking Time:</span>
                <input
                type="number"
                onChange={(e)=>setCookingTime(e.target.value)}
                value={cookingTime}
                required
                />
            </label>
            <button className ="btn">Submit</button>
        </form>
    </div>
  )
}

export default Create