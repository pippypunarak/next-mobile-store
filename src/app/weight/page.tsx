"use client";
import React, { useState } from "react";
import { useAppContext } from "../../app/ContextApi";
import { useRouter } from "next/navigation";
import WeightInput from "../components/WeightInput";

const Weight: React.FC = () => {
  const router = useRouter();
  const { setWeight } = useAppContext();
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWeight(input);
    router.push("/height");
  };

  return (
    <WeightInput
      input={input}
      setInput={setInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default Weight;
