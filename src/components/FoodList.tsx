import React, { FC } from "react";
import { useRecoilState } from "recoil";
import { foodListAtom } from "../recoil";
import NewFoodButton from "./NewFoodButton";
import ColumnBox from "./ColumnBox";
import Paper from "./Paper";
import FoodListLine from "./FoodListLine";

const FoodList: FC = () => {
  const [foodList] = useRecoilState(foodListAtom);

  return (
    <Paper>
      <ColumnBox>
        {foodList.map((value, index) => (
          <FoodListLine key={index} index={index} food={value} />
        ))}
        <NewFoodButton />
      </ColumnBox>
    </Paper>
  );
};

export default FoodList;
