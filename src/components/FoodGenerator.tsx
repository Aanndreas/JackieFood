import { useState } from "react";
import { foodList } from "../FoodItems";
import jackie from "../images/jackie.png";
import mustache from "../images/mustache.svg";
import IFoodItem from "../models/IFoodItem";
import { DisplayDish } from "./DisplayDish";
import { Button } from "./Button";

const FoodGenerator = () => {
  const [chosenDish, setChosenDish] = useState<IFoodItem>(foodList[0]);
  const [showMustache, setShowMustache] = useState(
    chosenDish.name === "Fettuccine Alfredo"
  );

  const generateOnClick = () => {
    const randomIndex = Math.floor(Math.random() * foodList.length);
    if (chosenDish.id === randomIndex + 1) {
      generateOnClick();
    } else {
      setChosenDish(foodList[randomIndex]);
      if (randomIndex === 4) {
        setShowMustache(true);
      } else {
        setShowMustache(false);
      }
    }
  };

  return (
    <section>
      <h1>Jackie's Food Generator</h1>
      <img
        className="jackie"
        width="450"
        src={jackie}
        alt="Jackie with an italian hat"
      />
      {showMustache && (
        <img src={mustache} alt="a black mustache" className="mustache" />
      )}
      <Button generateDish={generateOnClick}></Button>
      <DisplayDish dish={chosenDish}></DisplayDish>
    </section>
  );
};

export default FoodGenerator;
