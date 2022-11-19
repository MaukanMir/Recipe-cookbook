//React imports here
import {useEffect, useState} from 'react'
//import styles here
import "./Home.css"
//import firebase
import {projectFirestore} from "../../firebase/config"
//Components
import RecipeList from '../../Components/RecipeList';


const Home = () => {

  const [data,setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error,setError] = useState(null);

  useEffect(()=>{

    setIsPending(true);

    const unsub = projectFirestore.collection("recipes").onSnapshot((snapshot)=>{
      if(snapshot.empty){
        setError("No recipes to load...")
        setIsPending(false);
      }else{
        let results = []
        snapshot.docs.forEach(doc=>{
          results.push({id:doc.id, ...doc.data()})
        })
        setData(results);
        setIsPending(false);
      }
    },(err)=>{
      setError(err.message)
      setIsPending(false);
    });

    return ()=> unsub();


  },[])

  return (
    <div className ="home">
            {error && <p className ="error">There is an error</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes ={data} />}
    </div>
  )
}

export default Home