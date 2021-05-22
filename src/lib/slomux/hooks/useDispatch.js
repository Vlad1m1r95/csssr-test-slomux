import { useContext, createContext } from "react";
import { SlomuxContext } from "../context/SlomuxContext";
export const useDispatch = () => {
  const ctx = useContext(SlomuxContext);
  return ctx.dispatch;
};
