import React, { FC } from "react";
import { Paper as MuiPaper } from "@mui/material";

const Paper: FC = ({ children }) => {
  return (
    <MuiPaper
      sx={(theme) => ({
        padding: theme.spacing(2),
        marginBottom: theme.spacing(3),
      })}
    >
      {children}
    </MuiPaper>
  );
};

export default Paper;
