import { Food, FoodList } from "../types";

export const getLongestFoodToCook = (foodList: FoodList): Food | null => {
  if (foodList.length === 0) return null;

  return foodList.slice().sort((a, b) => b.duration - a.duration)[0];
};
