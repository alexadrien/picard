import React, { ChangeEvent, FC } from "react";
import { TextField } from "@mui/material";

type IProps = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextTextField: FC<IProps> = ({ label, value, onChange }) => {
  return (
    <TextField
      variant={"standard"}
      label={label}
      value={value}
      onChange={onChange}
      sx={{ width: "100%" }}
    />
  );
};

export default TextTextField;
