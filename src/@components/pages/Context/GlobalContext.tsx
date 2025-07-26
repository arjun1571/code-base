"use client";
import React, { createContext, useState, ReactNode } from "react";

type GlobalContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (data: boolean) => void;
  isSignUpDrawer: boolean;
  setIsSignUpDrawer: (data: boolean) => void;
  isCartDrawer: boolean;
  setIsCartDrawer: (data: boolean) => void;
  isMenuDrawer: boolean;
  setIsMenuDrawer: (data: boolean) => void;
};

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isSignUpDrawer, setIsSignUpDrawer] = useState<boolean>(false);
  const [isCartDrawer, setIsCartDrawer] = useState<boolean>(false);
  const [isMenuDrawer, setIsMenuDrawer] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isSidebarOpen");
      return storedValue ? JSON.parse(storedValue) : false;
    }
    return false;
  });

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isSignUpDrawer,
        setIsSignUpDrawer,
        isCartDrawer,
        setIsCartDrawer,
        isMenuDrawer,
        setIsMenuDrawer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
