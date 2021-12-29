import React, { FC } from "react";
import { Box, List, Typography } from "@mui/material";
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
import InstructionLine from "./InstructionLine";

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
            <InstructionLine
              key={index}
              instruction={{ name: value, date: "12:34" }}
            />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default InstructionList;
