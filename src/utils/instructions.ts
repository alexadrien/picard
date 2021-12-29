import { FoodList } from "../types";
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
        .map(
          (value1) =>
            `${formatTime(
              addMinutes(parseTime(getStartTimeForFood(endDate, value)), value1)
            )} : Retourner les ${value.name}`
        )
    )
    .reduce(
      (previousValue, currentValue) => [...previousValue, ...currentValue],
      []
    );
