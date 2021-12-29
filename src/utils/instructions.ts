import { FoodList, Instruction } from "../types";
import { formatTime, getStartTimeForFood } from "./time";
import { addMinutes } from "date-fns";

export const generateFlipInstructions = (
  foodList: FoodList,
  endDate: Date
): Array<Instruction> =>
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
            addMinutes(getStartTimeForFood(endDate, value), value1)
          ),
        }))
    )
    .reduce(
      (previousValue, currentValue) => [...previousValue, ...currentValue],
      []
    );

export const generateFoodStartInstructions = (
  foodList: FoodList,
  endDate: Date
): Array<Instruction> =>
  foodList.map((value) => ({
    name: `Enfourner les ${value.name}`,
    date: formatTime(getStartTimeForFood(endDate, value)),
  }));

export const generateEndInstruction = (endDate: Date): Instruction => ({
  name: `Sortir tout et go à table 😋`,
  date: formatTime(endDate),
});
