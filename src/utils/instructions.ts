import { FoodList, Instruction } from "../types";
import { formatTime, getStartTimeForFood, parseTime } from "./time";
import { addMinutes } from "date-fns";

export const generateFlipInstructions = (foodList: FoodList, endDate: string) =>
  foodList
    .map((value) =>
      new Array(value.nbOfFlip)
        .fill(null)
        .map(
          (value1, index) =>
            (index + 1) * (value.duration / (value.nbOfFlip + 1))
        )
        .map((value1) => ({
          name: `Retourner les ${value.name}`,
          date: formatTime(
            addMinutes(parseTime(getStartTimeForFood(endDate, value)), value1)
          ),
        }))
    )
    .reduce(
      (previousValue, currentValue) => [...previousValue, ...currentValue],
      []
    );

export const generateFoodStartInstructions = (
  foodList: FoodList,
  endDate: string
) =>
  foodList.map((value) => ({
    name: `Enfourner les ${value.name}`,
    date: getStartTimeForFood(endDate, value),
  }));

export const generateEndInstruction = (endDate: string): Instruction => ({
  name: `Sortir tout et go à table 😋`,
  date: endDate,
});
