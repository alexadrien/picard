import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import LineBox from "./LineBox";

const Header: FC = () => {
  return (
    <LineBox>
      <Box
        sx={(theme) => ({
          marginTop: theme.spacing(2),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <Typography variant={"h1"}>PicAAArd</Typography>
        <Typography variant={"subtitle1"}>Powered by A³</Typography>
      </Box>
    </LineBox>
  );
};

export default Header;
