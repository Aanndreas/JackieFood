import IFoodItem from "../models/IFoodItem";

interface IDisplayDishProps {
  dish: IFoodItem;
}

export const DisplayDish = ({ dish }: IDisplayDishProps) => {


  return (
    <>
      <article>
        <h2>Dish for you to cook:</h2>
        <h3 className="dish_name">{dish.name}</h3>
        <h3>Ingredients:</h3>
        {dish.ingredients.length >= 6 ? <>
          <ul className="many_ingredients">
          {dish.ingredients.map((ingredient, index) => {
            return <li key={index} className="ingredient_item"><input type="checkbox"></input>{ingredient}</li>;
          })}
        </ul>
        </> : <>
        <ul>
          {dish.ingredients.map((ingredient, index) => {
            return <li key={index} className="ingredient_item"><input type="checkbox"></input>{ingredient}</li>;
          })}
        </ul>
        </>
         }

        <p>{dish.description}</p>
      </article>
    </>
  );
};
