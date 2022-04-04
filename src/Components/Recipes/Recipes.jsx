import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Recipes() {
    const [recipes, setRecipes] = useState([]);


useEffect (() => {
    axios.
    get('https://studiographene-exercise-api.herokuapp.com/foods')
    .then((info) => {
        setRecipes(info.data)
    })
    .catch((err) => {
        console.log(err);
    })
},[])

  return (
    <div>
    {recipes.map((recipes) => {
        return (
            <>
             <h2>{recipes.title}</h2>
             <h3>{recipes.description}</h3>
             <h2>{recipes.price}</h2>
            </>
        )
    })}
    </div>
  )
}

export default Recipes