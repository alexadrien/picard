import React, { FC } from "react";
import { Box } from "@mui/material";

const ColumnBox: FC = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: theme.spacing(2),
      })}
    >
      {children}
    </Box>
  );
};

export default ColumnBox;
