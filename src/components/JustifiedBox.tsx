import React, { FC } from "react";
import { Box } from "@mui/material";

const JustifiedBox: FC = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(1),
        width: "100%",
      })}
    >
      {children}
    </Box>
  );
};

export default JustifiedBox;
