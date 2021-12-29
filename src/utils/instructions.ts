import { Food, FoodList, Instruction } from "../types";
import { formatTime, getStartTimeForFood } from "./time";
import { addMinutes } from "date-fns";

const getInstruction =
  (food: Food, endDate: Date) =>
  (flipDuration: number): Instruction => ({
    name: `Retourner les ${food.name}`,
    date: formatTime(
      addMinutes(getStartTimeForFood(endDate, food), flipDuration)
    ),
  });

const getFlipDuration =
  (food: Food) =>
  (arrayNullValue: null, index: number): number =>
    (index + 1) * (food.duration / (food.nbOfFlip + 1));

const getInstructionsForThatFood = (endDate: Date) => (food: Food) =>
  new Array(food.nbOfFlip)
    .fill(null)
    .map(getFlipDuration(food))
    .map(getInstruction(food, endDate));

export const generateFlipInstructions = (
  foodList: FoodList,
  endDate: Date
): Array<Instruction> =>
  new Array<Instruction>().concat(
    ...foodList.map(getInstructionsForThatFood(endDate))
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

export const generateInstructions = (
  endDate: Date,
  foodList: FoodList
): Array<Instruction> =>
  [
    ...generateFlipInstructions(foodList, endDate),
    ...generateFoodStartInstructions(foodList, endDate),
    generateEndInstruction(endDate),
  ].sort((a, b) => (a.date < b.date ? -1 : 1));
