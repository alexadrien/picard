import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { TextField } from "@mui/material";

type IProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

const NumberTextField: FC<IProps> = ({ label, value, onChange }) => {
  const [numberValue, setValue] = useState<number | null>(value);

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(parseInt(e.target.value));

  useEffect(() => {
    if (!numberValue) return;

    onChange(numberValue);
  }, [numberValue]);

  return (
    <TextField
      variant={"standard"}
      label={label}
      value={numberValue}
      onChange={onFieldChange}
      inputProps={{ inputMode: "numeric" }}
      type={"number"}
    />
  );
};

export default NumberTextField;
