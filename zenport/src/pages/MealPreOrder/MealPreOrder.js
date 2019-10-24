import React, { Component } from "react";
import MealCategory from "./steps/MealCategory/MealCategory";
import MealPreOrderView from "./MealPreOrderView";
import RestaurantSelection from "./steps/RestaurantSelection/RestaurantSelection";
import DishSelection from "./steps/DishSelection/DishSelection";
import Review from "./steps/Review/Review";

class MealPreOrder extends Component {
  getSteps = () => {
    return [
      {
        Component: MealCategory,
        key: "MealCategory"
      },
      {
        Component: RestaurantSelection,
        key: "RestaurantSelection"
      },
      {
        Component: DishSelection,
        key: "DishSelection"
      },
      {
        Component: Review,
        key: "Review"
      }
    ];
  };

  render() {
    const steps = this.getSteps();

    return (
      <>
        <MealPreOrderView steps={steps} />
      </>
    );
  }
}

export default MealPreOrder;
