"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppContextType {
  weight: string;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  const value = { weight, setWeight, height, setHeight };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
