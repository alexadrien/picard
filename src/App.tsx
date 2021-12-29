import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import HourSelector from "./components/HourSelector";
import FoodList from "./components/FoodList";
import InstructionList from "./components/InstructionList";
import Header from "./components/Header";

function App() {
  return (
    <Container maxWidth={"xs"}>
      <Header />
      <HourSelector />
      <FoodList />
      <InstructionList />
    </Container>
  );
}

export default App;
