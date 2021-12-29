import { atom } from "recoil";
import { getDefaultTimeValue } from "./utils/time";
import { FoodList } from "./types";

export const startTimeAtom = atom<string>({
  key: "startTime",
  default: getDefaultTimeValue(),
});

export const foodListAtom = atom<FoodList>({
  key: "foodList",
  default: [
    {
      name: "Cordons bleus",
      duration: 45,
      nbOfFlip: 1,
    },
    {
      name: "Patates",
      duration: 35,
      nbOfFlip: 0,
    },
  ],
});
