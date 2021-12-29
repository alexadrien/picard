import React, { ChangeEvent, FC } from "react";
import { IconButton } from "@mui/material";
import { useRecoilState } from "recoil";
import { foodListAtom } from "../recoil";
import NewFoodButton from "./NewFoodButton";
import ColumnBox from "./ColumnBox";
import DeleteIcon from "@mui/icons-material/Delete";
import JustifiedBox from "./JustifiedBox";
import Paper from "./Paper";
import NumberTextField from "./NumberTextField";
import TextTextField from "./TextTextField";

const FoodList: FC = () => {
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
    <Paper>
      <ColumnBox>
        {foodList.map((value, index) => (
          <ColumnBox key={index}>
            <JustifiedBox>
              <TextTextField
                label={"Nom"}
                value={value.name}
                onChange={onChange(index, "name")}
              />
              <IconButton onClick={onDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </JustifiedBox>
            <JustifiedBox>
              <NumberTextField
                label={"Temps de cuisson"}
                value={value.duration}
                onChange={onNumberChange(index, "duration")}
              />
              <NumberTextField
                label={"Je dois remuer # fois"}
                value={value.nbOfFlip}
                onChange={onNumberChange(index, "nbOfFlip")}
              />
            </JustifiedBox>
          </ColumnBox>
        ))}
        <NewFoodButton />
      </ColumnBox>
    </Paper>
  );
};

export default FoodList;
