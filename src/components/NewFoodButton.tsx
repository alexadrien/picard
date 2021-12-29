import React, { FC } from "react";
import { Box, Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { foodListAtom } from "../recoil";

const NewFoodButton: FC = () => {
  const [foodList, setFoodList] = useRecoilState(foodListAtom);

  const onClick = () => {
    setFoodList([
      ...foodList,
      {
        name: "",
        nbOfFlip: 0,
        duration: 0,
      },
    ]);
  };

  return (
    <Box>
      <Button variant={"contained"} onClick={onClick}>
        +1
      </Button>
    </Box>
  );
};

export default NewFoodButton;
