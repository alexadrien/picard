import React, { FC } from "react";
import { Box } from "@mui/material";

const LineBox: FC = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: theme.spacing(3),
      })}
    >
      {children}
    </Box>
  );
};

export default LineBox;
