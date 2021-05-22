import React from "react";
import { SlomuxContext } from "./SlomuxContext";

export const SlomuxProvider = ({ store, children }) => {
  return (
    <SlomuxContext.Provider value={store}>{children}</SlomuxContext.Provider>
  );
};
