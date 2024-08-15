import { useState } from "react";
import { foodList } from "../FoodItems";
import jackie from "../images/jackie.png"

interface IFoodItem {
  id: number;
  name: string;
  ingredients: string[];
  description: string;
}

const FoodGenerator = () => {
  const [chosenDish, setChosenDish] = useState <IFoodItem>(foodList[0]);

  const generateOnClick = () => {
    const randomIndex = Math.floor(Math.random()*foodList.length);
  
      setChosenDish(foodList[randomIndex])
  
  }

  return (
    <section>
      <h1>Jackies Food Generator</h1>
      <img className = "jackie" width="450" src={jackie} alt="Jackie with an italian hat" />
      <button onClick = {generateOnClick}>Generate dish</button>
      <article>
        
        <h2>Dish for you to cook:</h2>
        <h2>{chosenDish.name}</h2>
        <h3>Ingredients:</h3>
        <ul>{chosenDish.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>
        })}</ul>
        <p>{chosenDish.description}</p>

      </article>
    </section>
  );
}

export default FoodGenerator;