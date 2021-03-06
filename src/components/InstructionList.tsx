import React, { FC } from "react";
import { Box, List, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { foodListAtom, startTimeAtom } from "../recoil";
import { getLongestFoodToCook } from "../utils/food";
import { getEndTime } from "../utils/time";
import Paper from "./Paper";
import LineBox from "./LineBox";
import { generateInstructions } from "../utils/instructions";
import InstructionLine from "./InstructionLine";
import { Instruction } from "../types";

const InstructionList: FC = () => {
  const startTime = useRecoilValue(startTimeAtom);
  const foodList = useRecoilValue(foodListAtom);

  const firstFoodToCook = getLongestFoodToCook(foodList);
  if (!firstFoodToCook) return <></>;

  const endDate: Date = getEndTime(startTime, firstFoodToCook);

  const instructions: Array<Instruction> = generateInstructions(
    endDate,
    foodList
  );

  return (
    <Box>
      <LineBox>
        <Typography variant={"h2"}>👇 🍴 Instructions 👇</Typography>
      </LineBox>
      <Paper>
        <List>
          {instructions.map((value, index) => (
            <InstructionLine key={index} instruction={value} />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default InstructionList;
