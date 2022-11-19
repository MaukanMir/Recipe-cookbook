//styles
import "./RecipeList.css";
//react-router-dom
import {Link} from "react-router-dom"
//Import funtions here
import {useTheme} from "./UseThem"
// react-icons import here
import {AiFillDelete} from "react-icons/ai"
import {MdModeEdit} from "react-icons/md"
//Project fire store import
import { projectFirestore } from "../firebase/config";


const RecipeList = ({recipes}) => {

  const {mode} = useTheme()

  if(recipes.length ===0){
    return <div className="error">No Recipes to Load....</div>
  }

  const handleClick = (id)=>{
    projectFirestore.collection("recipes").doc(id).delete();
  }

  return (
    <div className='recipe-list'>
        {recipes.map(recipe=>(
            <div key={recipe.id} className ={`card ${mode}`}> 
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div> {recipe.method.substring(0,100)}.... </div>
            <Link to ={`/recipes/${recipe.id}`}>Cook This</Link>
            <AiFillDelete
            className="delete"
            onClick ={()=> handleClick(recipe.id)}
            />
            </div>
        ))}
    </div>
  )
}

export default RecipeList