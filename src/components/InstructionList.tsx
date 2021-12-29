import React, { FC } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { foodListAtom, startTimeAtom } from "../recoil";
import { getLongestFoodToCook } from "../utils/food";
import { getEndTime } from "../utils/time";
import Paper from "./Paper";
import LineBox from "./LineBox";
import {
  generateEndInstruction,
  generateFlipInstructions,
  generateFoodStartInstructions,
} from "../utils/instructions";

const InstructionList: FC = () => {
  const startTime = useRecoilValue(startTimeAtom);
  const foodList = useRecoilValue(foodListAtom);

  const firstFoodToCook = getLongestFoodToCook(foodList);
  if (!firstFoodToCook) return <></>;

  const endDate = getEndTime(startTime, firstFoodToCook);

  const instructions: Array<string> = [
    ...generateFlipInstructions(foodList, endDate),
    ...generateFoodStartInstructions(foodList, endDate),
    generateEndInstruction(endDate),
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
