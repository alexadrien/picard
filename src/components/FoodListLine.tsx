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
import { updateFoodList } from "../utils/food";

type IProps = {
  index: number;
};

const FoodListLine: FC<IProps> = ({ index }) => {
  const [foodList, setFoodList] = useRecoilState(foodListAtom);
  if (foodList.length === 0) return <></>;

  const food: Food = foodList[index];

  const onDelete = (index: number) => () =>
    setFoodList([
      ...foodList.slice(0, index),
      ...foodList.slice(index + 1, foodList.length),
    ]);

  const onChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) =>
    setFoodList(
      updateFoodList(foodList, index, {
        ...foodList[index],
        name: e.target.value,
      })
    );

  const onNumberChange =
    (index: number, key: "duration" | "nbOfFlip") =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setFoodList(
        updateFoodList(foodList, index, {
          ...foodList[index],
          [key]: parseInt(`${e.target.value}`),
        })
      );

  return (
    <ColumnBox>
      <JustifiedBox>
        <TextTextField
          label={"Nom"}
          value={food.name}
          onChange={onChange(index)}
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
