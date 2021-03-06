import React, { FC } from "react";
import { Box, ListItem, Typography } from "@mui/material";
import { Instruction } from "../types";
import { formatTime } from "../utils/time";

type IProps = {
  instruction: Instruction;
};

const InstructionLine: FC<IProps> = ({ instruction }) => {
  return (
    <ListItem>
      <Box
        sx={(theme) => ({
          marginRight: theme.spacing(1),
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "baseline",
        })}
      >
        <Typography variant={"button"}>
          {formatTime(instruction.date)}
        </Typography>
      </Box>
      <Typography variant={"body2"}>{instruction.name}</Typography>
    </ListItem>
  );
};

export default InstructionLine;
