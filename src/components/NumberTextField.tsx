import React, { ChangeEvent, FC } from "react";
import { TextField } from "@mui/material";

type IProps = {
  label: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const NumberTextField: FC<IProps> = ({ label, value, onChange }) => {
  return (
    <TextField
      variant={"standard"}
      label={label}
      value={value}
      onChange={onChange}
      type={"number"}
    />
  );
};

export default NumberTextField;
