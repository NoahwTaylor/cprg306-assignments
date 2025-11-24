"use client"

import { useEffect, useState } from "react"; 



export async function fetchMealIdeas(ingredient)
  {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const result = await data.json();
    
    return result;
  }

export default function MealIdeas({ingredient})
{
  const [meals, setMeals] = useState([]);
  
  async function loadMealIdeas()
  {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData.meals || []);
  }

  useEffect (() =>{
    loadMealIdeas();
  }, [ingredient])


  return(
    <div className="mt-10 w-1/4">
      <header>
        <h3>Meal Ideas for &quot;{ingredient}&quot;</h3>
      </header>
      <div className="grid grid-cols-2 gap-1">
        {meals.map((meal) =>(
          <p className="border-2 p-2 rounded-md text-center" key={meal.idMeal}>{meal.strMeal}</p>
        ))}
      </div>
    </div>
  )
  
}