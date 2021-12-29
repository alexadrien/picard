import React, { FC } from "react";
import { Box, ListItem, Typography } from "@mui/material";

type IProps = {
  date: string;
  name: string;
};

const InstructionLine: FC<IProps> = ({ date, name }) => {
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
        <Typography variant={"button"}>{date}</Typography>
      </Box>
      <Typography variant={"body2"}>{name}</Typography>
    </ListItem>
  );
};

export default InstructionLine;
