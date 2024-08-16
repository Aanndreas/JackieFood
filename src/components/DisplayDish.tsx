import IFoodItem from "../models/IFoodItem";

interface IDisplayDishProps {
  dish: IFoodItem;
}

export const DisplayDish = ({ dish }: IDisplayDishProps) => {
  return (
    <>
      <article>
        <h2>Dish for you to cook:</h2>
        <h2>{dish.name}</h2>
        <h3>Ingredients:</h3>
        <ul>
          {dish.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
        <p>{dish.description}</p>
      </article>
    </>
  );
};
