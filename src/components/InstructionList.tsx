import React, { FC } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { foodListAtom, startTimeAtom } from "../recoil";
import { getLongestFoodToCook } from "../utils/food";
import {
  formatTime,
  getEndTime,
  getStartTimeForFood,
  parseTime,
} from "../utils/time";
import { addMinutes } from "date-fns";
import Paper from "./Paper";
import LineBox from "./LineBox";

const InstructionList: FC = () => {
  const startTime = useRecoilValue(startTimeAtom);
  const foodList = useRecoilValue(foodListAtom);

  const firstFoodToCook = getLongestFoodToCook(foodList);
  if (!firstFoodToCook) return <></>;

  const endDate = getEndTime(startTime, firstFoodToCook);

  const flipInstructions = foodList
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

  const instructions: Array<string> = [
    ...flipInstructions,
    ...foodList.map(
      (value) =>
        `${getStartTimeForFood(endDate, value)} : Enfourner les ${value.name}`
    ),
    `${endDate} : Sortir tout et à table 😋`,
  ].sort();

  return (
    <Box>
      <LineBox>
        <Typography variant={"h2"}>👇 🍴 Instructions 👇</Typography>
      </LineBox>
      <Paper>
        <List>
          {instructions.map((value, index) => (
            <ListItem key={index}>
              <Typography variant={"body1"}>{value}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default InstructionList;
