"use client";
import React from "react";
import { Result } from "./components/Information";
import { useAppContext } from "./ContextApi";

const App = () => {
  const { weight, height } = useAppContext();
  return <Result weight={weight} height={height} />;
};

export default App;
