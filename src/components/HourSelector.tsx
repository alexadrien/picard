import React, { ChangeEvent, FC } from "react";
import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { startTimeAtom } from "../recoil";
import LineBox from "./LineBox";

const HourSelector: FC = () => {
  const [startTime, setStartTime] = useRecoilState(startTimeAtom);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setStartTime(e.target.value);

  return (
    <LineBox>
      <TextField
        label={"Heure de début"}
        type={"time"}
        inputProps={{
          step: 300,
        }}
        onChange={onChange}
        value={startTime}
        sx={{
          width: "60%",
        }}
      />
    </LineBox>
  );
};

export default HourSelector;
