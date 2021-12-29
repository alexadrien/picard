import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import LineBox from "./LineBox";

const Header: FC = () => {
  return (
    <LineBox>
      <Box
        sx={(theme) => ({
          marginTop: theme.spacing(2),
        })}
      >
        <Typography variant={"h1"}>PicAAArd</Typography>
      </Box>
    </LineBox>
  );
};

export default Header;
