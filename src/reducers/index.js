import { combineReducers } from "../lib/slomux";
import { counterReducer } from "./counterReducer";
import { stepReducer } from "./stepReducer";

export const rootReducer = combineReducers({
  stepSize: stepReducer,
  counter: counterReducer,
});
