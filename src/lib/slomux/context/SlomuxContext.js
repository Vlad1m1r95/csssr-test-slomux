import { createContext } from "react";
import { createStore } from "../createStore";

const SlomuxContext = createContext({});
SlomuxContext.displayName = "CartContext";

export { SlomuxContext };
