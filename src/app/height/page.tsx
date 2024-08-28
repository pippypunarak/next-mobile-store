"use client";
import React, { useState } from "react";
import { useAppContext } from "../../app/ContextApi";
import { useRouter } from "next/navigation";
import HeightInput from "../components/HeightInput";

const Height: React.FC = () => {
  const router = useRouter();
  const { setHeight } = useAppContext();
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHeight(input);
    router.push("/");
  };

  return (
    <HeightInput
      input={input}
      setInput={setInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default Height;
