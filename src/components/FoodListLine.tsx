import React, { ChangeEvent, FC } from "react";
import { IconButton } from "@mui/material";
import ColumnBox from "./ColumnBox";
import JustifiedBox from "./JustifiedBox";
import { Food } from "../types";
import TextTextField from "./TextTextField";
import { useRecoilState } from "recoil";
import { foodListAtom } from "../recoil";
import DeleteIcon from "@mui/icons-material/Delete";
import NumberTextField from "./NumberTextField";

type IProps = {
  food: Food;
  index: number;
};

const FoodListLine: FC<IProps> = ({ food, index }) => {
  const [foodList, setFoodList] = useRecoilState(foodListAtom);

  const onDelete = (index: number) => () =>
    setFoodList([
      ...foodList.slice(0, index),
      ...foodList.slice(index + 1, foodList.length),
    ]);

  const onChange =
    (index: number, key: "name" | "duration" | "nbOfFlip") =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setFoodList([
        ...foodList.slice(0, index),
        {
          ...foodList[index],
          [key]: e.target.value,
        },
        ...foodList.slice(index + 1, foodList.length),
      ]);

  const onNumberChange =
    (index: number, key: "duration" | "nbOfFlip") =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setFoodList([
        ...foodList.slice(0, index),
        {
          ...foodList[index],
          [key]: parseInt(`${e.target.value}`),
        },
        ...foodList.slice(index + 1, foodList.length),
      ]);

  return (
    <ColumnBox>
      <JustifiedBox>
        <TextTextField
          label={"Nom"}
          value={food.name}
          onChange={onChange(index, "name")}
        />
        <IconButton onClick={onDelete(index)}>
          <DeleteIcon />
        </IconButton>
      </JustifiedBox>
      <JustifiedBox>
        <NumberTextField
          label={"Temps de cuisson"}
          value={food.duration}
          onChange={onNumberChange(index, "duration")}
        />
        <NumberTextField
          label={"Je dois remuer # fois"}
          value={food.nbOfFlip}
          onChange={onNumberChange(index, "nbOfFlip")}
        />
      </JustifiedBox>
    </ColumnBox>
  );
};

export default FoodListLine;
