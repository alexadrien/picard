import React, { ChangeEvent, FC } from "react";
import { IconButton, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { foodListAtom } from "../recoil";
import NewFoodButton from "./NewFoodButton";
import ColumnBox from "./ColumnBox";
import DeleteIcon from "@mui/icons-material/Delete";
import JustifiedBox from "./JustifiedBox";
import Paper from "./Paper";

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
              <TextField
                variant={"standard"}
                label={"Nom"}
                value={value.name}
                onChange={onChange(index, "name")}
                sx={{ width: "100%" }}
              />
              <IconButton onClick={onDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </JustifiedBox>
            <JustifiedBox>
              <TextField
                variant={"standard"}
                label={"Temps de cuisson"}
                value={value.duration}
                type={"number"}
                onChange={onNumberChange(index, "duration")}
              />
              <TextField
                variant={"standard"}
                label={"Je dois remuer # fois"}
                value={value.nbOfFlip}
                type={"number"}
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